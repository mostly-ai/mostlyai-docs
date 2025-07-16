module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'mdx'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'next/core-web-vitals', 'plugin:prettier/recommended'],
  settings: {
    'mdx/code-blocks': true,
  },
  overrides: [
    {
      files: ['**/*.mdx'],
      parser: 'eslint-mdx',
      extends: ['plugin:mdx/recommended', 'plugin:prettier/recommended'],
    },
    {
      files: ['**/*.{ts,tsx}'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
    {
      files: ['**/*.{js,jsx}'],
      rules: {
        'no-console': 'warn',
      },
    },
  ],
};
