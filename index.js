module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },

  env: {
    es2021: true,
    node: true,
    mocha: true
  },
  rules: {
    // Errors
    'block-scoped-var': 'error',
    'guard-for-in': 'error',
    'max-classes-per-file': 'error',
    'no-constructor-return': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-eq-null': 'error',
    'no-extra-semi': 'error',
    'no-invalid-this': 'error',
    'no-loop-func': 'error',
    'no-promise-executor-return': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-shadow': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    // Overwrite Standard error to warning level
    'prefer-regex-literals': ['warn', { disallowRedundantWrapping: true }],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    // Removed until this issue is solved:
    // https://github.com/eslint/eslint/issues/11899
    //'require-atomic-updates': 'error',
    radix: 'error',
    semi: ['error', 'always'],
    // Warnings
    'default-param-last': 'warn',
    'max-len': ['warn', { code: 100 }],
    'no-alert': 'warn',
    'no-console': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-warning-comments': 'warn',
    complexity: ['warn', { max: 20 }]
  }
};
