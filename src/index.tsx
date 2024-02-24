import Prismjs from "prismjs";
import {
  createMemo,
  mergeProps,
  splitProps,
  type ComponentProps,
  type ParentComponent,
} from "solid-js";

type Props = {
  language?: string;
  autoDetect?: boolean;
  ignoreIllegals?: boolean;
} & ComponentProps<"code">;

export const Highlight: ParentComponent<Props> = (_props) => {
  const props = mergeProps(
    { autoDetect: true, ignoreIllegals: true, language: "" },
    _props
  );
  const [, rest] = splitProps(props, [
    "language",
    "autoDetect",
    "ignoreIllegals",
    "children",
    "class",
    "innerHTML",
  ]);

  // const cannotDetectLanguage =
  //   !props.autoDetect &&
  //   !props.language &&
  //   props.children &&
  //   !Prism.getLanguage(props.children.toString());
  const className = "language-typescript";

  const getHighlightedCode = createMemo(() => {
    const childrenString = props.children?.toString();
    if (!childrenString) {
      return "";
    }

    // if (cannotDetectLanguage) {
    //   // eslint-disable-next-line no-console
    //   console.warn(
    //     `The language "${props.language}" you specified could not be found.`
    //   );
    //   return escapeHtml(childrenString);
    // }

    const result = Prismjs.highlight(
      childrenString,
      Prismjs.languages["typescript"]!,
      "typescript"
    );
    return result;
    // if (props.autoDetect) {
    //   const result = Prism.highlightAuto(childrenString);
    //   return result.value;
    // } else {
    //   const result = Prism.highlight(childrenString, {
    //     language: props.language,
    //     ignoreIllegals: props.ignoreIllegals,
    //   });
    //   return result.value;
    // }
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
