module.exports = {
    "extends": "standard",
    "plugins": [
        "standard",
        "promise",
        "react"
    ],
    "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    }
  },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "env": {
        "browser": true,
        "node": true
    }
};
