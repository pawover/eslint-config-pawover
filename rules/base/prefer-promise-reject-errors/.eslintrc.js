module.exports = {
  rules: {
    /**
     * 对于 Promises 中的用户自定义错误，最佳实践是只将内置 Error 对象实例传递给 reject() 函数。
     * @reason 特殊用例
     */
    "prefer-promise-reject-errors": "off",
  },
};
