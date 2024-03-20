---
pubDate: '2019-06-29'
title: "WhatsApp Chatbot"
image: "/portfolio/chatbot_cover.jpg"
description: "A chatbot to manage medical appointments using the Twilio API for Whatsapp"
type: "private"
---

A chatbot to manage medical appointments using the Twilio API for WhatsApp. This chatbot was designed to help patients schedule appointments, receive reminders, and answer frequently asked questions. It also includes a dashboard to monitor conversations and NPS scores.

### Integration with WhatsApp

Using <a href="https://www.twilio.com/docs/whatsapp/quickstart/node" target="_blank">Twilio API </a> for WhatsApp I contributed by creating a chatbot using NodeJS in the backend and <a href="https://dev.botframework.com/" target="_blank">Microsoft Bot Framework</a> to create conversational AI experiences. I also used <a href="https://www.luis.ai/" target="_blank">Microsoft's LUIS</a> a language understanding service to interpret user goals (intents) and distill valuable information from sentences (entities), such as names, times, dates, identifications, etc. With that data, we created a REST API to handle the booking system and check the availability to finally respond to the user with this information.

<figure class="h-auto w-auto object-cover md:h-[540px]">
  <Image src="/portfolio/chatbot_whatsapp.jpg" alt="mardown" width="960" height="540" decoding="async" loading="lazy" />
</figure>

### Monitoring conversations

To monitor the conversations, I used <a href="https://www.couchbase.com/" target="_blank">Couchbase</a> a NoSQL database that allows me to store a lot of data to eventually run queries to analyze the conversations to get insights. Then, by creating an API with NodeJS and GraphQL we enabled this service to be consumed from an Angular app. Finally, using <a href="https://swimlane.github.io/ngx-charts" target="_blank">ngx-charts</a> we created a dashboard to visualize the data.

<figure class="h-auto w-auto object-cover md:h-[540px]">
  <Image src="/portfolio/chatbot_conversations.jpg" alt="mardown" width="960" height="540" decoding="async" loading="lazy" />
</figure>

### Monitoring NPS scores

In this project was important to measure the satisfaction of the users, so when the user goal is achieved, the chatbot sends a last message asking for a score to rate the attention, and this score is monitored on a dashboard.

<figure class="h-auto w-auto object-cover md:h-[540px]">
  <Image src="/portfolio/chatbot_score.jpg" alt="mardown" width="960" height="540" decoding="async" loading="lazy" />
</figure>

### PWA and responsive design

Another interesting feature was enabled the app as a <a href="https://web.dev/explore/progressive-web-apps" target="_blank">PWA</a> where admin users could watch the metrics from mobile devices. Thinking in this goal the app was built with <a href="https://ionicframework.com/" target="_blank">Ionic</a> and Angular.

<figure class="h-auto w-auto object-cover md:h-[540px]">
  <Image src="/portfolio/chatbot_pwa.jpg" alt="mardown" width="960" height="540" decoding="async" loading="lazy" />
</figure>