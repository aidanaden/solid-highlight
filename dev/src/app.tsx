import type { Component } from "solid-js";
import { Highlight } from "../../src";

const App: Component = () => {
  return (
    <div>
      <Highlight autoDetect={true}>
        {`type Props = {
  class?: string;
  language?: string;
  autoDetect?: boolean;
  ignoreIllegals?: boolean;
  children: any;
};

import { Prettify } from "./Prettify";

/**
 * Like \`Readonly\`, but also makes all nested properties readonly.
 */
export type DeepReadonly<T> = Prettify<_DeepReadonly<T>>;

type _DeepReadonly<T> = T extends Record<string | number | symbol, unknown>
  ? Readonly<{
      [P in keyof T]: _DeepReadonly<T[P]>;
    }>
  : T;


export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}
`}
      </Highlight>
      <br />
      <pre>
        <code>{`type Props = {
  class?: string;
  language?: string;
  autoDetect?: boolean;
  ignoreIllegals?: boolean;
  children: any;
};

import { Prettify } from "./Prettify";

/**
 * Like \`Readonly\`, but also makes all nested properties readonly.
 */
export type DeepReadonly<T> = Prettify<_DeepReadonly<T>>;

type _DeepReadonly<T> = T extends Record<string | number | symbol, unknown>
  ? Readonly<{
      [P in keyof T]: _DeepReadonly<T[P]>;
    }>
  : T;

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}
`}</code>
      </pre>
    </div>
  );
};

export default App;
