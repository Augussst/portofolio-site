---
title: Age Calculator App
projectType: web-dev
tools:
  - tool: Sveltekit
thumbnail: /images/uploads/age-calculator.png
projectImages:
  - picture: /images/uploads/age-calculator.png
sourceCode: https://github.com/Augussst/age-calculator
liveDemo: https://augussst-age-calculator.vercel.app/
---
Age calculator app is a solution to the Age calculator app challenge on [Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q).

This app has features as follows:

* View an age in years, months, and days after submitting a valid date through the form
* Receive validation errors if:
  * Any field is empty when the form is submitted
  * The day number is not between 1-31
  * The month number is not between 1-12
  * The year is in the future
  * The date is invalid e.g. 31/04/1991 (there are 30 days in April)
* View the optimal layout for the interface depending on their device's screen size
* See hover and focus states for all interactive elements on the page

Built with Svelte and Sveltekit.
