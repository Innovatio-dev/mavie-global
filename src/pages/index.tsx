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
import ContactUs from '@/components/sections/ContactUs'

export default function LandingPage() {
    return (
        <MainLayout>
            <Head>
                <meta property="og:title" content="MaVie Global / All for one" />
                <meta property="og:url" content="https://mavie.global" />
                <meta property="og:image" content="https://mavie.global/assets/images/landing-og.png" />
            </Head>
            <Loader />
            <Hero />
            <Video/>
            <WelcomeDubai/>
            <Testimonials/>
            <Program/>
            {/* <Speakers/> */}
            <Networking/>
            <AttendeesSection />
            <NewsLetter/>
            <ContactUs/>
        </MainLayout>
    )
}
