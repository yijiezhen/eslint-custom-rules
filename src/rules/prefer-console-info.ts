import { createRule } from '../utils/createRule';
import { AST_NODE_TYPES, TSESTree } from '@typescript-eslint/utils';

type Options = [];
type MessageIds = 'preferConsoleInfo';

export const preferConsoleInfo = createRule<Options, MessageIds>({
  name: 'prefer-console-info',
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Enforce using console.info instead of console.log',
      recommended: 'error',
    },
    fixable: 'code',
    schema: [],
    messages: {
      preferConsoleInfo: 'Use console.info instead of console.log',
    },
  },
  defaultOptions: [],
  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee.type === AST_NODE_TYPES.MemberExpression &&
          node.callee.property.type === AST_NODE_TYPES.Identifier &&
          node.callee.property.name === 'log'
        ) {
          // Check if it's directly console.log or window.console.log
          if (
            (node.callee.object.type === AST_NODE_TYPES.Identifier && 
             node.callee.object.name === 'console') ||
            (node.callee.object.type === AST_NODE_TYPES.MemberExpression &&
             node.callee.object.property.type === AST_NODE_TYPES.Identifier &&
             node.callee.object.property.name === 'console')
          ) {
            context.report({
              node,
              messageId: 'preferConsoleInfo',
              fix(fixer) {
                const memberExpr = node.callee as TSESTree.MemberExpression;
                const property = memberExpr.property as TSESTree.Identifier;
                return fixer.replaceText(property, 'info');
              },
            });
          }
        }
      },
    };
  },
});