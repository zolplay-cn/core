# Zolplay Core

![utils](https://img.shields.io/npm/v/@zolplay/utils?label=utils)

This is an official core repo for Zolplay containing all the packages we use on a daily basis.

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages:

### Apps and Packages

- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- [`utils`](packages/utils/README.md): A collection of utility functions

### Build

To build all packages, run the following command:

```
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm dev
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
