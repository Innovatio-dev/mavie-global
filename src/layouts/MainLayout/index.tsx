// Common
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
// Components
import CallToAction from '@/components/custom/CallToAction'
import MobileMenu from '@/components/custom/MobileMenu'
import BigCounter from '@/components/sections/BigCounter'
// Layout
import InnerContainer from '../InnerContainer'
// Utils
import { NAVIGATION_LINKS } from '@/utils/constants/layout'
import { useMenu } from '@/context/Menu'

function Header() {
    const router = useRouter()
    const { setIsOpen } = useMenu()

    const scrollToSection = (to: string) => {
        const section = document.querySelector(to)
        section?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    const handleClick = (to: string) => {
        if (router.pathname !== '/') {
            router.push(`/${to}`)
        } else {
            scrollToSection(to)
        }
    }

    const handleLogoClick = () => {
        setIsOpen(false)
    }

    return (
        <header className='w-full bg-black fixed top-0 z-50 shadow-2xl shadow-black'>
            <InnerContainer>
                <nav className='h-24 flex justify-between items-center px-4 lg:px-0'>
                    <Link href='/' className='flex items-center gap-4' onClick={handleLogoClick}>
                        <div className='relative w-14 h-10 z-50'>
                            <Image src='/assets/images/logo.webp' alt='Mavie global' priority fill className='object-contain' />
                        </div>
                        <div className='hidden lg:flex flex-col text-sm uppercase'>
                            <span>ALL FOR ONE</span>
                        </div>
                    </Link>
                    <div className='hidden lg:flex items-center gap-5'>
                        {
                            NAVIGATION_LINKS.map(({ name, to, isLink }) => (
                                isLink
                                    ? <Link key={name} href={to} className='text-sm uppercase hover:text-brand-pink transition-all ease-in-out'>{name}</Link>
                                    : <button
                                        aria-label="section"
                                        key={name}
                                        onClick={() => handleClick(to)}
                                        className='text-sm uppercase hover:text-brand-pink transition-all ease-in-out'
                                    >{ name }</button>
                            ))
                        }
                        <CallToAction />
                    </div>
                    <MobileMenu onClick={(to) => handleClick(to)} />
                </nav>
            </InnerContainer>
        </header>
    )
}

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <title>MaVie Global / All for one</title>
                <meta name="description" content="Unleash your potential with MaVie Global - the world’s fastest growing affiliate company. Join us now, own your future and transform your life!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link href='/apple-touch-icon.jpg' rel='apple-touch-icon' sizes='180x180' />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <meta property="og:type" content="website" />
            </Head>
            <Header />
            <main className=' overflow-clip'>
                { children }
                <div id='cta' className='w-full flex lg:hidden justify-center opacity-100 transition-opacity duration-300 fixed bottom-10 left-1/2 -translate-x-1/2 z-40'>
                    <CallToAction />
                </div>
            </main>
            <BigCounter />
        </>
    )
}
