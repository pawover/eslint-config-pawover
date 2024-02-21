/**
 * specific rules for ESLint
 * https://github.com/pawover/eslint-config-pawover.git
 *
 * 依赖版本：
 *   eslint ^8.56.0
 *   eslint-plugin-react ^7.33.2
 *   eslint-plugin-vue ^9.21.1
 *   @babel/core ^7.23.9
 *   @babel/eslint-parser ^7.23.10
 *   @babel/preset-react ^7.23.3
 *   vue-eslint-parser ^9.4.2
 *   @typescript-eslint/parser ^6.21.0
 *   @typescript-eslint/eslint-plugin ^6.21.0
 *   typescript ^5.2.2
 *
 * 此文件是由脚本 scripts/build.ts 自动生成
 */
module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: {
      js: "@typescript-eslint/parser",
      jsx: "@typescript-eslint/parser",
      ts: "@typescript-eslint/parser",
      tsx: "@typescript-eslint/parser",
      "<template>": "espree",
    },
    sourceType: "module",
    extraFileExtensions: [".vue"],
    ecmaVersion: 2020,
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true,
    },
    // 即使没有 babelrc 配置文件，也使用 @babel/eslint-parser 来解析
    requireConfigFile: false,
    // 仅允许 import export 语句出现在模块的顶层
    allowImportExportEverywhere: false,
  },
  plugins: ["vue"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "vue/attribute-hyphenation": "off",
    "vue/attributes-order": "error",
    "vue/block-lang": "off",
    "vue/camelcase": "off",
    "vue/comment-directive": "error",
    "vue/component-api-style": "off",
    "vue/component-definition-name-casing": ["error", "PascalCase"],
    "vue/component-name-in-template-casing": "off",
    "vue/component-options-name-casing": "off",
    "vue/component-tags-order": [
      "error",
      {
        order: ["script:not([setup])", "script[setup]", "template", "style:not([scoped])", "style[scoped]"],
      },
    ],
    "vue/custom-event-name-casing": "error",
    "vue/define-emits-declaration": "off",
    "vue/define-macros-order": "error",
    "vue/define-props-declaration": "off",
    "vue/dot-notation": "off",
    "vue/eqeqeq": ["error", "always"],
    "vue/first-attribute-linebreak": "off",
    "vue/html-button-has-type": "off",
    "vue/html-comment-content-newline": "off",
    "vue/html-comment-content-spacing": "off",
    "vue/html-comment-indent": "off",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "always",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
    "vue/jsx-uses-vars": "error",
    "vue/match-component-file-name": "off",
    "vue/match-component-import-name": "off",
    "vue/max-lines-per-block": "off",
    "vue/multi-word-component-names": "off",
    "vue/new-line-between-multi-line-property": "off",
    "vue/next-tick-style": "off",
    "vue/no-arrow-functions-in-watch": "error",
    "vue/no-async-in-computed-properties": "error",
    "vue/no-bare-strings-in-template": "off",
    "vue/no-boolean-default": "off",
    "vue/no-child-content": "error",
    "vue/no-computed-properties-in-data": "error",
    "vue/no-console": "off",
    "vue/no-constant-condition": "off",
    "vue/no-deprecated-data-object-declaration": "error",
    "vue/no-deprecated-destroyed-lifecycle": "error",
    "vue/no-deprecated-dollar-listeners-api": "error",
    "vue/no-deprecated-dollar-scopedslots-api": "error",
    "vue/no-deprecated-events-api": "error",
    "vue/no-deprecated-filter": "error",
    "vue/no-deprecated-functional-template": "error",
    "vue/no-deprecated-html-element-is": "error",
    "vue/no-deprecated-inline-template": "error",
    "vue/no-deprecated-props-default-this": "error",
    "vue/no-deprecated-router-link-tag-prop": "error",
    "vue/no-deprecated-scope-attribute": "error",
    "vue/no-deprecated-slot-attribute": "error",
    "vue/no-deprecated-slot-scope-attribute": "error",
    "vue/no-deprecated-v-bind-sync": "error",
    "vue/no-deprecated-v-is": "error",
    "vue/no-deprecated-v-on-native-modifier": "error",
    "vue/no-deprecated-v-on-number-modifiers": "error",
    "vue/no-deprecated-vue-config-keycodes": "error",
    "vue/no-dupe-keys": "error",
    "vue/no-dupe-v-else-if": "error",
    "vue/no-duplicate-attr-inheritance": "error",
    "vue/no-duplicate-attributes": [
      "error",
      {
        allowCoexistClass: false,
        allowCoexistStyle: false,
      },
    ],
    "vue/no-empty-component-block": "error",
    "vue/no-empty-pattern": "error",
    "vue/no-export-in-script-setup": "error",
    "vue/no-expose-after-await": "error",
    "vue/no-irregular-whitespace": [
      "error",
      {
        skipStrings: true,
        skipComments: false,
        skipRegExps: true,
        skipTemplates: true,
        skipHTMLTextContents: true,
      },
    ],
    "vue/no-lifecycle-after-await": "error",
    "vue/no-lone-template": "error",
    "vue/no-loss-of-precision": "error",
    "vue/no-multiple-objects-in-class": "error",
    "vue/no-multiple-slot-args": "error",
    "vue/no-mutating-props": "error",
    "vue/no-parsing-error": "error",
    "vue/no-potential-component-option-typo": "off",
    "vue/no-ref-as-operand": "error",
    "vue/no-ref-object-destructure": "error",
    "vue/no-required-prop-with-default": "off",
    "vue/no-reserved-component-names": "error",
    "vue/no-reserved-keys": "error",
    "vue/no-reserved-props": "error",
    "vue/no-restricted-block": "off",
    "vue/no-restricted-call-after-await": "off",
    "vue/no-restricted-class": "off",
    "vue/no-restricted-component-names": "off",
    "vue/no-restricted-component-options": "off",
    "vue/no-restricted-custom-event": "off",
    "vue/no-restricted-html-elements": "off",
    "vue/no-restricted-props": "off",
    "vue/no-restricted-static-attribute": "off",
    "vue/no-restricted-syntax": "off",
    "vue/no-restricted-v-bind": "off",
    "vue/no-root-v-if": "off",
    "vue/no-setup-props-destructure": "error",
    "vue/no-shared-component-data": "off",
    "vue/no-side-effects-in-computed-properties": "off",
    "vue/no-sparse-arrays": "error",
    "vue/no-static-inline-styles": "off",
    "vue/no-template-key": "off",
    "vue/no-template-shadow": "off",
    "vue/no-template-target-blank": "off",
    "vue/no-textarea-mustache": "error",
    "vue/no-this-in-before-route-enter": "error",
    "vue/no-undef-components": "off",
    "vue/no-undef-properties": "off",
    "vue/no-unsupported-features": "off",
    "vue/no-unused-components": "error",
    "vue/no-unused-properties": "off",
    "vue/no-unused-refs": "off",
    "vue/no-unused-vars": "error",
    "vue/no-use-computed-property-like-method": "error",
    "vue/no-use-v-if-with-v-for": "error",
    "vue/no-useless-concat": "error",
    "vue/no-useless-mustaches": "error",
    "vue/no-useless-template-attributes": "error",
    "vue/no-useless-v-bind": "error",
    "vue/no-v-html": "off",
    "vue/no-v-text": "off",
    "vue/no-v-text-v-html-on-component": "error",
    "vue/no-watch-after-await": "error",
    "vue/object-shorthand": "off",
    "vue/one-component-per-file": "error",
    "vue/order-in-components": "error",
    "vue/padding-line-between-blocks": "off",
    "vue/padding-line-between-tags": "off",
    "vue/padding-lines-in-component-definition": "off",
    "vue/prefer-define-options": "error",
    "vue/prefer-import-from-vue": "error",
    "vue/prefer-prop-type-boolean-first": "off",
    "vue/prefer-separate-static-class": "off",
    "vue/prefer-template": "off",
    "vue/prefer-true-attribute-shorthand": "error",
    "vue/prop-name-casing": "off",
    "vue/require-component-is": "error",
    "vue/require-default-prop": "off",
    "vue/require-direct-export": "off",
    "vue/require-emit-validator": "off",
    "vue/require-explicit-emits": "error",
    "vue/require-expose": "off",
    "vue/require-macro-variable-name": "off",
    "vue/require-name-property": "off",
    "vue/require-prop-comment": "off",
    "vue/require-prop-type-constructor": "off",
    "vue/require-prop-types": "off",
    "vue/require-render-return": "error",
    "vue/require-slots-as-functions": "error",
    "vue/require-toggle-inside-transition": "error",
    "vue/require-typed-ref": "off",
    "vue/require-v-for-key": "error",
    "vue/require-valid-default-prop": "off",
    "vue/return-in-computed-property": "error",
    "vue/return-in-emits-validator": "error",
    "vue/sort-keys": "off",
    "vue/static-class-names-order": "off",
    "vue/this-in-template": "error",
    "vue/use-v-on-exact": "error",
    "vue/v-bind-style": "error",
    "vue/v-for-delimiter-style": "off",
    "vue/v-on-event-hyphenation": "error",
    "vue/v-on-handler-style": "off",
    "vue/v-on-style": "error",
    "vue/v-slot-style": "off",
    "vue/valid-attribute-name": "error",
    "vue/valid-define-emits": "off",
    "vue/valid-define-options": "error",
    "vue/valid-define-props": "off",
    "vue/valid-model-definition": "error",
    "vue/valid-next-tick": "error",
    "vue/valid-template-root": "error",
    "vue/valid-v-bind": "error",
    "vue/valid-v-cloak": "error",
    "vue/valid-v-else": "error",
    "vue/valid-v-else-if": "error",
    "vue/valid-v-for": "error",
    "vue/valid-v-html": "error",
    "vue/valid-v-if": "error",
    "vue/valid-v-is": "error",
    "vue/valid-v-memo": "off",
    "vue/valid-v-model": "error",
    "vue/valid-v-on": "error",
    "vue/valid-v-once": "error",
    "vue/valid-v-pre": "error",
    "vue/valid-v-show": "error",
    "vue/valid-v-slot": "error",
    "vue/valid-v-text": "error",
  },
};
