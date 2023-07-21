import ChainLeaderBoard from '@/components/custom/ChainLeaderBoard'
import ScoreBoard from '@/components/custom/ScoreBoard'
import MainLayout from '@/layouts/MainLayout'
import { BRANDS } from '@/utils/constants/score'
import Image from 'next/image'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import { EmbededVideo } from '@/components/sections/Video'
import Head from 'next/head'

export default function AboutUsPage() {
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
                        <h1 className='text-[clamp(20px,_5vw,_40px)] font-semibold leading-[120%] tracking-widest'>MaVie Global Sales Break $100M in Under 1 Year, Creating More Than $400M On-Chain Value</h1>
                    </motion.div>
                    <motion.p initial="offscreen" whileInView="onscreen" variants={fadeUpEntrance}>Celebrating its first year, MaVie Global broke the $100M mark, making them the second fastest-growing affiliate company in the world by revenue. They did that by becoming the first affiliate company in the world that partnered with Layer-1 blockchain, bringing its total value locked to a whopping half billion dollars.</motion.p>

                    <motion.div initial="offscreen" whileInView="onscreen" variants={fadeEntrance}>
                        <ScoreBoard />
                    </motion.div>

                    <motion.div initial="offscreen" whileInView="onscreen" variants={fadeUpEntrance} className='w-full flex flex-col gap-[50px]'>
                        <h2 className='text-2xl capitalize'>MaVie Global: the no.1 WEB3 Affiliate Marketing platform in the world</h2>
                        <p>
                            MaVie Global is a platform providing opportunities for WEB3 products and services. In less than 12 months, it has attracted over <span>250.000 people from 120 countries,</span> generating more than <span>$100M in sales revenue.</span> Under the ingenious leadership of CEO Michal Prazenica, MaVie has opened more than 20+ partner offices, including its crown jewel, the prestigious Dubai office, which overlooks the city, serving as a constant reminder of its immense potential.
                        </p>
                    </motion.div>

                    <motion.div initial="offscreen" whileInView="onscreen" variants={fadeEntrance}>
                        <div className='w-full aspect-video relative'>
                            <EmbededVideo videoURL={'https://www.youtube-nocookie.com/embed/UyNuCLtDe8g?rel=0'}/>
                            {/* <Image src='/assets/images/about-us/2.png' alt='THE 100M MEMBER VISION' fill /> */}
                        </div>
                        <span className='block font-dm text-sm text-brand-light text-center mt-3'>(MaVie Global - road to 100M users. SOUND ON)</span>
                    </motion.div>

                    <motion.div initial="offscreen" whileInView="onscreen" variants={fadeUpEntrance}>
                        <p>MaVie is the FIRST affiliate marketing platform in the world that partnered with the Layer-1 blockchain, positioning itself way ahead of any other player in the Affiliate marketing industry known as Network Marketing Industry by BFH. <span>In only 12 months MaVie Global community has generated almost HALF A BILLION DOLLARS in total value for <Link href='https://ultron.foundation/' target='_blank'>Ultron.</Link></span> This impressive feat puts them among the top 10 blockchains by Total Value locked, a groundbreaking achievement that has never been seen before.</p>
                    </motion.div>

                    <motion.div initial="offscreen" whileInView="onscreen" variants={fadeEntrance}>
                        <ChainLeaderBoard />
                    </motion.div>

                    <motion.div initial="offscreen" whileInView="onscreen" variants={fadeUpEntrance}>
                        <p>Comparing this partnership, it&apos;s similar to MaVie having collaborated with Microsoft, Apple, Samsung, or Google 20 years ago. These companies are <span>now worth trillions of dollars,</span> and those fortunate to have been involved from the start continue to reap benefits. This venture has resulted in generational wealth, a legacy set to endure for decades to come.</p>
                        <p>MaVie Global functions as a vital bridge, linking the community and the revolutionary technology of WEB3. As you read this, more than 10 cutting-edge decentralized applications (dApps) are under development, awaiting to shape the future of the digital world.</p>
                    </motion.div>

                    <motion.div initial="offscreen" whileInView="onscreen" variants={fadeEntrance} className='w-full aspect-video relative'>
                        <Image src='/assets/images/about-us/3.png' alt='How mavie works' fill />
                    </motion.div>

                    <motion.p initial="offscreen" whileInView="onscreen" variants={fadeUpEntrance}>But MaVie Global is more than just that. Its primary role is to critically assess partners, their products and services, and provide them with the best marketing exposure globally. It accomplishes this through the power of its robust community.</motion.p>
                    <motion.p initial="offscreen" whileInView="onscreen" variants={fadeUpEntrance}>Here&apos;s where it gets even better for you as a part of the MaVie Global community: Not only will you benefit from a generous compensation plan, but you&apos;ll also reap rewards from the very products and services that MaVie Global introduces. This dual-profit system creates immense potential for earnings and growth.</motion.p>
                    <motion.p initial="offscreen" whileInView="onscreen" variants={fadeUpEntrance}>MaVie Global thus invites you to be part of this exciting journey, empowering you with the tools and opportunities to shape the future while benefiting from it at the same time. This is the promise of MaVie Global - a potent mix of community, technology, and opportunity.</motion.p>

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
                        <p>Another success came earlier this year when MaVie secured another partnership - <Link href='https://www.lottoday.io/' target='_blank'>LOTTODAY,</Link> the <span>biggest WEB3 Gaming platform in the world.</span> In less than 10 days, they achieved a remarkable feat by selling out 10 million USDT worth of presale allocated revenue-sharing products.</p>
                        <h2 className='text-2xl capitalize'>Roadmap to 1 BILLION in Sales: Big Leaders Joining Worldwide</h2>
                        <p>Although MaVie Global&apos;s initial year was dedicated to building strong fundamentals and establishing powerful partnerships, like those with <Link href='https://ultron.foundation/' target='_blank'>Ultron</Link> and <Link href='https://www.lottoday.io/' target='_blank'>Lottoday,</Link> their sales growth is skyrocketing. <span>The past 12 months have seen a proven track record, with sales exceeding $100 million, which elevated Ultron into the top 10 blockchains</span> by the value generated globally. Now, MaVie Global has even loftier ambitions for its second year.</p>
                    </motion.div>

                    <motion.div initial="offscreen" whileInView="onscreen" variants={fadeEntrance} className='w-full aspect-video relative'>
                        <Image src='/assets/images/about-us/5.png' alt='How mavie works' fill />
                    </motion.div>

                    <motion.p initial="offscreen" whileInView="onscreen" variants={fadeUpEntrance}>&quot;With forecasted growth and a proven strategy, <span>we&apos;re primed to surpass $1 billion in sales, adding over a million members to the MaVie family.</span> Our aim is to become the real unicorn of the industry, achieving the 10x growth that everyone aspires to. We look forward to setting the bar high in the network marketing industry and securing our spot as the leading company in future digital product sales. Exciting times lie ahead!&quot; asserts Michal, CEO of MaVie Global.</motion.p>
                    <motion.p initial="offscreen" whileInView="onscreen" variants={fadeUpEntrance}>As MaVie Global ventures further into 2023, its goal of attaining one million members is within clear view. To discover more about MaVie Global and learn about upcoming developments, kindly contact the person who shared this opportunity with you or click on the button below, to get the chance of becoming OUR TRUSTED PARTNER and business builder.</motion.p>

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
