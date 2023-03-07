// Common
import Image from 'next/image'
import { useRef, useState } from 'react'
// Components
import Borderedtext from '@/components/custom/BorderedText'
// Framer Motion
import { useMotionValueEvent, useScroll } from 'framer-motion'
// Layout
import InnerContainer from '@/layouts/InnerContainer'
// Styles
import styles from './styles.module.scss'
import IconScroll from '@/components/shared/IconScroll'

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null)
    const { scrollY } = useScroll()
    const [logoAnimation, setLogoAnimation] = useState({
        scale: 1,
        opacity: 1
    })
    const [titleAnimation, setTitleAnimation] = useState({
        scale: 1,
        opacity: 1
    })

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const heroOffset = heroRef.current?.offsetHeight
        if (heroOffset && latest < 200) {
            // Relative offset is a formula to get how much the section has left the viewport, from 0 to 100.
            const relativeOffset = latest * 100 / heroOffset
            // Scale is a formula to compute how much the elements should increase.
            const logoScale = 1 + Math.pow(relativeOffset, 2) * 0.008
            const titleScale = 1 + relativeOffset * 0.008
            setLogoAnimation({
                scale: logoScale,
                opacity: (logoScale > 1.8) ? 0 : 1
            })
            setTitleAnimation({
                scale: window.innerWidth >= 1024 ? titleScale : 1,
                opacity: (titleScale > 1.2) ? 0 : 1
            })
        }
    })

    return (
        <section ref={heroRef} className={styles.container}>
            <div style={{ transform: `scale(${logoAnimation.scale}) translateX(-50%)`, opacity: `${logoAnimation.opacity}` }} className={styles.logo}>
                <Image src='/assets/images/3d-mavie.webp' alt='Dubai' fill priority/>
            </div>
            <div className={styles.glow}>
                <Image src='/assets/images/glow.webp' alt='Dubai' fill priority/>
            </div>
            <Image src='/assets/images/dubaiphoto.png' unoptimized alt='Dubai' width={2560} height={1227.8} priority className={styles.city} sizes="(max-width: 768px) 200vw"/>
            <InnerContainer>
                <div style={{ transform: `scale(${titleAnimation.scale})`, opacity: `${titleAnimation.opacity}` }} className={styles.content}>
                    <p className='uppercase'>
                        {'success runs in the family'}
                    </p>
                    <div className={styles.containerTitle}>
                        <Borderedtext duplicate className='text-5xl md:text-6xl lg:text-[5.5rem] 4xl:text-[7rem] bg-clip-text text-transparent bg-main-gradient'>
                            {'own your future'}
                        </Borderedtext>
                    </div>
                    <p className='uppercase'>
                        {'with mavie'}
                    </p>
                    <IconScroll/>
                    {/* <Image src='/assets/images/mouse.png' alt='Mouse' width={35} height={40} priority className='mt-4'/> */}
                </div>
            </InnerContainer>
        </section>
    )
}
