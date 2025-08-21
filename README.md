<p align="center">
  <a href="https://github.com/qwikDev/qwik">
    <img alt="Qwik Logo" width="240" src="https://raw.githubusercontent.com/QwikDev/qwik/main/packages/docs/public/logos/qwik.svg" />
  </a>
</p>

<p align="center">
  Unofficial Simple icon library for Qwik applications.
</p>

<div align="center">

  [![npm](https://img.shields.io/npm/v/simple-icons-qwik?color=blue)](https://www.npmjs.com/package/simple-icons-qwik)
  ![NPM Downloads](https://img.shields.io/npm/dw/simple-icons-qwik)
</div>

# Simple Icons Qwik

An unofficial implementation of the simple icon library for Qwik applications,

## Installation

```sh
pnpm add simple-icons-qwik
```

```sh
npm install simple-icons-qwik
```

```sh
yarn add simple-icons-qwik
```

```sh
bun add simple-icons-qwik
```

## Documentation

#### Include

You can import the icon(s) you need as usual:

```ts
import { SiGoogle } from "simple-icons-qwik";
```

or import them all at once:

```ts
import * as Icons from "simple-icons-qwik";

export const App = component$(() => {
  return <div>
    <Icons.SiGoogle />
    <Icons.SiDiscord />
  </div>;
});
```

#### Props

Simple Icon `Icon` component have these optional `props`:

```ts
export interface IconProps extends QwikDOMAttributes {
  size?: number,            // default: 24
  color?: string,           // default: "currentColor"
  strokeWidth?: number,     // default: 2
  strokeLinecap?: "round" | "butt" | "square" | "inherit" | undefined,   // default: "round"
  strokeLinejoin?: "round" | "inherit" | "miter" | "bevel" | undefined   // default: "round"
}
```

Notice that `IconProps` extends `QwikDOMAttributes` so `Icon` component also have attributes like `class`, `onClick$`, `key`, etc.

## Community

Join the [Luminescent Discord server](https://discord.gg/sf5Hty88TR) for support for this unofficial package

## License

Simple Icons is licensed under the CC0 License
This library is licensed under [MIT License](https://github.com/LuminescentDev/simple-icons-qwik/blob/main/LICENSE "https://github.com/LuminescentDev/simple-icons-qwik/blob/main/LICENSE").
