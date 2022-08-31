# [martinbeaumont.dev](https://www.martinbeaumont.dev)

👋 Hello, I'm Martin, and this is my personal Web developer portfolio.

## Technologies

I'm building this website using [Astro](https://astro.build), Scss and TypeScript, based on my [astro-starter](https://github.com/martinbmnt/astro-starter).

## Features

### Continuous Integration

[![CI](https://github.com/martinbmnt/martinbeaumont.dev/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/martinbmnt/martinbeaumont.dev/actions/workflows/ci.yml)

This repo use GitHub Actions as a CI tool, and run following checks :

* `astro check` : Runs diagnostics (such as type-checking within .astro files)
* `tsc --noEmit` : Build project to check compilation errors
* `lint:eslint` : Run ESLint's linter
* `lint:a11y` : Check accessibility of pages using Pa11y

Checks are run when committing to `main` branch, and when a pull request is created.

### Continuous Deployment

Where committing on `main` branch, two other GitHub Actions are triggered to build and deploy website to stagging and production servers.

The continuous deployment script can also be manually triggered on every branch.

## Contribute

You find a typo ? Or want to share an improvement ? Feel free to create an issue or a pull request !
