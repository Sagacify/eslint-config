# Sagacify Eslint Config

This eslint config is aimed to extend the [standard config](https://github.com/standard/eslint-config-standard).
These are additional specific rules we use at Sagacify.

## Usage

In your **package.json** file add this section.

```js
  //...
  "eslintConfig": {
    "extends": [
      "standard",
      "@sagacify"
    ]
  }
  //...
```

Or in your **.eslintrc** file add this section.

```json
  "extends": [
    "standard",
    "@sagacify"
  ]
```

> **Note:** `@sagacify` is a shortcut for `@sagacify/eslint-config`.
Both can be used equally. See: https://eslint.org/docs/developer-guide/shareable-configs
