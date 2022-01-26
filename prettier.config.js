module.exports = {
  trailingComma: "es5",
  tabWidth: 4,
  semi: false,
  singleQuote: true,
  quoteProps: "as-needed",
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "typescript",
    },
  ],
};
