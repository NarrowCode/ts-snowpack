module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "brace-style": ["error", "stroustrup"],
      "indent": ["error", 2],
      "eol-last": ["error", "always"],
      "@typescript-eslint/no-unused-vars": 2
    },
    "ignorePatterns": ["/**/*.js"],
}
