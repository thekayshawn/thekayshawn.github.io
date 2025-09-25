---
draft: false
title: "A cheatsheet of JavaScript interview questions"
snippet: "I botched an interview real hard recently, but this cheatsheet can prevent you from facing the same consequences"
image:
  {
    src: "./images/javascript-interview-questions-cheatsheet.jpg",
    alt: "Matthew Mcconaughey smiling cuz he found da cheatsheet!",
  }
publishDate: "2025-09-25 13:00"
category: "Tutorials"
author: "Kashan Ahmad"
tags: [Job interviews, JavaScript, Cheatsheets]
---

I [absolutely botched an interview](./how-to-keep-going-after-a-botched-interview) by answering just 2 out of 10 questions correctly, and my comeback tactic was to ask Claude to find me about 30 more such questions so that I could answer all 40 as a way of both learning from my mistakes as well as hoping not to fail another interview due to lack of technical depth.

Without further ado (I hope that's the right word), fire away!

## 1. What does `bind` do?

`Function.prototype.bind()` is used to create a new function from an existing function that is bound to a specific context, this means that the `this` keyword inside the bound function is always tied to the context you provided.

```js
function fruit(price) {
  console.log(`${this.name} is priced at $${price}`);
}

const mango = { name: "Mango" };
const mangoFruit = fruit.bind(mango);

mangoFruit(5);
// Expected output: "Mango is priced at $5"
```

Notice how fruit is able to reference `this.name` even though this.name is not being set inside fruit. This is because fruit is tied to mango's context, which has a name property.

What's lovely about bind is that you can also predefine certain parameters, meaning your bound functions don't need to provide obvious parameters every single time.

```js
function add(a, b, c) {
  return a + b + c;
}

const addFiveAndTen = add.bind(null, 5, 10);
console.log(addFiveAndTen(3)); // 18 (5 + 10 + 3)
```

One famous usage of bind was in React's class components. Event handlers had to be bound to the component instances in order for them to access the state and other properties.

```js
class MyComponent extends React.Component {
  render() {
    // When React calls component.render(), `this` = component instance
    return <button onClick={this.handleClick.bind(this)}>Click Me</button>;
  }

  handleClick() {
    // When called as an event handler, `this` would be undefined/window
    // So, we bind handleClick to `this` and that gives it access to the this.setState and other class properties
    this.setState({
      /* ... */
    });
  }
}
```

## 2. What do `call` and `apply` do?

`Function.prototype.call()` is used to call a function with a certain context. Meaning that using call, you can define what context the `this` keyword refers to.

This means that you can call a function named fruit with the context of Mango and whatever changes fruit makes using the `this` keyword apply to the context of Mango, whose `this` you provided.

```js
function Fruit(name, price) {
  this.name = name;
  this.price = price;
}

function Mango(price) {
  Fruit.call(this, "mango", price);
  this.headline = "King of all fruits";
}

console.log(new Mango(5).name);
// Expected output: "mango"
// Mango has a name property even though name was set in Fruit
```

`Function.prototype.apply` does the exact same thing as call just with an array of parameters instead of individual parameters. Hence, in the example above, apply would make this slight difference:

```js
Fruit.apply(this, ["mango", price]);
```

## 3. What is the output of the following snippet?

```js
const user = {
  signIn: () => {
    console.log(this);
  },
  signOut: function () {
    console.log(this);
  },
};

user.signIn(); // What gets logged?
user.signOut(); // What gets logged?
```

- `signIn` is an arrow function, arrow functions inherit the `this` value from their lexical scope, which means it'll either log `Window` or `global` depending on whether the runtime is browser or Node. Now, if user is defined inside a nested lexical scope, such as inside a class, then the `this` keyword would refer to that class' instance.

```js
// At global level:
const user = {
  signIn: () => {
    console.log(this); // `this` inherited from global scope = global/Window object
  },
};

// Inside a class:
class MyClass {
  createUser() {
    const user = {
      signIn: () => {
        console.log(this); // `this` inherited from createUser method = MyClass instance
      },
    };
    return user;
  }
}
```

- `signOut` will log the user object cuz its a function that gets called as a method of the user object, which binds the function to the user's context.

```js
// At global level:
const user = {
  signOut: function () {
    console.log(this); // `this` bound to the object that calls signOut = user
  },
};

// Inside a class:
class MyClass {
  createUser() {
    const user = {
      signOut: function () {
        console.log(this); // `this` bound to the object that calls signOut = user
      },
    };
    return user;
  }
}
```

## 4. What does `Promise.all` do?

`Promise.all` can be used to execute multiple promises in parallel and get their results in the same order. Here's an example:

```js
const getUser = new Promise((resolve) => setTimeout(() => resolve({})), 1000);
const getProduct = new Promise((resolve) => setTimeout(() => resolve({})), 100);

const [user, product] = await Promise.all([getUser, getProduct]);
```

Even though `getUser` has a timeout that waits for a whole second as opposed to the 100ms timeout of `getProduct`, `Promise.all` returns you the results in order.

One catch about `Promise.all` is that you don't get any results at all if even one of the promises fail. Which is why it's encouraged to use `Promise.all` when you need all promises to succeed. Like if you have a component that uses both the user and the product, you can ensure that both are available using `Promise.all` before handing them over.

## 5. Build a function that mimics `Promise.all` without using `Promise.all`

Okay, let's first identify what `Promise.all` does:

1. Takes an array of promises.
2. Runs promises in parallel, not in sequence.
3. Returns an array with the result of each promise in the same order as received.
4. Throws if even one of the promise fails.

```js
const getUser = new Promise((resolve) => setTimeout(() => resolve({})), 1000);
const getProduct = new Promise((resolve) => setTimeout(() => resolve({})), 100);

const [user, product] = await executePromises([getUser, getProduct]);

function executePromises(promises) {
  if (!promises || promises.length === 0) {
    return Promise.resolve([]); // Guard against faulty promises
  }

  return new Promise((resolve, reject) => {
    let resultsCount = 0; // Counting manually since results are always equal to promises in length
    const results = new Array(promises.length); // Create an array equally sized as the promises

    promises.forEach((promise, index) => {
      promise
        .then((result) => {
          results[index] = result;
          resultsCount++;

          if (resultsCount === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}
```

That works (I wish I'd written it this nicely in [that interview I botched](./how-to-keep-going-after-a-botched-interview)), checks all the boxes and looks clean.

## Conclusion

I'll keep adding more and more problems here as I see them fit.

Until then, Arrivederci baby (I think it means goodbye).
