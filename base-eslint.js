const {
  resolve,
} = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
    "react": {
      "version": "detect"
    }
  },
  ignorePatterns: [
    ".*.js",
    "node_modules/",
    "dist/",
  ],
  overrides: [
    {
      files: ["*.js?(x)", "*.ts?(x)"],
    },
  ],
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  plugins: [
    "@typescript-eslint",
    "import",
    "unused-imports",
    "sort-imports-es6-autofix",
  ],
  rules: {
    "indent": "off",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "react/jsx-first-prop-new-line": [
      "error",
      "always",
    ],
    "react/jsx-max-props-per-line": [2, {
      maximum: 1,
    }],
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "sort-imports-es6-autofix/sort-imports-es6": [2, {
      "ignoreCase": false,
      "ignoreMemberSort": false,
      "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
    }],
    "unused-imports/no-unused-imports": "error",
    "no-multiple-empty-lines": ["error", {
      "max": 1,
    }],
    "require-jsdoc": "off",
    "quotes": ["error", "double"],
    "import/no-unresolved": 0,
    "object-curly-spacing": ["error", "always"],

    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "never",
      "exports": "never",
      "functions": "always-multiline",
    }],
    "function-paren-newline": ["error", "multiline"],
    "@typescript-eslint/indent": ["error", 2],
    "max-len": ["error", {
      "code": 150,
      "ignoreUrls": true,
      "ignoreStrings": true,
      "ignoreComments": true,
    }],
    "object-property-newline": "error",
    "object-curly-newline": ["error", {
      "ObjectExpression": {
        "multiline": true,
        "minProperties": 1,
      },
      "ObjectPattern": {
        "multiline": true,
        "minProperties": 1,
      },
      "ImportDeclaration": {
        "multiline": true,
        "minProperties": 3,
      },
      "ExportDeclaration": {
        "multiline": true,
        "minProperties": 3,
      },
    }],
  },
};
