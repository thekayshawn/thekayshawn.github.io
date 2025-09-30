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

You can find the original list Claude generated (without answers) [here](https://claude.ai/public/artifacts/eb7085eb-c806-42ab-8be3-a25ca2c68e97). Referencing it here since I won't be answering every single thing down in this post, especially the things I find super basic or commonly known.

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

## 5. Build a function that mimics `Promise.all` without using `Promise.all`.

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
      Promise.resolve(promise) // Handle non-promises
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

## 6. Build a function that mimics `Promise.allSettled` without using `Promise.allSettled`.

Okay, from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled), `Promise.allSettled` does the following:

1. Takes an array of promises.
2. Runs promises in parallel, not in sequence.
3. Returns an array with an object for each promise in order, each object having 3 values:
   1. `status`: A string, either _"fulfilled"_ or _"rejected"_, indicating the state of the promise.
   2. `value`: Only present if status is _"fulfilled"_. The result of the promise.
   3. `reason`: Only present if status is _"rejected"_. The reason why the promise was rejected.
4. DOES NOT throw if any or even all the promises fail.

This means we can modify the code we have above a tiny bit and we'll have a working `allSettled` example at our hands, let's do it:

```js
const getUser = new Promise((resolve) => setTimeout(() => resolve({}), 1000));
const getProduct = new Promise((_, reject) =>
  setTimeout(() => reject({}), 100)
);

const [userResult, productResult] = await executePromises([
  getUser,
  getProduct,
]);

const user = userResult.status === "fulfilled" ? userResult.value : null;
const product =
  productResult.status === "fulfilled" ? productResult.value : null;

function executePromises(promises) {
  if (!promises || promises.length === 0) {
    return Promise.resolve([]);
  }

  return new Promise((resolve) => {
    let resultsCount = 0;
    const results = new Array(promises.length);

    promises.forEach((promise, index) => {
      Promise.resolve(promise) // Handle non-promises
        .then((result) => {
          results[index] = { status: "fulfilled", value: result };
          resultsCount++;
          if (resultsCount === promises.length) resolve(results);
        })
        .catch((reason) => {
          results[index] = { status: "rejected", reason };
          resultsCount++;
          if (resultsCount === promises.length) resolve(results);
        });
    });
  });
}
```

That, is well done. Notice that the only prominent differences are 2:

1. We don't reject the wrapper promise if any promise in the array fails, instead we add it to the list as rejected.
2. We have to check if the promise is fulfilled before accessing its value.

Essentially, `Promise.allSettled` is for when you want to execute multiple promises but your components don't depend on all of them, meaning partial success. Consider this React server component as an example:

```jsx
function App() {
  const [userResult, productResult] = await executePromises([
    getUser,
    getProduct,
  ]);

  const user = userResult.status === "fulfilled" ? userResult.value : null;
  const product = productResult.status === "fulfilled" ? productResult.value : null;

  return (
    <>
      {user && <User user={user} />}
      {product && <Product product={product} />}
    </>
  )
}
```

Based on these, try to recreate [Promise.any](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any) and [Promise.race](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race) by yourself, will be fun.

## 7. What is the event loop, and what are microtasks?

Did a little piece on the event loop [here](./javascript-event-loop-for-dummies), you can check it out.

## 8. Create a function that finds the maximum product of 3 numbers from a given array.

Given that:

```js
const testCases = [
  { input: [1, 5, 8, 11, 9], expected: 792 },
  { input: [-10, -11, -1, 0, 5], expected: 550 },
  { input: [-8, 0, 9, 10, 11], expected: 990 },
  { input: [-5, -4, -3, -2, -1], expected: -6 },
];
```

We need to create a function that takes an input and finds out what the maximum product can be from any 3 numbers in the array. If you look at the first array, `8 * 11 * 9 = 792`, so the expected answer is 792. Look at the second array, `-10 * -11 * 5 - 550`, but notice that the largest numbers in the array were `1, 0 and, 5`, not `-10, -11, and 5`.

What that results in is an expectation that the largest number in such an array can either be:

1. The product of the largest positive numbers
2. The product of the largest negative numbers with the largest positive number (-10 \* -11 cancels out the negative)

Keeping that in mind, this is what we can do:

```js
function findMaxProduct(array) {
  if (array.length < 3) return null; // Since we know that we need minimum 3 from the question statement.

  const sorted = array.toSorted((a, b) => a - b);
  // Would result in [-11, -10, -1, 0, 5] for the second input

  const n = sorted.length;

  // Based on the criteria above, there can be 2 largest numbers in the array:
  const option1 = sorted[n - 1] * sorted[n - 2] * sorted[n - 3]; // The largest positive numbers at the end of the array
  const option2 = sorted[0] * sorted[1] * sorted[n - 1]; // The largest 2 negative numbers * the largest positive number

  // JavaScript is convenient
  return Math.max(option1, option2);
}
```

## 9. What is the difference between event delegation, bubbling, and capturing?

Pretty simple, actually.

- **Event delegation** is a practice that is used to handle events on child elements through listeners on parents.

  ```js
  // Instead of this (inefficient):
  document.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", handleClick);
  });

  // Do this (delegation):
  document.querySelector("ul").addEventListener("click", (event) => {
    if (event.target.matches("li")) handleClick(event);
  });
  ```

- **Event bubbling** is the default behavior of events. Events bubble up/propagate to the root element from the target element.

  When you click a button, the event starts from the button all the way to the root, triggering all click event handlers on the way.

  Something like `<button> → <body> → <html> → Document → Window`

  You might have encountered a scenario where a parent clickable element has a clickable child but when you click the child, the parent's click handler also triggers. To prevent this, you can call the `stopPropagation` helper on the event and that will cancel the bubbling effect.

  ```jsx
  function handleDelete(event) {
    event.stopPropagation(); // Stop the propagation of this event, preventing the button's click event from being fired
    deleteSomething();
  }

  return (
    <button onClick={handleClick}>
      <SomeComponent />
      <span onClick={handleDelete}>Delete</span>
    </button>
  );
  ```

- **Event capturing** is the opposite of bubbling. Events can be configured to flow downwards, such as `Window → Document → <html> → <body> → <button>`

  Capturing is particularly useful when you want to run something before the target element's event gets fired.

  ```js
  // Stop all clicks on disabled elements before they reach any handlers
  document.addEventListener(
    "click",
    (event) => {
      if (event.target.closest("[disabled]")) {
        event.stopPropagation();
        event.preventDefault();
      }
    },
    true // capturing phase
  );
  ```

And there you have it, tbf I keep forgetting what delegation is and I have to constantly remind myself before interviews. Hopefully, this will help me out as well.

---

## Conclusion

I'll probably keep adding more and more questions here as I encounter them or just want to. **Until then, Arrivederci baby** (I think it means goodbye).
