module.exports = {
  rules: {
    /**
     * 在查找单个结果时，强制使用 Array.prototype.find()，而不是 Array.prototype.filter()[0]
     */
    "@typescript-eslint/prefer-find": "error",
  },
};
