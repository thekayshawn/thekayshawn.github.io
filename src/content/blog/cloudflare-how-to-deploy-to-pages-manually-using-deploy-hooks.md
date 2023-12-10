---
draft: false
title: "Cloudflare - How to deploy to Pages manually using deploy hooks"
snippet: "Cloudflare Pages is awesome. It's free, it's fast, and it's easy to use, but there's no way to manually trigger a deployment, or is there?"
image: {
    src: "./images/crane-hook.jpg",
    alt: "A crane hook next to a pulley",
}
publishDate: "2023-12-06 21:00"
category: "Tutorials"
author: "Kashan Ahmad"
tags: [cloudflare, CI/CD, static sites, web development, hosting, deployment]
---

I've been in love with Cloudflare Pages since it was announced. It's free, it's fast, and it's easy to use. But there's one thing that's missing: a way to manually trigger a deployment. Or is there? Let's find out. Tbh, this is more of a note to self, but I hope it helps you too.

So, you've got a static site, and you want to deploy it to Cloudflare Pages. You've got a GitHub repo, and you've set up a GitHub Action to deploy your site to Cloudflare Pages. But what if you want to deploy your site manually? Well, you can always push a commit to your repo, but that's not very convenient. What if you want to deploy your site without pushing a commit? That's where deploy hooks come in, or so I thought.

[Deploy Hooks](https://developers.cloudflare.com/pages/platform/deploy-hooks/) are like cloud functions or webhooks or background workers or whatever you want to call them. They're basically a way to run some code when something happens. Say you made a change to your CMS, wrote a blog in a simple markdown file, and your static site needs to be rebuilt. You can use a deploy hook to trigger a rebuild. All you gotta do is:

1. Create the hook. Workers & Pages > Click your site > Settings > Builds & Deployments > Scroll down to the very bottom.
2. Name the hook, better if you stay simple (I use `Manual Deployment Hook` cuz that's what it's for).
3. Submit the form, and you'll get a URL, copy it somewhere.
4. Send a POST request to the URL, you can use `curl` from your terminal, or you can use `Postman`, or you can use `Insomnia`, or just whatever works for you. I use `curl` cuz it's simple and it works.

```bash
curl -X POST "https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/{hook_id}"
```

## Footer

That's it. You can now deploy your site manually. I hope this helps someone out there. Cheers! 🍻

- [Cloudflare Pages](https://pages.cloudflare.com/)
- [Deploy Hooks](https://developers.cloudflare.com/pages/platform/deploy-hooks/)
- [Yours truly](https://kashanahmad.me/)
