module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/explicit-function-return-type': 1
  },
  env: {
    node: true,
    mocha: true,
    browser: true,
    es6: true
  },
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  globals: {
    document: false,
    window: false
  }
};
