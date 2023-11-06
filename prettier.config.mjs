// prettier.config.mjs
/** @type {import("prettier").Config} */
export default {
  trailingComma: "es5",
  semi: false,
  singleQuote: true,
  printWidth: 100,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
