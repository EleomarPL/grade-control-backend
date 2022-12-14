module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
    'es6': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 12
  },
  'rules': {
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'camelcase': 'error',
    'no-unused-vars': 'warn',
    'no-extra-parens': 'error',
    'space-before-function-paren': ['error', 'never'],
    'keyword-spacing': 'error',
    'eqeqeq': 'error',
    'space-infix-ops': 'error',
    'comma-spacing': 'error',
    'brace-style': 'error',
    'handle-callback-err': 'error',
    'comma-dangle': 'error',
    'comma-style': 'error',
    'dot-location': 'error',
    'key-spacing': 'error',
    'no-const-assign': 'error',
    'no-multi-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'no-trailing-spaces': ['error', {'skipBlankLines': true}],
    'space-before-blocks': 'error',
    'arrow-spacing': 'error',
    'block-spacing': 'warn',
    'multiline-ternary': ['error', 'always-multiline'],
    'semi': ['error', 'always']
  }
};
  