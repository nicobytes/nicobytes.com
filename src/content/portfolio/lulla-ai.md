---
pubDate: '2020-06-30'
title: "Lulla AI"
description: "A mobile app with AI that uses the device's microphone to analyze a baby's sleep patterns"
image: "/portfolio/lulla-ai.jpg"
url: "https://lullaai.com/"
type: "private"
---

A cross-platform app available in <a href="https://play.google.com/store/apps/details?id=com.lullaai" target="_blank">Google Play</a> and <a href="https://apps.apple.com/us/app/lullaai-baby-sleep-trainer/id1489170001" target="_blank">App Store</a> built with Ionic, Angular, and CapacitorJS. This app was designed as an AI-powered Baby Sleep Coach that uses the device's microphone to analyze a baby's sleep patterns.

### AI-powered Baby Sleep Coach

I contributed by integrating the functionality that uses the device's microphone to monitor and analyze a baby's sleep patterns. This involved employing <a href="https://www.tensorflow.org/js" target="_blank">TensorFlowJS</a> to run an ML model directly on the device for audio analysis. This AI model was trained by the LullaAI team to identify distinct baby sounds. To seamlessly incorporate this feature, I used <a href="https://capacitorjs.com/" target="_blank">CapacitorJS</a>, Angular, and Ionic to enable this integration natively within the app to assist parents in understanding and improving their baby's sleep habits.

<figure class="h-auto w-auto object-cover md:h-[540px]">
  <Image src="/portfolio/lulla_ai_night_mode.jpg" alt="mardown" width="960" height="540" decoding="async" loading="lazy" />
</figure>

Watch <a href="https://youtu.be/h8XU6L8ZvV0?rel=0" target="_blank">this video</a> to see how this feature works.

### Tracking baby's sleep patterns

I was tasked with both maintaining the app and developing new features. My contributions included redesigning various views and creating the logs UI, which allows parents to track their baby's sleep patterns based on the data collected.

<figure class="h-auto w-auto object-cover md:h-[540px]">
  <Image src="/portfolio/lulla_ai_logs.jpg" alt="mardown" width="960" height="540" decoding="async" loading="lazy" />
</figure>

### The stack

For this app, I used Angular, Ionic and <a href="https://capacitorjs.com/" target="_blank">CapacitorJS</a> as the main technologies, and to run the AI model on the device I used TensorflowJS.