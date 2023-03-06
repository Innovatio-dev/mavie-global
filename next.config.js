// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    i18n,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*',
                port: '',
                pathname: '**'
            }
        ]
    },
    env: {
        SENDINBLUE_API_KEY: process.env.SENDINBLUE_API_KEY
    }
}
module.exports = nextConfig
