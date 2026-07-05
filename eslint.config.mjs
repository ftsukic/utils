import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import tsEslintPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
  {
    ignores: ['es/**', 'lib/**', 'dist/**', 'coverage/**', 'node_modules/**'],
  },
  js.configs.recommended,
  prettier,
  {
    files: ['src/**/*.{js,ts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsParser,
      globals: {
        Blob: 'readonly',
        Document: 'readonly',
        Event: 'readonly',
        FileReader: 'readonly',
        FormData: 'readonly',
        HTMLCanvasElement: 'readonly',
        HTMLImageElement: 'readonly',
        HTMLLinkElement: 'readonly',
        HTMLScriptElement: 'readonly',
        HTMLStyleElement: 'readonly',
        HTMLElement: 'readonly',
        Image: 'readonly',
        MouseEvent: 'readonly',
        Navigator: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        WheelEvent: 'readonly',
        Window: 'readonly',
        console: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        window: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsEslintPlugin,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...tsEslintPlugin.configs.recommended.rules,
      'prettier/prettier': 'error',
      '@typescript-eslint/no-use-before-define': [
        'error',
        { ignoreTypeReferences: true },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'no-console': 'off',
      'no-redeclare': 'off',
      'no-undef': 'off',
      'no-plusplus': 'off',
      'no-useless-assignment': 'off',
      'no-use-before-define': 'off',
      'no-prototype-builtins': 'off',
    },
  },
]
