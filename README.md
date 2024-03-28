# eslint-config-pawover

ESLint 规则

一套适用于 React/Vue/Typescript 项目的 ESLint 配置规范。

## 基础规则

### 安装

```shell
pnpm add -D eslint eslint-config-pawover
```

### 使用

```js
module.exports = {
  extends: ["pawover"],
};
```

## Typescript

### 安装

```shell
pnpm add --save-dev eslint typescript eslint-config-pawover
```

```js
module.exports = {
  // 按顺序引入
  extends: ["pawover", "pawover/typescript"],
  parserOptions: {
    // 你的 tsconfig.json 路径
    project: "./tsconfig.json",
  },
};
```

### 使用

## React

### 安装

```shell
pnpm add --save-dev eslint eslint-config-pawover
```

### 使用

```js
module.exports = {
  // 按顺序引入
  extends: ["pawover", "pawover/react"],
};
```

## React Typescript

### 安装

```shell
pnpm add --save-dev eslint typescript eslint-config-pawover
```

### 使用

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

## Vue

### 安装

```shell
pnpm add --save-dev eslint eslint-config-pawover
```

### 使用

```js
module.exports = {
  // 按顺序引入
  extends: ["pawover", "pawover/vue"],
};
```

## Vue Typescript

### 安装

```shell
pnpm add --save-dev eslint eslint-config-pawover

```

### 使用

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

## 相关链接

[eslint-config-alloy](https://alloyteam.github.io/eslint-config-alloy/?language=zh-CN)

## License

[MIT](https://github.com/pawover/eslint-config-pawover/blob/main/LICENSE)

Copyright (c) 2023-present, pawover
