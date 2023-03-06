
import Countdown from '@/components/shared/Countdown'
import getEventDate from '@/utils/constants/eventDate'
import { networks } from '@/utils/constants/networks'
import { Controls, Player } from '@lottiefiles/react-lottie-player'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'
import styles from './styles.module.sass'
const counterAnimation = {
    visible: (bg: string) => ({
        width: '500%',
        paddingTop: '500%',
        background: bg,
        transition: {
            duration: 1,
            when: 'beforeChildren',
            staggerChildren: 0.5
        }
    }),
    hidden: (bg: string) => ({
        width: '100%',
        paddingTop: '100%',
        background: bg
    })
}

export default function BigCounter() {
    const dataRef = useRef<HTMLDivElement>(null)
    const [animationSize, setAnimationSize] = useState({ width: 0, height: 0 })

    useEffect(() => {
        const resizeListener = () => {
            if (!dataRef.current) {
                return
            }
            let { width, height } = dataRef.current.getBoundingClientRect()
            height += width / 6
            const aspect = width / height
            const lottieAspect = 16 / 8
            if (aspect > lottieAspect) {
                setAnimationSize({
                    width,
                    height: width / lottieAspect
                })
            } else {
                setAnimationSize({
                    height,
                    width: height * lottieAspect
                })
            }
        }
        window.addEventListener('resize', resizeListener)
        resizeListener()
        return () => window.removeEventListener('resize', resizeListener)
    }, [])
    return <section className={styles.container}>
        <div className={styles.body}>
            <div className={styles.bg}>
                <motion.div className={styles.pinkCircle}
                    variants={counterAnimation}
                    initial='hidden'
                    whileInView='visible'>
                    <div className={styles.lottie}
                        style={animationSize}
                    >
                        <Player autoplay loop src='/assets/json/footer_animation.json' style={{
                            height: '100%', width: '100%'
                        }}>
                            <Controls visible={false}/>
                        </Player>
                    </div>

                </motion.div>
                <div className={styles.imageContainer}>
                    <Image style={{ objectFit: 'contain' }} fill src='/assets/svg/outlined_logo.svg' alt="event date"/>
                </div>
                <motion.div className={styles.darkCircle}
                    transition= {{ duration: 1 }}
                    variants={counterAnimation}
                    initial='hidden'
                    whileInView='visible'
                >
                </motion.div>
            </div>
            <motion.div ref={dataRef} className={styles.data}
                transition={{ duration: 1 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                <h3> All for One</h3>
                <h2 className={styles.counterContainer}>
                    {/* <Countdown targetDate={getEventDate()}/> */}
                    Stay tuned.
                </h2>
                <div className={styles.message}>
                    Follow us on our socials
                </div>

                <div className={styles.networks}>
                    {networks.map(network =>
                        <Link key={network.name} href={network.href} aria-label={network.name} target="_blank">
                            <span style={network.style ? network.style : {}}>{network.icon}</span>
                        </Link>)}
                </div>
            </motion.div>
        </div>
        <motion.div className={styles.footer}
            initial={
                {
                    y: -100,
                    opacity: 0.5
                }
            }
            whileInView={
                {
                    y: 0,
                    opacity: 1
                }
            }
            transition={{ duration: 1 }}
        >
            <div className={styles.logoContainer}>
                <Image src={'/assets/svg/logo.svg'}
                    fill={true}
                    alt="logo" />
            </div>
            <div className={styles.disclaimer}>
                <Link href='https://www.backoffice.mavie.global' target='_blank'>Backoffice</Link>
                <Link href='/terms-and-conditions'>Terms of use </Link>
                <Link href='/privacy-policy'>Privacy policy</Link>
                <Link href='/dubai-faq'>Dubai FAQ</Link>
            </div>
            <div className={styles.copyright}>
                © 2022 MaVie Global. All Rights Reserved.
            </div>
        </motion.div>
    </section>
}
