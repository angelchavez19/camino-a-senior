// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import prettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

export default withNuxt(
  {
    ignores: [".nuxt", "dist", ".output", "node_modules"],
  },
  {
    files: ["**/*.{ts,js,vue}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      // --- TypeScript ---
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/no-explicit-any": "warn",

      // --- General ---
      "no-console": "error",
      "no-debugger": "error",
      "no-unused-vars": "off", // usamos la de TS

      // --- Imports ---
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
          ],
          "newlines-between": "always",
        },
      ],
    },
  },
  prettier
);
