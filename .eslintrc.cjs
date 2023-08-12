module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:nuxt/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "vue/multi-word-component-names": 0,
    "no-multiple-empty-lines": ["error", { max: 2, maxBOF: 2, maxEOF: 0 }],
  },
};
