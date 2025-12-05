import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import sonarjs from 'eslint-plugin-sonarjs';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.strictTypeChecked,
        ],
        plugins: {
            sonarjs,
        },
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.node,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            'sonarjs/no-duplicate-string': ['error', { threshold: 3 }],
            'sonarjs/no-identical-functions': 'error',
            'sonarjs/no-duplicated-branches': 'error',
            'sonarjs/cognitive-complexity': ['error', 15],
            'sonarjs/no-redundant-boolean': 'error',
            'sonarjs/prefer-immediate-return': 'error',
            'sonarjs/prefer-single-boolean-return': 'error',
            '@typescript-eslint/no-unused-vars': ['error', {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            }],
            '@typescript-eslint/consistent-type-exports': 'error',
            '@typescript-eslint/consistent-type-imports': 'error',
            '@typescript-eslint/no-unnecessary-condition': 'error',
            '@typescript-eslint/no-unnecessary-type-assertion': 'error',
            '@typescript-eslint/prefer-reduce-type-parameter': 'error',
            '@typescript-eslint/prefer-return-this-type': 'error',
            'no-console': ['error', { allow: ['warn', 'error'] }],
            'max-lines': ['error', { max: 300, skipBlankLines: true, skipComments: true }],
            'max-lines-per-function': ['error', { max: 300, skipBlankLines: true, skipComments: true }],
            'max-statements': ['error', 15],
            'max-depth': ['error', 4],
            'max-nested-callbacks': ['error', 3],
            'max-params': ['error', 4],
            'complexity': ['error', 10],
            'no-inner-declarations': ['error', 'both'],
            '@typescript-eslint/no-loop-func': 'error',
            '@typescript-eslint/no-magic-numbers': ['error', {
                ignore: [0, 1, -1],
                ignoreEnums: true,
                ignoreNumericLiteralTypes: true,
                ignoreReadonlyClassProperties: true,
                ignoreTypeIndexes: true,
            }],
            'prefer-template': 'error',
            'no-template-curly-in-string': 'error',
        },
    },
    {
        files: ['**/data/**/*.ts'],
        rules: {
            'max-lines': 'off',
        },
    },
]);
