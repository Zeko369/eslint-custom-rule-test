module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["custom-rule"],
  rules: {
    "custom-rule/no-rick": 1,
  },
};
