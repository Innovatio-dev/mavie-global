// Next Js
import Borderedtext from '@/components/custom/BorderedText'
// Components
import IconScroll from '@/components/shared/IconScroll'
// Next Js
import Image from 'next/image'
// Layout
import Link from 'next/link'
// Framer Motion
import { motion } from 'framer-motion'
// React Scroll Parallax
import { Parallax } from 'react-scroll-parallax'
// Language lib
import { useTranslation } from 'next-i18next'
import LanguageSelector from '../../shared/LanguageSelector/index'
import { HiLanguage } from 'react-icons/hi2'

export default function FaqHero() {
    const { t } = useTranslation('faq')
    return <section className='relative flex flex-col lg:max-w-[90%] xl:max-w-full min-h-0 md:min-h-screen md:justify-center items-center mb-5'>
        <div className='flex w-full items-center relative min-h-full text-center md:text-start overflow 3xl:max-w-[50%]'>

            <div className='absolute w-full h-full top-0 left-0 md:flex justify-between'>
                <div className='w-1/13  h-full relative'></div>
                <div className='md:w-2/3 w-full h-full absolute top-0 lg:right-[-8%] md:relative'>
                    <div className='relative z-0 h-full w-full scale-[1.5] md:scale-100'>
                        <Parallax
                            className='w-full h-full'
                            scale={[0, 2]}
                            opacity={[1.8, 0]}
                        >
                            <Image src='/assets/images/3d-mavie.webp' fill alt='mavie logo' className='object-scale-down' />
                        </Parallax>
                        <Image src='/assets/images/faded.png' fill alt='dubai city' className='object-scale-down scale-x-[-1] ' />
                    </div>
                </div>
            </div>
            <motion.div
                className='flex flex-col items-center md:items-start relative z-20 md:max-w-[50rem] md:px-32 lg:pr-0 gap-1 md:gap-10 lg:gap-25 p-5 leading-[1.3]'
                transition={{ duration: 0.6 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                <div className='flex flex-col md:items-start items-center gap-1'>
                    <h1 className='text-white text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide'>
                        {'DUBAI EVENT'}
                    </h1>
                    <Borderedtext duplicate className='text-transparent bg-clip-text font-semibold text-7xl bg-main-gradient max-w-fit tracking-wider'>
                        {'FAQ'}
                    </Borderedtext>
                </div>
                <p className='uppercase text-[1.3rem] md:text-[2rem] lg:text-[2.5rem] font-semibold max-w-[20rem] md:max-w-[30rem] tracking-wide'>
                    {t('title')}
                </p>
                <div className='flex flex-col gap-6 text-[1.0rem] lg:text-2-[1.1rem] xl:text-[1.2rem] font-normal tracking-[1px] md:mt-0 mt-[2rem]'>
                    <p className=''>
                        {'Do you need additional info of Dubai Grand event or got a burning question that you need answered right away? Just click on one of the sections below to find the answer.'}
                    </p>
                    <p className=''>
                        {'If you still can’t find an answer to your question, you can contact our support office at '}
                        <Link href='mailto:events@mavie.global' className='text-brand-cyan underline'>events@mavie.global.</Link>
                    </p>
                </div>

                <div className='z-10 flex flex-col gap-2'>
                    <div className='flex items-center gap-2'>
                        <span className='text-[1.2rem]'><HiLanguage /></span>
                        <div>Select your language</div>
                    </div>
                    <LanguageSelector />
                </div>
                <div className='w-full lg:left-[-8rem] relative lg:w-screen h-auto flex justify-center mb-5'>
                    <IconScroll />
                </div>
            </motion.div>
        </div>
    </section>
}
