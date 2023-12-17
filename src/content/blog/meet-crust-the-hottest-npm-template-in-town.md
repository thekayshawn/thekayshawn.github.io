---
draft: false
title: "Meet Crust 🍞 - The hottest NPM package template in town"
snippet: "A simple boilerplate for creating NPM packages. Includes a basic config for TypeScript, ESLint, Prettier, Vitest, and Changesets."
image: {
    src: "./images/crust-cover.png",
    alt: "The hottest NPM package template in town - Crust"
}
publishDate: "2023-12-06 21:30"
category: "Sassywares"
author: "Kashan Ahmad"
tags: ["TypeScript", "Vitest", "Changesets", "CI/CD", "NPM", "GitHub Actions"]
---

Introducing Crust: 🍞 A simple boilerplate for creating and publishing packages to NPM. It includes a basic configuration for TypeScript, ESLint, Prettier, Vitest, and Changesets as well as a simple list of scripts for building, linting, testing and publishing your package. Crust is the dough, you can add whatever toppings you want. 🍕

If you know me, you know how much I love messing around with new packages and libraries. I've been doing this for a while now and I've noticed that I tend to use the same set of tools and configurations for all my projects. So, I decided to create a template that I can use to quickly bootstrap my projects and why just my projects? Why not yours too? So, I decided to make it public and share it with the world, and also add a few polished touches to it so the world doesn't see the real mess inside (just kidding, it's not that bad).

## What's included?

Well, I usually install the same few deps in all my projects and then create the same few cool NPM scripts to build, lint, test, and publish my packages. So, I decided to include them in the template so you don't have to do it yourself. Here's a list of all the things included in Crust:

You have built-in support for:

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Changesets](https://github.com/changesets/changesets)
- [Vitest](https://vitest.dev/)

> 📘 Note
> 
> The deps will keep getting outdated and our job is to keep them up to date. So, make sure you keep updating them regularly.
> Just a good ol' `npm update` should do the trick (most of the time).

### 🔥 Hot NPM scripts

Lemme tell you something exciting, Crust comes jam-packed with cool scripts that literally version, build, lint, test, and publish your package with a single command. Here's a list of all the scripts included in Crust:

- `lint` - Runs ESLint to lint the code.
- `lint:fix`: Runs ESLint with the `--fix` flag to automatically fix any linting errors.
- `test` - Runs Vitest to run the tests once.
- `test:watch` - Runs Vitest in watch mode.
- `format` - Runs `lint:fix` and Prettier to format the code.
- `dev` - Runs TypeScript in watch mode to build the code.
- `build` - Runs TypeScript to build the code, the output is placed in the `dist` directory. You can change the output directory by modifying the `outDir` property in the `tsconfig.json` file.
- `commit` - Adds all files to staging and commits them with a message, see .scripts/commit.sh for more information and to modify the commit message. This is intended to be used with the CI workflow, for normal commits use `git commit` normally.
- `push` - Pushes the current branch as well as the tags to the remote repository.
- `release.prepare` - Tests and builds the code for release.
- `release.publish` - Publishes the package to NPM.
- `release.version` - Creates a changelog using changeset, bumps the version, creates a git tag, commits the changelog, version, and tag as well as pushes them to remote.
- `release` - Runs `release.prepare`, `release.version`, and `release.publish` in sequence. Use this script to publish a new version of the package to NPM locally.
- `release.dry` - Runs `release` in dry mode, this will not publish the package to NPM.
- `clean` - Removes all generated files and directories as well as clears the NPM cache.

### 📦 Pre-configured CI workflow

![Builds](https://github.com/sassywares/crust/actions/workflows/release.yml/badge.svg)

But, that's not all. Crust also comes with a pre-configured CI workflow (using GitHub Actions) that publishes a new version of the package to NPM every time you push a new tag to the remote repository. There's a [release.yml](https://github.com/sassywares/crust/tree/main/.github/workflows/release.yml) file in the `.github/workflows` directory that contains the workflow. You can modify it to suit your needs, I've added some noteworthy instructions in the [readme](https://github.com/sassywares/crust#readme) file, make sure you add that to your netflix playlist as well.

## How to use Crust?

Using Crust is as easy as making a sandwich. All you have to do is click the green "Use this template" button on the [repo page](https://github.com/sassywares/crust) and follow the instructions. Once you've created the repo, clone it to your local machine and run `npm install` to install all the dependencies. You can then start writing your code in the `src` directory and run `npm run dev` to build it. You can also run `npm run test.watch` to run the tests in watch mode.

Once you're done, you can run `npm run release` to publish a new version of the package to NPM. That's it, you're done. 🎉 Alternatively, you can just run the `npm run release.version` command and let the CI workflow do the rest, upto you. What happens underneath is that the `release.version` script bumps the package version and adds a git tag which is what triggers the CI workflow. The workflow then runs the `release.prepare` script to build and test the code and then runs the `release.publish` script to publish the package to NPM.

## So, what's the catch?

There's no catch, I promise. Crust is completely free and open-source. You can use it for your personal and commercial projects without any restrictions. You can also modify it to suit your needs and even contribute to it if you want to. The only reason why Crust exists in the first place is because the web dev world is a mess and it's not easy to integrate a bunch of tools together. You can build whatever flavor of pizza you want, crust is just a dough. 🍕

## What's next?

I'm glad you asked. I'm planning to make a react- version of Crust as well as a few other flavors. The thing about Crust is that we can all contribute to it and make it better. So, if you have any ideas or suggestions, feel free to open an issue or a pull request. I'll be more than happy to review it and merge it if it's good. I'm also planning to add a few more scripts to Crust to make it even more awesome. So, stay tuned for that.

## How can I help?

Glad you asked. Here's a list of things you can do to help:

- [ ] Star the repo to show your support.
- [ ] Contribute to Crust and make it better.
- [ ] Share Crust with your friends and colleagues.

## Footer

That's it. I hope you like Crust. If you do, please spread the word. If you don't, please let me know why. Cheers! 🍻

- [Crust](https://github.com/sassywares/crust)
- [GitHub](https://github.com/sassywares/crust)
- [Sassywares](https://sassywares.com/)
- [Yours Truly](https://kashanahmad.me/)
