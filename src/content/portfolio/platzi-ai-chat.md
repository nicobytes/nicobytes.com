---
pubDate: '2023-12-30'
title: 'Platzi AI Chat'
description: 'A custom Chat created for Platzi to help students with their learning process with AI'
image: '/portfolio/chat_ada.jpg'
url: 'https://platzi.com/chat/'
type: 'private'
---

My work on the Platzi AI Chat, Ada, involved both the backend and frontend. I employed HonoJS for serverless Cloudflare functions, enabling REST API consumption, and LangChainJS for managing LLMs (Large Language Models) like GPT-4 and GPT-3, utilizing prompt engineering and the RAG technique for customized interactions. On the frontend, I designed reusable React components and optimized the user interface with NextJS/React and TypeScript, ensuring that the chat offered 24/7 learning assistance.

A challenge in this project was running this chat for more than 4 million users with different profiles and needs; therefore, scalability was a key point to consider. During this project, I worked with a multidisciplinary team and led different parts of the project with success.

### Code recommendations

Using <a href="https://platform.openai.com/docs/guides/prompt-engineering" target="_blank">prompt engineering</a> and <a href="https://www.langchain.com/langchain" target="_blank">LangChain</a>, the chat can provide code recommendations for any programming language and respond in a friendly tone for students who follow the context of the conversation.

<figure class="h-auto w-auto object-cover md:h-[540px]">
  <Image src="/portfolio/chat_ada_code.jpg" alt="mardown" width="960" height="540" decoding="async" loading="lazy" />
</figure>

### Multi-themes support

A challenge in this project was to support multiple themes since Platzi recently launched a new UI; therefore, the chat should be able to support both the old and new UI. In this part, I created reusable React components and used <a href="https://storybook.js.org/" target="_blank">StoryBook</a> to test the components in different themes.

<figure class="h-auto w-auto object-cover md:h-[540px]">
  <Image src="/portfolio/chat_ada_themes.jpg" alt="themes" width="960" height="540" decoding="async" loading="lazy" />
</figure>

### Recommend classes, courses and routes to learn

The chat can recommend classes, courses, and learning paths based on the user's interests. In this part, all the content in Platzi was transformed into vectors (embeddings), and using  <a href="https://www.pinecone.io/" target="_blank">Pinecone</a> as a vector database, we can inject new knowledge into LLMs like GPT-4 and GPT-3 and give an accurate answer.

<figure class="h-auto w-auto object-cover md:h-[540px]">
  <Image src="/portfolio/chat_ada_classes.jpg" alt="classes" width="960" height="540" decoding="async" loading="lazy" />
</figure>

### The stack

In this project, I used NextJS/React with TypeScript for the frontend, followed the best practices, and integrated this app within a Monorepo with <a href="https://turbo.build/" target="_blank">TurboRepo</a> to integrate this app in the Platzi ecosystem. Using TurboRepo, I contributed to creating a type library to share the models with others microfrontends. On the other side, for the backend, I used <a href="https://hono.dev/" target="_blank">HonoJS</a> for serverless Cloudflare functions, enabling REST API consumption, and LangChainJS for managing LLMs like GPT-4 and GPT-3. I also participated in the creation of other microservices based on TypeScript to resolve specific parts of the chat logic.

