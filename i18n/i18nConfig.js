// i18n/i18nConfig.js
const i18nConfig = {
  locales: ['en', 'nl'],
  defaultLocale: 'en',
  prefixDefault: false,  // whether defaultLocale URLs have prefix or not
  localeCookie: 'NEXT_LOCALE',  // cookie name for locale
  serverSetCookie: 'always',    // when to set cookie on server (e.g., always)
};

module.exports = i18nConfig;
