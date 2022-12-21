# Bryan Eaton Turborepo

This is a monorepo for all content on [www.bryaneaton.com](https://www.bryaneaton.com) and subdomains

## Tech

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `www`: A [Remix Run](https://remix.run/docs) app
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Build

To build all apps and packages, run the following command:

```
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm run dev
```
