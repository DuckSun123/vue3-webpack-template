module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    // vue
    // 'plugin:vue/vue3-essential', // Lv1
    'plugin:vue/vue3-strongly-recommended', // LV2
    // 'plugin:vue/vue3-recommended', // LV3
    // js
    'eslint:recommend'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }]
  },
  "vue/html-self-closing": ["error", {
    "html": {
      "void": "always",
      "normal": "never",
      "component": "always"
    },
    "svg": "always",
    "math": "always"
  }]
}