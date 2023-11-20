// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'hu', 'jp', 'es', 'pt', 'ph'],
        localePath: path.resolve('./public/locales'),
        localeDetection: false
    }
}
