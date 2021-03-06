// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [ // locales list
          'de',
          'en'
        ],
        pathAliases: { // path segment alias for each locales
          'de': 'de',
          'en': 'en'
        },
        fallbackLocale: 'en', // fallback language
        enablePathRewrite: true, // rewrite path with locale prefix, default: true
        rewriteDefaultLanguage: true, // rewrite default locale, default: true
        messages: {
          'de': require('./src/locales/de.json'),
          'en': require('./src/locales/en.json'),
        }
      }
    },
  ]
}
