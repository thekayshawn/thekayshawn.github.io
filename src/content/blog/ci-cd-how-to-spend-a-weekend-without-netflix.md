---
draft: false
title: "CI/CD - How to spend a weekend without Netflix"
snippet: "If there's one thing you can enjoy even more than Netflix on a good saturday, it's CI/CD, lemme show you how."
image: {
    src: "./images/ci-cd-saturday.jpg",
    alt: "A crane hook next to a pulley",
}
publishDate: "2023-12-17 00:00"
category: "Technology"
author: "Kashan Ahmad"
tags: [CI/CD, DevOps, Netflix, Saturday, Weekend]
---

Perhaps the most interesting aspect of the Backend aspect of things is DevOps and, perhaps, the most interesting aspect of DevOps is CI/CD. Now, if you know me, you know that I live in the frontend cave and hardly ever come out. But, I do work with Backend, DevOps, and CI/CD on a daily basis, just not on my job. So, lemme tell you how you can cancel your Netflix subscription if you fall in love with CI/CD the right way and have a few bucks in your pocket (cuz it isn't really cheap).

## Kashan, you wasted a whole saturday on this?

Yep, but I won't call it a waste, matter of fact, I'd call it my most productive weekend in a long time. Never have I ever forget to eat and drink anything except for a morning tea and realized it at 6 PM. I was so into it that I didn't even realize that I was hungry or thirsty. So, what exactly did I do? Well, I did a lot of things, but I'll tell you the most important ones.

- I learned how to use Docker and make some jokes about it.
  - I kind of already knew but that was 3 years ago, so I had to learn it again and then also deploy a few containers using kubernetes.
  - Why did the container go to the therapist? Cuz it had a few issues with its image.
- I also learned how to use Docker Compose to deploy multiple containers at once.

But hey, Docker's not the spotlight, it's just something that I had to learn to impress my dad (cuz he works with containerized Laravel). The real spotlight is CI/CD, so let's talk about that.

## What is CI/CD?

You can ask ChatGPT and it'll give you a better answer. Instead, I'll tell you something better. CI/CD is like an observer like the observers from RxJs or like the dependency array in React or like that one aunty in the neighborhood. It's always watching you and it's always ready to do something when you do something. For example, if you push some code to your repository, it'll build your code and deploy it to your server. Maybe you don't want to deploy it to your server, maybe you want to deploy it to a staging server, or maybe you want to deploy it to a staging server and then to your production server. CI/CD can do all of that for you.

## But Kashan, still, a whole saturday?

Yep, I'll tell you how. I was making this sweet little JS Library boilerplate called [Crust](https://github.com/sassywares/crust) and I was using Github Actions to build it and publish it to NPM. Just as things were about to get done, I realized that my CI/CD pipeline, or my GitHub Actions Workflow (more specifically), wasn't triggering. Maybe cuz I had generated it from ChatGPT, it had 2 jobs to do.

1. Create a release on Github
2. Test, Build, and Publish to NPM

It was failing to do any, until I realized I wasn't pushing what the observer was observing. It's like the aunty sat there all evening but nobody passed by her house but she was the one getting the blame for being a bad observer. Then, I realized I wasn't generating the release tags, so I added that and it worked. But, then I realized the tags weren't named conventionally, so I fixed that too. Then, I realized that I my workflow/pipeline/observer was not even a thing in GitHub's eyes, cuz I had misplaced it entirely.

Yeah, as tiresome as that sounds, I was really enjoying it, you don't get to do that everyday. I feel like the need to install a package for everything and then just putting a few blocks together to get things done really takes the problem solving aspect away of web dev. The current state of web dev is like, "Oh, I need to do this, let me install this package and then just put a few blocks together and it'll be done." But, that's not how it should be, it should be like, "Oh, I need to do this, let me think about how I can do this and then do it." That's how it was when I started web dev, and that's how it should be.

Whenever I find a change to get my hands dirty into some really nasty problem, I run towards it like a kid runs towards a candy store. I don't know why, but I just love it. I love the feeling of solving a problem, I love the feeling of getting my hands dirty, I love the feeling of being a problem solver. It's what made me fall in love with programming and web dev in the first place. The pain you feel as you don't know how you'll get past this and the joy you feel when you do, and then the joy you feel when you look back at it and realize how easy it was. That's what I love about web dev, and that's what I love about CI/CD.

To me, the dopamine surge from a solved problem is worth a lot more than a good night party with a few drinks on a good saturday. To me, the act of solving a problem and then writing about how you solved it and then remembering that no matter what you faced, you paced through it, you kept moving forward, you kept solving problems, and you kept getting better, is worth a lot.

## So, what did you learn?

If you truly love something or someone, you'll find a way to spend time with them, and you'll not know how time passed.

## Footer

Until next time, keep solving problems, keep getting better, and keep moving forward.

- [Crust](https://github.com/sassywares/crust)
- [Sassywares](https://sassywares.com/)
- [Yours Truly](https://kashanahmad.me/)
