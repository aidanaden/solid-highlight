import withSolid from "rollup-preset-solid";
import typescript from "rollup-plugin-typescript2";

export default withSolid({
  input: "src/index.tsx",
  plugins: [typescript()],
  external: ["highlight.js/lib/core", "solid"],
  output: [
    {
      file: "dist/highlightjs-solid.min.js",
      format: "iife",
      name: "hljsSolidPlugin",
      interop: "default",
      globals: {
        "highlight.js/lib/core": "hljs",
        solid: "Solid",
      },
    },
    {
      file: "dist/highlightjs-solid.esm.min.js",
      format: "es",
      interop: "default",
      exports: "default",
    },
  ],
});
