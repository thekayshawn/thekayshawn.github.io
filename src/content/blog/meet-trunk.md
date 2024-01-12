---
draft: false
title: "Meet Trunk - The sassiest JavaScript utilities in town + Add your own!"
snippet: "Trunk is a suite of tested functions I use regularly in my JavaScript applications. Stuff along the likes of “Detect a browser” and “Is this a valid object”, are little things that do not come with any other library but we have to use them in about every application."
image: {
    src: "./images/meet-trunk.jpg",
    alt: "Meet Trunk - The sassiest JavaScript utilities in town + Add your own!",
}
publishDate: "2024-01-12 00:00"
category: "Technology"
author: "Kashan Ahmad"
tags: ["JavaScript", "Open Source", "NPM", "CI/CD", "Unit Testing"]
---

A few days ago, I launched Trunk, a suite of functions I use regularly in my JavaScript applications. Stuff like “Detect a browser” and “Is this a valid object”, are little things that do not come with any other library but we have to use them in about every application.

Now, Trunk, as of today, solves my problems and contains the functions, as well as their unit tests, that I re-use all the time, but that’s not the purpose of it. Trunk was made with a singular goal in mind and that was to have everyone collaborate in making it the go-to JavaScript utility library, a suite where you can find every little pesky function you might ever need in your applications.

As we speak, Trunk comes with 10 functions that I found myself duplicating and re-using all the time. You can make that number a lot more interesting with your Issues and PRs. I call all JavaScript Developers to collaborate and make this the last utility library we’ll ever need.

Speaking of collaboration, Trunk is based on Crust, the JavaScript Package Boilerplate I made for blazing-fast libraries. CI is in place and waiting for you to make a PR. You can install Trunk as an NPM Package using `npm i @sassywares/trunk` and then import any of the functions from within.

## What's included?

Trunk comes with the following functions:

- [log](#log)
- [scrollIntoViewById](#scrollintoviewbyid)
- [detectBrowser](#detectbrowser)
- [detectOs](#detectos)
- [isArray](#isarray)
- [isObject](#isobject)
- [switchTheme](#switchtheme)
- [getTheme](#gettheme)
- [debounce](#debounce)
- [msToSeconds](#mstoseconds)

### log

```js
import { log } from '@sassywares/trunk';

// Only logs when NODE_ENV is set to development
log('Hello World');
```

### scrollIntoViewById

```js
import { scrollIntoViewById } from '@sassywares/trunk';

// Scrolls to the element with the id of 'my-id'
scrollIntoViewById('my-id');

// Can pass behavior as the second argument
scrollIntoViewById('my-id', 'smooth');
```

### detectBrowser

```js
import { detectBrowser } from '@sassywares/trunk';

// Returns the detected browser as well as sets it as a class on the html element
detectBrowser();
```

### detectOs

```js
import { detectOs } from '@sassywares/trunk';

// Returns the detected OS as well as sets it as a class on the html element
detectOs();
```

### isArray

```js
import { isArray } from '@sassywares/trunk';

// Returns true
isArray([]);

// Returns false
isArray({});
```

### isObject

```js
import { isObject } from '@sassywares/trunk';

// Returns true
isObject({});

// Returns false
isObject([]);
```

### switchTheme

```js
import { switchTheme } from '@sassywares/trunk';

// Switches the theme to dark
switchTheme('dark');

// Switches the theme to light
switchTheme('light');

// Switches the theme to user's preferred theme and observes for changes
switchTheme('system');
```

### getTheme

```js
import { getTheme } from '@sassywares/trunk';

// Returns the current theme or null if no theme is set
getTheme();
```

### debounce

```js
import { debounce } from '@sassywares/trunk';

// Debounces the function by 500ms
const debouncedLog = debounce((obj) => console.log(obj), 500);
```

### msToSeconds

```js
import { msToSeconds } from '@sassywares/trunk';

// Returns 1
msToSeconds(1000);

// Returns 2
msToSeconds(2000);
```

Know that these were the ones I was using across multiple projects, we can all benefit if you add the ones you use as well. If you open a PR, please don’t forget to write unit tests for your functions as well as update the README.

Here goes a pack of Apple Juice 🧃 to JavaScript.

Find Trunk on [GitHub](https://github.com/sassywares/trunk).
Find Trunk on [NPM](https://www.npmjs.com/package/@sassywares/trunk).

If you have any questions, just wanna say hi, or want to collaborate on something, feel free to reach out to me on [Twitter](https://twitter.com/thekayshawn).
