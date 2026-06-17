module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: '禁止使用 console.log',
      recommended: true
    },
    fixable: null,
    schema: []
  },

  create(context) {
    return {
      CallExpression(node) {
        // 判断是否是 console.xxx()
        if (
          node.callee &&
          node.callee.type === 'MemberExpression' &&
          node.callee.object.name === 'console' &&
          node.callee.property.name === 'log'
        ) {
          context.report({
            node,
            message: '生产环境禁止使用 console.log'
          })
        }
      }
    }
  }
}