import type { Component } from "solid-js";
import Highlight from "solid-highlight";

import "highlight.js/styles/stackoverflow-light.css";

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
