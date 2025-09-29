---
job: "Lead Frontend Engineer"
organization: "Archer Affiliates"
location: "NYC, NY"
url: "https://archeraffiliates.com"
from: "2024-01-01 00:00"
to: "2025-01-01 00:00"
tags: ["React", "Next.js", "TypeScript"]
snippets:
  - "Led the complete redesign of an outdated Amazon affiliates platform in Next.js and Material UI that boosted its sales by 50%."
  - "Developed a ticketing service and integrated it into contact, help, and support forms which allowed the admins to review tickets from an admin panel and respond."
  - "Created a paid promotions feature in React with Stripe that allowed the users to request promotions from other users using a fully-fledged request management system."
---

## What Was Going On

Archer Affiliates' CEO David hired me through [Upwork](https://www.upwork.com/freelancers/thekayshawn) as a **frontend engineer**. There were 3 engineers in the team, all 3 were full stack, but they needed someone who was a **master of the frontend** and could modernize their dashboard/portal.

## How Things Evolved

Their designer designed an awesome UI, and I built it all **from scratch**. The app was the same, but newer pages with page-by-page iteration were implemented. Soon, I was promoted to the **frontend lead**, and soon after that a prominent voice in the company.

I helped David hire a project manager to lead in his absence, a QA to assure quality deliveries, and 2 more frontend engineers to help speed up the redesign process once I had all the **architectural decisions and foundations** laid.

## The Cool Stuff I Built

### Complete Platform Makeover

I decided to use **Material UI**, set up a proper theme, and built all the new pages with its help. I setup data fetching/filtering/queuing/loading architectures that modernized the app by skeleton UIs, proper loading states, sub-loading states for lazy loaded data, and **caching with React Query**. The redesign ended up boosting sales by **50%** due to improved UI and consistent UX. I focused on making the platform mobile-first and optimizing product pages for better conversion rates.

### Ticketing Service Integration

I introduced a ticketing service and integrated it to all contact forms, contact form submissions would go straight to **Intercom**, a ticketing provider. For this I had to publish a **standalone NPM package** with Archer-oriented SDKs of Intercom since the same exact component was to be reused between the marketing website and the dashboard. This allowed the admins to review tickets from an admin panel and respond efficiently. The system automated ticket creation and provided real-time updates to both customers and support staff.

### Chrome Extension

I also then built a [chrome extension](https://chromewebstore.google.com/detail/archer-affiliates/oiimdgknebeljpehkmkjalllljkmeddb) for Archer, which used the same shared MUI-based design system from the NPM package and the Intercom package. This extension maintained design consistency across all Archer products and integrated seamlessly with their existing workflow. The extension provided users with quick access to key platform features directly from their browser. I ensured it followed the same Material UI theme and component patterns established in the main application.

### Content Management System

I also added **Sanity CMS** to the marketing website for blogs and partner programs. This implementation allowed the marketing team to manage content independently without requiring developer intervention for every update. I configured custom schemas for blog posts and partner program pages, making content creation streamlined and consistent. The CMS integration included real-time preview functionality and automated content publishing workflows.

## Technical Implementation

Built with **Next.js**, **React**, **Material UI**, and **TypeScript**. React Query for data fetching and caching, Intercom integration through custom SDKs, and Stripe for payment processing. I established a component-based architecture that enabled rapid development and maintained consistency across all features. The codebase included comprehensive TypeScript typing and reusable design system components. I implemented proper error handling, loading states, and performance optimizations throughout the application stack.

## Career Progression

I became a **key figure in the business** within a year and then was asked to lead the product as the **product manager**, but I left due to workload considerations as I had found a job in a multinational startup named [Monieworld](/experiences/monieworld). During my time at Archer, I transitioned from frontend engineer to frontend lead, then to a prominent voice in company decisions. My role expanded beyond technical implementation to include team building, architectural planning, and strategic product decisions. The experience demonstrated my ability to scale both technical systems and engineering teams effectively.
