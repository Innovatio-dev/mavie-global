// Types
import type { AppProps } from 'next/app'
// Context
import { MenuProvider } from '@/context/Menu'
// Styles
import '@/styles/globals.scss'
// Fonts
import localFonts from '@next/font/local'
import { DM_Sans as DMSans, Poppins } from '@next/font/google'
// i18n
import { appWithTranslation } from 'next-i18next'
import { ParallaxProvider } from 'react-scroll-parallax'

const eestiPro = localFonts({
    src: [
        {
            path: '../../public/assets/fonts/GTEestiProText-UltraLight.woff',
            weight: '200'
        },
        {
            path: '../../public/assets/fonts/GTEestiProText-Light.woff',
            weight: '300'
        },
        {
            path: '../../public/assets/fonts/GTEestiProText-Regular.woff',
            weight: '400'
        },
        {
            path: '../../public/assets/fonts/GTEestiProText-Medium.woff',
            weight: '500'
        },
        {
            path: '../../public/assets/fonts/GTEestiProText-Bold.woff',
            weight: '600'
        },
        {
            path: '../../public/assets/fonts/GTEestiProDisplay-UltraBold.woff',
            weight: '700'
        }
    ],
    variable: '--font-eesti'
})

const poppins = Poppins({
    variable: '--font-poppins',
    weight: ['400', '500', '800'],
    subsets: ['latin']
})

const dmSans = DMSans({
    variable: '--font-dm',
    weight: ['400', '500', '700'],
    subsets: ['latin']
})

function App({ Component, pageProps }: AppProps) {
    return <>
        <MenuProvider>
            <ParallaxProvider>
                <div className={`${eestiPro.variable} ${poppins.variable} ${dmSans.variable} font-eesti`}>
                    <Component {...pageProps} />
                </div>
            </ParallaxProvider>
        </MenuProvider>
    </>
}

export default appWithTranslation(App)
