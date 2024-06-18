module.exports = {
  root: false,
  extends: '@react-native',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'prettier/prettier': 0,
        'react-native/no-inline-styles': 0,
        'react/react-in-jsx-scope': 0,
        'react-hooks/exhaustive-deps': 0,
      },
    },
  ],
};
