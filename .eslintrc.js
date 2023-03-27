/*
 - Severity should be one of the following: [0 = off],[1 = warning],[2 = error] (you passed "3").
 - ESLint Documentation https://eslint.org/docs/user-guide/getting-started you can find information 
   about all of these rules
*/
module.exports = {
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "react", "prettier", "jsx-a11y"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    createDefaultProgram: true,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".ts", ".tsx"],
      },
    ],
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "all",
        arrowParens: "avoid",
        endOfLine: "auto",
      },
    ],
    "import/extensions": 0,
    "react/prop-types": 0,
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "react/no-children-prop": 0,
    "react/jsx-props-no-spreading": 0,
    "react/require-default-props": 0,
    "react-hooks/exhaustive-deps": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "no-nested-ternary": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "class-methods-use-this": 0,
    "react/function-component-definition": 0,
    "react/react-in-jsx-scope": 0,
    "import/prefer-default-export": 0,
    "react/jsx-pascal-case": 0,
    "react/no-array-index-key": 0,
    "no-case-declarations": 0,
    "no-underscore-dangle": 0,
    "no-restricted-exports": 0,
    "consistent-return": 0,
  },
};
