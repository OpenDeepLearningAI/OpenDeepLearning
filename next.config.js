const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra({
  i18n: {
    locales: ["en" , "pt", "tr", "es", "jp", "kr", "zr"],
    defaultLocale: "en",
    localeDetection: false,
  },
  trailingSlash: true,
});
