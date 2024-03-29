// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */

module.exports = {
  // Standard prettier options
  singleQuote: false,
  semi: true,
  // Since prettier 3.0, manually specifying plugins is required
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  // This plugin's options
  // importOrder: ['<BUILT_IN_MODULES>', '', '<THIRD_PARTY_MODULES>', '', '^[./]'],
  importOrder: ["<THIRD_PARTY_MODULES>", "", "^(@)(/.*)$", "", "^[.]"],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
};
