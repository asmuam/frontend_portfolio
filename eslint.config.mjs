import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // Menambahkan global Node.js
      },
      parserOptions: {
        ecmaVersion: 2021, // Menggunakan ECMAScript 2021
        sourceType: 'module', // Mendukung module
      },
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      // Aturan tambahan atau kustom bisa ditambahkan di sini
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
