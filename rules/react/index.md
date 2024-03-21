# React 规则

## React 使用方法

### 安装

::: code-group

```shell [npm]
npm install --save-dev eslint eslint-config-pawover
```

```shell [pnpm]
pnpm add --save-dev eslint eslint-config-pawover
```

:::

### 配置

在你的项目的根目录下创建一个 `.eslintrc.js` 文件，并将以下内容复制进去：

```js
module.exports = {
  // 按顺序引入
  extends: ["pawover", "pawover/react"],
};
```

## React Typescript 使用方法

### 安装

::: code-group

```shell [npm]
npm install --save-dev eslint typescript eslint-config-pawover
```

```shell [pnpm]
pnpm add --save-dev eslint typescript eslint-config-pawover
```

:::

### 配置

在你的项目的根目录下创建一个 `.eslintrc.js` 文件，并将以下内容复制进去：

```js
module.exports = {
  // 按顺序引入
  extends: ["pawover", "pawover/typescript", "pawover/react"],
  parserOptions: {
    // 你的 tsconfig.json 路径
    project: "./tsconfig.json",
  },
};
```
