---
layout: ../../layouts/ProjectLayout.astro
title: Airproxy
iconUrl: /assets/projects/airproxy.png
description: Gain the full power of the Airtable platform, and build businesses without worrying about scaling, limitations or rate limits. Get busy building!
tags: []
featured: true
externalLink: https://airproxy.app
imageUrl: /assets/projects/airproxy/screenshot.webp
canonicalUrl: /projects/airproxy
---

## What is Airproxy?

Airproxy is a cloud-native proxy service designed specifically to help teams and businesses leverage [Airtable's](https://airtable.com) awesome user experience and flexibility in production.

In my travels, I've found many businesses who use and love Airtable for an awe-inspiring amount of internal processes and practises, but as soon as it comes to serving data to customers, they have other content management systems to handle this kind of traffic.

Now; I hate vendor sprawl. During my time as CTO at [Imperial Wealth](https://imperialwealth.com), I had a small team of elite developers who needed to cater to 5 distinct, and largely independent business units; each with their own markets, demands and release schedules.

Each of these businesses had grand ambitions, and I and the team wanted to facilitate this. A large amount of the offerings for each of the business were information based - so we needed a content management strategy that would

1. keep up with our release cycle, and enable us to iterate quickly,
2. have a user-friendly interface that would allow non-developers to make meaningful contributions to the development efforts of our teams, and
3. be versatile enough to handle the unique data schemas we needed to reduce data duplication and stick to as close to 3rd normal form as possible.

Enter: Airtable.

## Why did I build Airproxy?

Airtable's API is brilliant, right up until you need to use it in production. Its biggest limitation is that of the 5 requests per second rate limit, and now after a recent change, the fact that you cannot use it as a content delivery network (files, images, etc.).

This means that if you want to use it for data that can change quickly, you're out of luck.

That is, unless you use [Airproxy](https://airproxy.app), of course.

At Imperial Wealth, I created a _very_ basic proxy service that allowed us to get up and running quickly. It was built with Laravel, delivered on Forge and AWS and worked well for the amount of time that we put into it; but it wasn't directly delivering value to our customers, so we only had limited about of time to make improvements.

That, coupled with the fact that it was a server-based application, meaning that it couldn't scale with our increasingly growing user base (Imperial Wealth recently went international, releasing in the US markets), we needed a better solution.

It needed to scale to meet our needs, instantly.

It needed to be able to serve our static files, globally.

It needed to be able to protect our data, securely.

It needed to enable our development team to make more reliable user interfaces, quickly.

And, arguably most importantly, for me at least, it needed to be resilient, and not cause me to wake me up at 4am because the server had crashed after a massive surge of traffic.

Enter: [Airproxy](https://airproxy.app).

## Who is Airproxy for?

Airproxy was designed for everyone, like entrepreneurs who need to focus on iterating their idea, rather than their content management strategy, to enterprise customers that need to need to increase their technology agility and synergy capacity between teams, and reduce vendor sprawl.

## Technologies

For the technologically curious of you our there, here is the stack that I chose to work with when building Airproxy...

- Frontend: NextJS, Tailwind
- Backend: Node, Upstash (QStash), CloudFlare Workers
- API / Caching: CloudFlare Workers, CloudFlare KV, CloudFlare Durable Objects
- Hosting: Vercel, CloudFlare
