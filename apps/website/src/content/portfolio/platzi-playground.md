---
pubDate: '2023-12-28'
title: "Platzi Coding Playground"
description: "An online environment with the capability to run Python, SQL, and JavaScript safely in the browser"
image: "/portfolio/playground.jpg"
url: "https://jshero.platzi.com/e/sql/dbfundamentos-select?embed=true&course=Curso+de+Fundamentos+de+Bases+de+Datos&courseId=1566"
type: "private"
---

As an engineer at Platzi, my focus was on revolutionizing online education through innovative product creation and delivery methods. My aim was to enhance the learning experience for students; therefore, I worked in Platzi's Coding Playground, an interactive platform that helps students improve their JavaScript, SQL, and Python skills through challenges directly in the browser. 

In this project, I had the opportunity to create the whole user experience; therefore, I created a simple UI with gamification that allows the students to resolve challenges with a system of 3 lives, and eventually, when the students lose their lives, a button will reveal the solution, and the way to validate the student answer is to run unit tests in that environment.

### Running Python in the browser

I used <a href="https://pyodide.org/en/stable/" target="_blank">Pyodide</a>, a WebAssembly-based Python distribution, to facilitate Python execution in the browser. I contributed to creating a custom runner to enable the Python ecosystem, which includes common libraries such as Pandas, numpy, py-test and more. With this, the students can practice without leaving the platform.

<figure class="h-auto w-auto object-cover md:h-[540px]">
  <Image src="/portfolio/playground_py.jpg" alt="mardown" width="960" height="540" decoding="async" loading="lazy" />
</figure>

### SQL with WebAssembly

To run SQL in the browser, we reuse Pyodide, the runner created above, and using <a href="https://docs.python.org/3/library/sqlite3.html" target="_blank">sqlite3</a> with Python, we can run SQL challenges directly in the browser and execute SQL instructions such as INSERT, SELECT, JOIN, UPDATES, etc. In some cases, the challenges are pre-loaded with a dataset so that the student can use this data and build queries to solve the challenge. Finally, to check the student's answer, the app runs unit tests to validate the expected data.

<figure class="h-auto w-auto object-cover md:h-[540px]">
  <Image src="/portfolio/playground_sql.jpg" alt="classes" width="960" height="540" decoding="async" loading="lazy" />
</figure>

### JavaScript with Sandpack

To run JavaScript in the browser safely, I used <a href="https://sandpack.codesandbox.io/docs" target="_blank">Sandpack</a> by Condesanbox. Sandpack is a component toolkit for creating live-running code editing experiences and allows you to run a whole JavaScript ecosystem, including libraries, in this same environment the unit tests are run with <a href="https://jestjs.io/" target="_blank">Jest</a> to validate that the student answer was correct.

<figure class="h-auto w-auto object-cover md:h-[540px]">
  <Image src="/portfolio/playground_js.jpg" alt="themes" width="960" height="540" decoding="async" loading="lazy" />
</figure>



### The Stack

The app uses NextJS/React and Tailwind CSS for the frontend, and Pyodide and Sandpack to run Python, SQL, and JavaScript safely in the browser.