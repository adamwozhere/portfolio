---
title: 'Invoice App'
type: 'Personal project'
description: 'A full-stack invoicing app that allows user to create and manage customers and invoices online.'
order: 1
website: 'https://mint-invoicing.onrender.com'
github: 'https://github.com/adamwozhere/invoice-app'
tags: ['TypeScript', 'React', 'Express', 'MongoDB', 'Vite', 'Tailwind']
---

After completing the Full Stack Open course from Helsinki University, I built Mint Invoicing—a full-stack app using React, Express, and MongoDB. Drawing from my experience managing my own accounting as a freelance motion graphics designer, I aimed to create an invoicing app to handle customer and invoice records. This project provided a practical way to test my skills across the entire stack.

![Mint invoicing app](@assets/invoice-app-01.png)

## Selecting the right tech stack

I chose React and Express for their simplicity and familiarity. Although I considered Next.js, the ongoing transition to new features like App Router and Server Actions added unnecessary complexity. Having the frontend and backend separate also made deployment easy as I could use a microservices architecture. With the React app hosted on a CDN, I could then just host the REST API server and Mongo database as separate services.

![Mint invoicing app](@assets/invoice-app-02.png)

## Handling problems and challenges in development

The frontend UI, particularly the forms for creating invoices, required careful planning. I used Zod with react-hook-form to handle dynamic validation based on invoice status, allowing real-time error handling. I also integrated a customer creation form into the invoice workflow, improving the user experience.

User authentication also proved quite a challenge. I solved this using JSON Web Tokens issued to the user when logging in, with the Axios on the frontend to automatically send the token along with any API requests to the server. It also handled automatically refreshing the token every 10 minutes, and the server keeps track of valid issued tokens to prevent malicious activity.

![Mint invoicing app](@assets/invoice-app-03.png)

## Lessons and improvements

The main lesson I learnt during this was the importance of project structure. I initially neglected Agile principles, leading to significant restructuring in API server later. Moving forward, I’d focus on implementing small, functional features across the entire app before iterating.

While there are areas for improvement, such as adding email confirmations and mobile responsiveness, I prioritised completing the project to avoid feature creep. Mint Invoicing is a functional prototype, and I’m proud of the skills I developed throughout this process, that I'll be able to bring with me to future projects.
