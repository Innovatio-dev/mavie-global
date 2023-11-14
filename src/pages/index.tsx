// Layout
import MainLayout from '@/layouts/MainLayout'
// Sections
import Program from '@/components/sections/program'
import Hero from '@/components/sections/Hero'
import Video from '@/components/sections/Video'
import WelcomeDubai from '@/components/sections/WelcomeDubai'
import NewsLetter from '@/components/sections/NewsLetter'
import AttendeesSection from '@/components/sections/attendees'
import Testimonials from '@/components/sections/Testimonials'
import Networking from '@/components/sections/networking'
// import Speakers from '@/components/sections/Speakers'
import Loader from '@/components/custom/Loader'
import Head from 'next/head'
import { useRouter } from 'next/router'
// import ContactUs from '@/components/sections/ContactUs'

export default function LandingPage() {
    const router = useRouter()
    const hasAnchorLink = router.asPath.includes('#')

    return (
        <MainLayout>
            <Head>
                <meta property="og:title" content="MaVie Global / All for one" />
                <meta property="og:url" content="https://mavie.global" />
                <meta property="og:image" content="https://mavie.global/assets/images/landing-og.png" />
                <meta name="google-site-verification" content="w2wOmghzDGSmRQnnYWC_hO0BdPhQegZq0MjHnwn8Lc0" />
            </Head>
            <button data-tf-popup="MYBurb0m" data-tf-opacity="100" data-tf-size="100" data-tf-iframe-props="title=MaVie Global Become a Partner (PopUp)" data-tf-open="load" data-tf-transitive-search-params data-tf-medium="snippet" style={{ all: 'unset' }}></button><script defer src="//embed.typeform.com/next/embed.js"></script>
            {!hasAnchorLink && <Loader />}
            <Hero />
            <Video/>
            <WelcomeDubai/>
            <Testimonials/>
            <Program/>
            {/* <Speakers/> */}
            <Networking/>
            <AttendeesSection />
            <NewsLetter/>
            {/* <ContactUs/> */}
        </MainLayout>
    )
}
