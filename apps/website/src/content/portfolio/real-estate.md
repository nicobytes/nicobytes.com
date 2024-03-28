---
pubDate: '2019-06-28'
title: "Real Estate Dashboard"
description: "A real estate app to manage the properties and the process to renting or selling them"
image: "/portfolio/real_estate_cover.jpg"
type: "private"
---

This app was divided in two parts the website to capture new leads and a dashboard to handle the whole process to renting a property.

### Responsive website

The website was built with <a href="https://angular.dev" target="_blank">Angular</a> and <a href="https://ionicframework.com/" target="_blank">Ionic</a> to create a fast and responsive website. When a new lead showed interest in a property, an event was triggered in the dashboard for sellers to get in contact with this customer.

<figure class="h-auto w-auto object-cover md:h-[540px]">
  <Image src="/portfolio/real_estate_mobile.jpg" alt="mardown" width="960" height="540" decoding="async" loading="lazy" />
</figure>

### Kanban board

The dashboard was built with Angular and Ionic to create a <a href="https://en.wikipedia.org/wiki/Kanban_board" target="_blank">Kanban board</a> to manage the properties and the process of renting or selling them. This board was divided into customs columns, representing the process of renting a property, and the properties were represented as cards. This dashboard is only allowed for specific roles through a system of authorization for admins and sellers of the company.


<figure class="h-auto w-auto object-cover md:h-[540px]">
  <Image src="/portfolio/real_estate_board.jpg" alt="mardown" width="960" height="540" decoding="async" loading="lazy" />
</figure>

### Properties Hub

As part of the dashboard, there was a properties hub with a lot of filters to show the properties and information about them. The backend was created using Flask and Python with a REST API, and I used <a href="https://www.couchbase.com/" target="_blank">Couchbase</a>, a NoSQL database that allows me to store a lot of data.

<figure class="h-auto w-auto object-cover md:h-[540px]">
  <Image src="/portfolio/real_estate_pro.jpg" alt="mardown" width="960" height="540" decoding="async" loading="lazy" />
</figure>