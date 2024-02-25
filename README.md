<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=solid-highlight&background=tiles&project=%20" alt="solid-highlight">
</p>

# solid-highlight

>

[![size](https://img.shields.io/bundlephobia/minzip/solid-highlight?style=for-the-badge)](https://bundlephobia.com/package/solid-highlight)
[![size](https://img.shields.io/npm/v/solid-highlight?style=for-the-badge)](https://www.npmjs.com/package/solid-highlight)
![npm](https://img.shields.io/npm/dw/solid-highlight?style=for-the-badge)
[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg?style=for-the-badge&logo=pnpm)](https://pnpm.io/)

[download-image]: https://img.shields.io/npm/dm/solid-highlight.svg
[download-url]: https://npmjs.org/package/solid-highlight

[![solid-highlight](https://nodei.co/npm/solid-highlight.png)](https://npmjs.org/package/solid-highlight)

## Documentation

### Installation

```bash
npm i solid-highlight
# or
yarn add solid-highlight
# or
pnpm add solid-highlight
```

### Usage

#### Importing component

```js
import { Highlight } from "solid-highlight";
```

#### Adding styles

Choose the [theme](https://highlightjs.org/static/demo/) for syntax highlighting and add corresponding styles of prism.js by importing in your `index.tsx` file

```js
import "prismjs/themes/prism-okaidia.min.css";
```

The styles will most likely be in `node_modules/prismjs/themes` folder.

#### Adding languages

Choose the [languages](https://highlightjs.org/static/demo/) available for syntax highlighting by importing in your `index.tsx` file

```js
import "prismjs/components/prism-typescript";
```

The languages will most likely be in `node_modules/prismjs/components` folder.

#### Properties

| Property | Type   | Default      | Description                        |
| :------- | :----- | :----------- | :--------------------------------- |
| class    | string |              | Custom css classes to be included  |
| language | string | `javascript` | Language of code to be highlighted |

#### Syntax highlighting of code snippet

Code snippet that requires syntax highlighting should be passed as children to Highlight component in string format.

```ts
import { Highlight, Language } from "solid-highlight";

const [language, setLanguage] = createSignal<Language>(Language.JAVASCRIPT);
<Highlight language={language()}>
  {" "}
  {"function foo() { return 'bar' }"}{" "}
</Highlight>;
```
