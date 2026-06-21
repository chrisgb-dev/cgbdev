---
title: Colab Feasibility Landing Page
description: A landing page for property developers seeking feasibility studies and reports
stack:
  - HTML/CSS
  - JavaScript/TypeScript
  - Stripe
  - Docker
github: 
demo: 
image: /img/projects/colab-architect-feasibility.png
year: 2026
---

## Overview

[Colab Architects](https://colabarchitects.com.au) is a prestigous Melbourne-based architecture studio that specialises in creating sustainable facilies for childcare, education, age and disability care, and residential and commercial properties.

### Problem

To help grow their business and client base, Colab required a landing page (independent of their WordPress-based marketing site) for property developers seeking feasibility studies before committing too much capital to their construction or redevelopment projects. One of Colab's team vibe-coded a proof-of-concept project in Base64, then engaged me to build and deploy a production-grade version with Stripe integration for handling payments.

### Solution

My solution was to rebuild the vibe-coded proof-of-concept into a more efficient and maintainable web app using Nuxt. Using the concept's design, I rebuilt the frontend with resuable VueJS components, TailwindCSS and TypeScript. For the backend, I used Nuxt's server components, using Stripe's CLI to handle payments, and PocketBase to persist client details and project information securely. The whole project is deployed to a Virtual Private Server using Docker.

### Key Features

- Nuxt-based full stack app
- Vue and TailwindCSS components
- Stripe, CloudFlare Turnstile and Pocketbase integration
- CI/CD deployment with Docker and a VPS

### Live site

You can find the live site at, [feasibility.colabarchitects.com.au](https://feasibility.colabarchitects.com.au)