module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
  "prettier/prettier": [
    "error",
    {
      singleQuote: false,
      parser: "flow",
      trailingComma: "es5",
      endOfLine: "auto",
    },
  ],
  tailwindConfig: "./tailwind.config.ts",
};
