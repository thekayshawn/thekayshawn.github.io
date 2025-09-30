---
draft: false
title: "JavaScript event loop for dummies"
snippet: "The event loop keeps coming back to haunt you after every 3 interviews, let's put an end to it."
image:
  {
    src: "./images/javascript-event-loop-for-dummies.jpg",
    alt: "The blackhole from Interstellar looking stellar 🔥",
  }
publishDate: "2025-09-30 00:00"
category: "Tutorials"
author: "Kashan Ahmad"
tags: [JavaScript, Cheatsheets, Event loop]
---

I'll keep it KISS (Keep It Simple, Stupid), cuz this is what I'm gonna go over before every interview so that I know all the shit about the event loop.

Okay, so JavaScript is single-threaded as we know it, meaning it can only run one piece of code at a time. Meaning asynchronous and long-running tasks don't really have a separate thread/place to run, which poses a problem.

To solve this problem, JavaScript has a loop, just a plain infinitely running loop that checks the **call stack** and the **task queue** on each run.

- **The call stack** is where the synchronous shit gets stacked and executed, be it some regular function call or a whole 100-line computation.
- **The task queue** is where the asynchronous shit gets queued, be it promises or timeouts or animation frames.

Now, the call stack is being executed at all times, functions get pushed and popped immediately, there is no "picking" going on here. The task queue is where the event loop does its part—when the call stack completely empties (all functions return), it grabs the next queued task and runs it.

Here's the thing though: async operations like `fetch()` or `setTimeout()` don't actually run in JavaScript. They're handed off to browser APIs that handle them outside the JavaScript thread. When they complete, their callbacks get queued as tasks. JavaScript only runs those callbacks when the event loop schedules them.

So, what are **micro** and **macrotasks** then? Turns out the task queue is a term used to refer to 2 queues, the microtask queue and the macrotask queue.

- **Microtasks** are priority tasks that get prioritized over the macrotasks. Common examples are promises.
- **Macrotasks** are the least priority tasks that run only once the microtask queue is empty. Common examples are `setTimeout` and `setInterval`.

What this means is that:

- After each macrotask completes (call stack empties), **ALL** microtasks run as a batch until the queue is completely drained, even new ones added during execution.
- Only then does the next macrotask run, and after it finishes, the microtask queue gets drained again.

This is why you can accidentally freeze your app if microtasks keep queuing more microtasks since in this case the macrotasks (including UI updates) never get a chance to run.

## Conclusion

The event loop is a piece of shit, but don't let it confuse you cuz I told you not to. Have a good day my muscle mommies 💪
