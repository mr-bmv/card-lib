module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:i18next/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    jsx: true,
  },
  plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  globals: {
    __IS_DEV__: true,
    __API__: true,
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/no-deprecated': 'off',

    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: [
          'as',
          'role',
          'data-testid',
          'to',
          'target',
          'justify',
          'align',
          'border',
          'direction',
          'gap',
          'feature',
          'color',
          'variant',
          'size',
          'wrap',
        ],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-param-reassign': 'off',
    'react/display-name': 'off',
  },
};
