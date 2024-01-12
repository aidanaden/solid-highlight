import HighlightJS from "highlight.js";
import {
  type ComponentProps,
  type ParentComponent,
  createMemo,
  mergeProps,
  splitProps,
} from "solid-js";

import { escapeHtml } from "./utils";

type Props = {
  language?: string;
  autoDetect?: boolean;
  ignoreIllegals?: boolean;
} & ComponentProps<"code">;

export const Highlight: ParentComponent<Props> = (_props) => {
  const props = mergeProps(
    { autoDetect: true, ignoreIllegals: true, language: "" },
    _props,
  );
  const [, rest] = splitProps(props, [
    "language",
    "autoDetect",
    "ignoreIllegals",
    "children",
    "class",
    "innerHTML",
  ]);

  const cannotDetectLanguage =
    !props.autoDetect &&
    !props.language &&
    props.children &&
    !HighlightJS.getLanguage(props.children.toString());
  const className = cannotDetectLanguage ? "" : `hljs ${props.language}`;

  const getHighlightedCode = createMemo(() => {
    const childrenString = props.children?.toString();
    if (!childrenString) {
      return "";
    }

    if (cannotDetectLanguage) {
      // eslint-disable-next-line no-console
      console.warn(
        `The language "${props.language}" you specified could not be found.`,
      );
      return escapeHtml(childrenString);
    }

    if (props.autoDetect) {
      const result = HighlightJS.highlightAuto(childrenString);
      return result.value;
    } else {
      const result = HighlightJS.highlight(childrenString, {
        language: props.language,
        ignoreIllegals: props.ignoreIllegals,
      });
      return result.value;
    }
  });

  return (
    <pre>
      <code
        class={`${className} ${props.class || ""}`}
        innerHTML={getHighlightedCode()}
        {...rest}
      />
    </pre>
  );
};
