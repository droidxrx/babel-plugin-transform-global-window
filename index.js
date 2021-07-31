module.exports = function babel_plugin_global_scope({ types: t }) {
    function isGlobalScope(path) {
        return path.parent.type === "Program";
    }
    function assignToWindow(name) {
        return t.assignmentExpression("=", t.memberExpression(t.identifier("window"), name), name);
    }
    return {
        name: "babel-plugin-transform-global-window",
        visitor: {
            VariableDeclaration(path) {
                if (isGlobalScope(path) == !1) {
                    return;
                }
                var node = path.node;
                var declarations = node.declarations;
                var declarationCount = declarations.length;
                for (var i = 0; i < declarationCount; i++) {
                    var declaration = declarations[i];
                    var declarationName = declaration.id;
                    path.parent.body.push(assignToWindow(declarationName));
                }
            },
            FunctionDeclaration(path) {
                if (isGlobalScope(path) == !1) {
                    return;
                }
                path.parent.body.push(assignToWindow(path.node.id));
            },
            ClassDeclaration(path) {
                if (isGlobalScope(path) == !1) {
                    return;
                }
                path.parent.body.push(assignToWindow(path.node.id));
            },
            ExpressionStatement(path) {
                if (isGlobalScope(path) == !1) {
                    return;
                }
                var expression = path.node.expression;
                if (t.isAssignmentExpression(expression) && t.isIdentifier(expression.left)) {
                    path.parent.body.push(assignToWindow(expression.left));
                }
            },
        },
    };
};
