# Vue 规则

## Vue 使用方法

### 安装

::: code-group

```shell [npm]
npm install --save-dev eslint @babel/core @babel/eslint-parser vue-eslint-parser eslint-plugin-vue eslint-config-pawover
```

```shell [pnpm]
pnpm add --save-dev eslint @babel/core @babel/eslint-parser vue-eslint-parser eslint-plugin-vue eslint-config-pawover
```

:::

### 配置

在你的项目的根目录下创建一个 `.eslintrc.js` 文件，并将以下内容复制进去：

```js
module.exports = {
  // 按顺序引入
  extends: ["pawover", "pawover/vue"],
};
```

## Vue Typescript 使用方法

### 安装

::: code-group

```shell [npm]
npm install --save-dev @babel/core @babel/eslint-parser @typescript-eslint/eslint-plugin @typescript-eslint/parser @vue/eslint-config-typescript eslint eslint-config-pawover eslint-plugin-vue vue-eslint-parser
```

```shell [pnpm]
pnpm add --save-dev @babel/core @babel/eslint-parser @typescript-eslint/eslint-plugin @typescript-eslint/parser @vue/eslint-config-typescript eslint eslint-config-pawover eslint-plugin-vue vue-eslint-parser
```

:::

### 配置

在你的项目的根目录下创建一个 `.eslintrc.js` 文件，并将以下内容复制进去：

```js
module.exports = {
  // 按顺序引入
  extends: ["pawover", "pawover/typescript", "pawover/vue"],
  parserOptions: {
    // 你的 tsconfig.json 路径
    project: "./tsconfig.json",
  },
};
```
