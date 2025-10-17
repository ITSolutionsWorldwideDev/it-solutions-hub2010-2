// next-i18next.config.js
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl'],
    localeDetection: true, // detects from URL, not browser
  },
  localePath: './i18n/locales', // must match your folder structure
};