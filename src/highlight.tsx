import Prismjs from "prismjs";
import {
  createMemo,
  mergeProps,
  splitProps,
  type ComponentProps,
  type ParentComponent,
} from "solid-js";

type Props = {
  language: string;
} & ComponentProps<"code">;

export const Highlight: ParentComponent<Props> = (_props) => {
  const props = mergeProps({ language: "javascript" }, _props);
  const [, rest] = splitProps(props, [
    "language",
    "children",
    "class",
    "innerHTML",
  ]);
  const languageClass = createMemo(() => `language-${props.language}`);
  const highlightedCode = createMemo<string | undefined>(() => {
    const childrenString = props.children?.toString();
    if (!childrenString) {
      return;
    }
    const grammar = Prismjs.languages[props.language];
    if (!grammar) {
      return;
    }
    const result = Prismjs.highlight(childrenString, grammar, props.language);
    return result;
  });

  return (
    <pre>
      <code
        class={`${languageClass()} ${props.class || ""}`}
        innerHTML={highlightedCode()}
        {...rest}
      />
    </pre>
  );
};
