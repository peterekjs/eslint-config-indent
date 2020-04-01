module.exports = {
    SwitchCase: 1,
    VariableDeclarator: { var: 1, let: 1, const: 'first' },
    outerIIFEBody: 1,
    MemberExpression: 1,
    FunctionDeclaration: {
        parameters: 2,
        body: 1
    },
    FunctionExpression: {
        parameters: 2,
        body: 1
    },
    CallExpression: {
        arguments: 1
    },
    ArrayExpression: 1,
    ObjectExpression: 1,
    ImportDeclaration: 1,
    flatTernaryExpressions: false,
    ignoreComments: false,
    ignoredNodes: ['TemplateLiteral *']
}
