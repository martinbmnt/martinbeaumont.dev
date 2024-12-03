import globals from "globals";
import parser from "astro-eslint-parser";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/dist",
        "**/node_modules",
        "**/.astro",
        "**/.github",
        "src/custom-attributes.d.ts",
        "src/content/**/*.md",
        "**/env.d.ts",
    ],
}, ...compat.extends("eslint:recommended", "plugin:astro/recommended").map(config => ({
    ...config,
    files: ["**/*.js", "**/*.ts", "**/*.astro"],
})), {
    files: ["**/*.js", "**/*.ts", "**/*.astro"],

    languageOptions: {
        globals: {
            ...globals.node,
            ...globals.browser,
        },

        ecmaVersion: "latest",
        sourceType: "module",
    },

    rules: {},
}, {
    files: ["**/*.astro"],

    languageOptions: {
        parser: parser,
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            parser: "@typescript-eslint/parser",
            extraFileExtensions: [".astro"],
        },
    },

    rules: {},
}, ...compat.extends("plugin:@typescript-eslint/recommended").map(config => ({
    ...config,
    files: ["**/*.ts"],
})), {
    files: ["**/*.ts"],

    languageOptions: {
        parser: tsParser,
    },

    rules: {
        "@typescript-eslint/no-unused-vars": ["error", {
            argsIgnorePattern: "^_",
            destructuredArrayIgnorePattern: "^_",
        }],

        "@typescript-eslint/no-non-null-assertion": "off",
    },
}, {
    files: ["**/*.astro/*.js", "*.astro/*.js"],

    languageOptions: {
        parser: tsParser,
    },
}];
