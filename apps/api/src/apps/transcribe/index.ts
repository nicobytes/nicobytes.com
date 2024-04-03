import { OpenAPIHono } from "@hono/zod-openapi";
import { Bindings } from "@src/bindings";
import whisperRoute from "./routes/whisper";
import OpenAI from "openai";

const app = new OpenAPIHono<{ Bindings: Bindings }>();

app.openapi(whisperRoute, async (c) => {
  const openai = new OpenAI({
    apiKey: c.env.OPENAI_API_KEY
  });

  try {
    const data = await c.req.formData();
    const audioFile = data.get("audio") as unknown as File;

    const translation = await openai.audio.translations.create({
      file: audioFile,
      model: "whisper-1",
    });
    if (!translation.text) {
      return c.json({ error: 'text empty' }, 500);
    }
    return c.json({ transcribe: translation.text }, 200);
  } catch (error) {
    if (error instanceof SyntaxError) {
      return c.json({ error: "Invalid JSON" }, 500);
    }
    return c.json({ error: error }, 500);
  }
});

export default app;
