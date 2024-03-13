---
pubDate: '2023-12-29'
title: "Platzi Placement English Test"
description: "An English test based on AI to identify the students' English level accurately"
image: "/portfolio/placement_test.jpg"
url: "https://platzi.com/evaluation/placement-test/"
type: "private"
---

This English test is an online exam designed to identify the students' English level accurately with the fewest questions possible. To achieve this goal, I worked on a Computerized Adaptive Test (CAT) algorithm built in Python. This algorithm allows you to choose the next question based on the student's previous answers. This system was enabled to consume across a REST API using FastAPI, and for audio questions, we used an audio-to-text model, in this case Whisper.

### Diferrent types of questions

The exam has different types of questions, such as multiple-choice, audio, and text questions, to check the students' English skills accurately. Each answer is validated by a <a href="https://duolingo-papers.s3.amazonaws.com/other/technical_manual.pdf" target="_blank">Computerized Adaptive Test (CAT) algorithm</a> built in Python that allows you to choose the next question based on the student's previous answers.

<figure class="h-auto w-auto object-cover md:h-[540px]">
  <Image src="/portfolio/placement_test_questions.jpg" alt="mardown" width="960" height="540" decoding="async" loading="lazy" />
</figure>

### Audio questions with AI

An important skill to check is speaking, and this skill was assessed using the user's microphone to allow the user to answer the question. In this part, I worked with the new <a href="https://developer.chrome.com/blog/audio-worklet" target="_blank">AudioWorklet Browser API</a> and NextJS/React to get audio with quality, and then that audio is sent to the server to be processed by <a href="https://openai.com/research/whisper" target="_blank">Whisper model</a> and validated if the answer was correct.

<figure class="h-auto w-auto object-cover md:h-[540px]">
  <Image src="/portfolio/placement_test_audio.jpg" alt="themes" width="960" height="540" decoding="async" loading="lazy" />
</figure>

### Recommendations based on student's answers

When the exam is finished, the user can see the results, and according to the student's answers, the app recommends a learning path according to the level.

<figure class="h-auto w-auto object-cover md:h-[540px]">
  <Image src="/portfolio/placement_test_route.jpg" alt="classes" width="960" height="540" decoding="async" loading="lazy" />
</figure>