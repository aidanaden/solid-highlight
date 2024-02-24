import { Highlight, Language } from "solid-highlight";
import { For, createSignal, type Component } from "solid-js";

import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

import "prismjs/components/prism-typescript";
import "prismjs/components/prism-zig";
import "prismjs/themes/prism-okaidia.min.css";

const ZIG_CODE = `const std = @import("std");

pub fn main() !void {
    var general_purpose_allocator = std.heap.GeneralPurposeAllocator(.{}){};
    defer std.debug.assert(general_purpose_allocator.deinit() == .ok);

    const gpa = general_purpose_allocator.allocator();

    const u32_ptr = try gpa.create(u32);
    _ = u32_ptr; // silences unused variable error

    // oops I forgot to free!
}`;

const TS_CODE = `type Props = {
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
}`;

const App: Component = () => {
  return (
    <div class="text-sm px-3">
      <For each={[TS_CODE, ZIG_CODE]}>
        {(code) => {
          const [language, setLanguage] = createSignal<Language>(
            Language.TYPESCRIPT
          );
          return (
            <div class="flex flex-col gap-3">
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
              <div class="flex items-center justify-between">
                <Highlight language={language()}>{code}</Highlight>
                <pre>
                  <code>{code}</code>
                </pre>
              </div>
            </div>
          );
        }}
      </For>
    </div>
  );
};

export default App;
