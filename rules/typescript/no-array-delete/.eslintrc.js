module.exports = {
  rules: {
    /**
     * 禁止在数组值上使用 delete 操作符，应使用 splice 方法替代
     */
    "@typescript-eslint/no-array-delete": "error",
  },
};
