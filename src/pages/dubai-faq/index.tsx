// Sections
import FaqHero from '@/components/sections/FaqHero'
import NewsLetter from '@/components/sections/NewsLetter'
import Accordion from '@/components/shared/Accordion'
import MainLayout from '@/layouts/MainLayout'
import Head from 'next/head'
import TextContainer from '@/layouts/TextContainer'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function Faq() {
    const generalFaqs = [
        { title: 'general.item1.title', content: 'general.item1.content' },
        { title: 'general.item2.title', content: 'general.item2.content' },
        { title: 'general.item3.title', content: 'general.item3.content' },
        { title: 'general.item4.title', content: 'general.item4.content' },
        { title: 'general.item5.title', content: 'general.item5.content' },
        { title: 'general.item6.title', content: 'general.item6.content' },
        { title: 'general.item7.title', content: 'general.item7.content' },
        { title: 'general.item8.title', content: 'general.item8.content' },
        { title: 'general.item9.title', content: 'general.item9.content' },
        { title: 'general.item10.title', content: 'general.item10.content' },
        { title: 'general.item11.title', content: 'general.item11.content' },
        { title: 'general.item12.title', content: 'general.item12.content' },
        { title: 'general.item13.title', content: 'general.item13.content' },
        { title: 'general.item14.title', content: 'general.item14.content' },
        { title: 'general.item15.title', content: 'general.item15.content' },
        { title: 'general.item16.title', content: 'general.item16.content' }
    ]
    const tier12 = [
        { title: 'tier12.item1.title', content: 'tier12.item1.content' },
        { title: 'tier12.item2.title', content: 'tier12.item2.content' }
    ]
    const tier34 = [
        { title: 'tier34.item1.title', content: 'tier34.item1.content' },
        { title: 'tier34.item2.title', content: 'tier34.item2.content' },
        { title: 'tier34.item3.title', content: 'tier34.item3.content' },
        { title: 'tier34.item4.title', content: 'tier34.item4.content' },
        { title: 'tier34.item5.title', content: 'tier34.item5.content' }
    ]
    const { t } = useTranslation('faq')
    return <MainLayout>
        <Head>
            <meta name="description" content="Mavie Dubai Leadership event frequently asked questions, answered all in one place." />
            <meta property="og:image" content="https://www.mavie.global/assets/images/dubai-og.png" />
        </Head>
        <TextContainer className='flex flex-col py-[100px]'>
            <FaqHero />
            <div className='w-[90%] md:max-w-[75%]  lg:w-[1020px] mx-auto'>
                <section className='my-12'>
                    <h3 className='text-4xl lg:text-6xl lg:pl-14 my-6 font-bold uppercase bg-main-gradient bg-clip-text min-w-fit text-transparent italic'>{t('title1')}</h3>
                    <Accordion items={generalFaqs} />
                </section>
                <section className='my-12'>
                    <h3 className='text-4xl lg:text-6xl lg:pl-14 my-6 w-fit uppercase font-bold italic'>
                        {t('title2')}
                        <span className='bg-main-gradient bg-clip-text text-transparent p-2 not-italic'> 1 & 2 </span>
                    </h3>
                    <Accordion items={tier12} />
                </section>
                <section className='my-12'>
                    <h3 className='text-4xl lg:text-6xl lg:pl-14 my-6 w-fit uppercase font-bold italic'>
                        {t('title3')}
                        <span className='bg-main-gradient bg-clip-text text-transparent not-italic'> 3 & 4 </span>
                    </h3>
                    <Accordion items={tier34} />
                </section>
            </div>
        </TextContainer>
        <NewsLetter />
    </MainLayout>
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['faq']))
    }
})
