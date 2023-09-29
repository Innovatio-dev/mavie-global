import ChainLeaderBoard from '@/components/custom/ChainLeaderBoard'
import ScoreBoard from '@/components/custom/ScoreBoard'
import MainLayout from '@/layouts/MainLayout'
import { BRANDS } from '@/utils/constants/score'
import Image from 'next/image'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import { EmbededVideo } from '@/components/sections/Video'
import Head from 'next/head'
import AboutLanguageSelector from '@/components/custom/AboutLanguageSelector'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function AboutUsPage() {
    const { t } = useTranslation('about')

    const fadeUpEntrance: Variants = {
        offscreen: {
            y: 100,
            opacity: 0
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.7
            }
        }
    }

    const fadeEntrance: Variants = {
        offscreen: {
            scale: 0.8,
            opacity: 0
        },
        onscreen: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <MainLayout>
            <Head>
                <title>MaVie Global / Road to 100M members</title>
                <meta name="description" content="Join the first affiliate marketing company in the world, which has partnered with Layer-1 blockchain, firmly on the road to 100M members and 1B in sales revenue." />
                <meta property="og:title" content="MaVie Global / Road to 100M members" />
                <meta name="og:description" content="Join the first affiliate marketing company in the world, which has partnered with Layer-1 blockchain, firmly on the road to 100M members and 1B in sales revenue." />
                <meta property="og:url" content="https://mavie.global" />
                <meta property="og:image" content="https://mavie.global/assets/images/landing-og.png" />
            </Head>
            <motion.section className={`
                lines
                w-full h-fit mt-28
                [&_p]:text-[clamp(16px,_50%,_20px)] [&_p]:font-extralight [&_p]:leading-[150%] [&_p]:tracking-[0.5px]
                [&_p_a]:text-brand-cyan [&_p_a]:font-medium [&_p_a]:underline [&_p_a]:underline-offset-4
                [&_p_span]:font-medium
                pt-[50px] pb-[200px] mb-[-180px]
            `}
            >
                <div className='w-full max-w-[800px] flex flex-col gap-[50px] px-4 lg:px-0 mx-auto'>
                    <motion.div initial="offscreen" whileInView="onscreen" variants={fadeUpEntrance}>
                        <AboutLanguageSelector />
                    </motion.div>
                    <motion.div initial="offscreen" whileInView="onscreen" variants={fadeUpEntrance}>
                        <h1 className='text-[clamp(20px,_5vw,_40px)] font-semibold leading-[120%] tracking-widest'>{t('title')}</h1>
                    </motion.div>
                    <motion.p initial="offscreen" whileInView="onscreen" variants={fadeUpEntrance}>{t('p1')}</motion.p>

                    <motion.div initial="offscreen" whileInView="onscreen" variants={fadeEntrance}>
                        <ScoreBoard />
                    </motion.div>

                    <motion.div initial="offscreen" whileInView="onscreen" variants={fadeUpEntrance} className='w-full flex flex-col gap-[50px]'>
                        <h2 className='text-2xl capitalize'>{t('subtitle1')}</h2>
                        <div dangerouslySetInnerHTML={{ __html: t('p2') }} />
                    </motion.div>

                    <motion.div initial="offscreen" whileInView="onscreen" variants={fadeEntrance}>
                        <div className='w-full aspect-video relative'>
                            <EmbededVideo videoURL={'https://www.youtube-nocookie.com/embed/UyNuCLtDe8g?rel=0'}/>
                            {/* <Image src='/assets/images/about-us/2.png' alt='THE 100M MEMBER VISION' fill /> */}
                        </div>
                        <span className='block font-dm text-sm text-brand-light text-center mt-3'>{t('video_caption')}</span>
                    </motion.div>

                    <motion.div initial="offscreen" whileInView="onscreen" variants={fadeUpEntrance}>
                        <div dangerouslySetInnerHTML={{ __html: t('p3') }} />
                    </motion.div>

                    <motion.div initial="offscreen" whileInView="onscreen" variants={fadeEntrance}>
                        <ChainLeaderBoard />
                    </motion.div>

                    <motion.div initial="offscreen" whileInView="onscreen" variants={fadeUpEntrance} className='w-full flex flex-col gap-[50px]'>
                        <div dangerouslySetInnerHTML={{ __html: t('p4') }} />
                        <p>{t('p5')}</p>
                    </motion.div>

                    <motion.div initial="offscreen" whileInView="onscreen" variants={fadeEntrance} className='w-full aspect-video relative'>
                        <Image src='/assets/images/about-us/3.png' alt='How mavie works' fill />
                    </motion.div>

                    <motion.p initial="offscreen" whileInView="onscreen" variants={fadeUpEntrance}>{t('p6')}</motion.p>
                    <motion.p initial="offscreen" whileInView="onscreen" variants={fadeUpEntrance}>{t('p7')}</motion.p>
                    <motion.p initial="offscreen" whileInView="onscreen" variants={fadeUpEntrance}>{t('p8')}</motion.p>

                    <motion.div initial="offscreen" whileInView="onscreen" variants={fadeEntrance} className='w-full aspect-[16_/_7] md:aspect-[16_/_5] flex justify-between items-center px-[clamp(20px,_10%,_80px)] relative'>
                        <Image src='/assets/images/about-us/join-card-bg.png' alt='How mavie works' fill className='object-cover rounded-xl'/>
                        <div className='flex flex-col relative'>
                            <span className='text-[8.8px] font-dm mb-[clamp(5.2px,_1vw,_18px)]'>MAVIE GLOBAL</span>
                            <span className='text-[clamp(18.5px,_5vw,_35px)] leading-[85%] mb-[clamp(13.1px,_1vw,_21.5px)]'>Join the no.1 Web3 affiliate <br /> marketing company.</span>
                            <Link
                                href='https://mavie.global'
                                target='_self'
                                className='w-fit min-w-max bg-main-gradient font-dm text-[clamp(6px,_5vw,_14px)] font-bold px-4 py-2 rounded-full'
                            >JOIN MAVIE NOW</Link>
                        </div>
                        <Image src='/assets/images/about-us/logo.png' alt='How mavie works' width={137} height={66.6} className='hidden lg:block relative'/>
                    </motion.div>

                    <motion.div initial="offscreen" whileInView="onscreen" variants={fadeUpEntrance} className='w-full flex flex-col gap-[50px]'>
                        <div dangerouslySetInnerHTML={{ __html: t('p9') }} />
                        <h2 className='text-2xl capitalize'>{t('subtitle2')}</h2>
                        <div dangerouslySetInnerHTML={{ __html: t('p10') }} />
                    </motion.div>

                    <motion.div initial="offscreen" whileInView="onscreen" variants={fadeEntrance} className='w-full aspect-video relative'>
                        <Image src='/assets/images/about-us/5.png' alt='How mavie works' fill />
                    </motion.div>

                    <motion.div initial="offscreen" whileInView="onscreen" variants={fadeUpEntrance} dangerouslySetInnerHTML={{ __html: t('p11') }} />
                    <motion.p initial="offscreen" whileInView="onscreen" variants={fadeUpEntrance}>{t('p12')}</motion.p>

                    <motion.h2 initial="offscreen" whileInView="onscreen" variants={fadeUpEntrance} className='text-2xl col'>Supported by <span className='text-transparent bg-main-gradient bg-clip-text'>the Industry&apos;s Finest</span></motion.h2>

                    <div className='w-full grid grid-cols-12 lg:gap-x-10 gap-y-8'>
                        {
                            BRANDS.map(({ id, colSpan, icon }) => (
                                <motion.div
                                    initial="offscreen" whileInView="onscreen" variants={fadeEntrance}
                                    key={id}
                                    className={`
                                        flex justify-center items-center col-span-4
                                        ${colSpan === 3 && 'lg:col-span-3'}
                                        ${colSpan === 4 && 'lg:col-span-4'}
                                        ${colSpan === 6 && 'lg:col-span-6'}
                                        [&_svg]:w-10/12
                                    `}
                                >
                                    { icon }
                                </motion.div>
                            ))
                        }
                    </div>

                    <motion.div initial="offscreen" whileInView="onscreen" variants={fadeEntrance} className='w-full aspect-[16_/_5] flex justify-end items-center px-[clamp(20px,_10%,_64px)] mb-20 relative'>
                        <Image src='/assets/images/about-us/become-card-bg.png' alt='How mavie works' fill />
                        <div className='flex flex-col relative'>
                            <span className='text-[8.8px] font-dm mb-[clamp(5.2px,_1vw,_18px)]'>MAVIE GLOBAL</span>
                            <span className='text-[clamp(18.5px,_5vw,_42.5px)] leading-[85%] mb-[clamp(13.1px,_1vw,_21.5px)]'>Become our partner</span>
                            <span className='hidden lg:block text-[11px] font-dm mb-[clamp(5.2px,_1vw,_18px)]'>Join MaVie and become a part of the fastest-growing affiliate marketing <br /> company. Own your future and seize this once-in-a-lifetime opportunity.</span>
                            <Link
                                href='https://mavie.global'
                                target='_self'
                                className='w-fit min-w-max bg-main-gradient font-dm text-sm font-bold px-5 py-2 rounded-full'
                            >JOIN MAVIE NOW</Link>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </MainLayout>
    )
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['about']))
    }
})
