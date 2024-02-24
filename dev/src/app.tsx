import { Highlight, Language } from "solid-highlight";
import { For, createSignal, type Component } from "solid-js";

import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

// import "prismjs/components/prism-typescript";
import "prismjs/themes/prism-okaidia.min.css";

const App: Component = () => {
  const [language, setLanguage] = createSignal<Language>(Language.TYPESCRIPT);
  return (
    <div class="text-sm px-3">
      <label class="flex flex-col gap-1.5 w-fit items-start">
        Language:
        <br />
        <select
          onChange={(e) => setLanguage(e.target.value as Language)}
          value={language()}
        >
          <For each={Object.values(Language)}>
            {(v) => <option value={v}>{v}</option>}
          </For>
        </select>
      </label>
      <Highlight language={language()}>
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
