# Zolplay Core

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/zolplay-cn/core/Release?label=release)

![npm](https://img.shields.io/npm/v/@zolplay/config?color=%23EEE&label=config)
![npm](https://img.shields.io/npm/v/@zolplay/cva?color=%23EEE&label=cva)
![npm](https://img.shields.io/npm/v/@zolplay/tsconfig?color=%23EEE&label=tsconfig)
![npm](https://img.shields.io/npm/v/@zolplay/utils?color=%23EEE&label=utils)

This is an official core repo for Zolplay containing all the packages we use on a daily basis.

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages:

### Apps and Packages

- [`config`](packages/config/README.md): boilerplate configs for frontend projects
- [`cva`](packages/cva/README.md): An adapter for the awesome original package `class-variance-authority`
- [`tsconfig`](packages/tsconfig/README.md): `tsconfig.json`s for TypeScript projects
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
