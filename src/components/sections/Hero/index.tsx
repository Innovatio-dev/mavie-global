// Common
import Image from 'next/image'
import { useRef, useState } from 'react'
// Components
import Borderedtext from '@/components/custom/BorderedText'
import IconScroll from '@/components/shared/IconScroll'
// Framer Motion
import { useMotionValueEvent, useScroll } from 'framer-motion'
// Layout
import InnerContainer from '@/layouts/InnerContainer'
// Styles
import styles from './styles.module.scss'

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
                <Image src='/assets/images/3d-mavie.png' alt='Dubai' fill priority unoptimized/>
            </div>
            <div className={styles.glow}>
                <Image src='/assets/images/glow.webp' alt='Dubai' fill priority/>
            </div>
            <Image
                src='/assets/images/dubaiphoto.png'
                blurDataURL='iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAAqgAwAEAAAAAQAAAAUAAAAAShJCJwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KGV7hBwAAAMNJREFUCB1jYICC/w0NTHD2/v0scDZUnLGBIZStgWH1L5BEhHJ1oFl22UG2798Nf708q3qNReLLnD7jJf8ZGJgZN6ctmsvCwSMlJ/Hv+IK9lxK0pI0fsUvLqDx58+wm50eGu9acT1cevPpoBssrhn8JGqz/mf5//uch8fXXfxnWp4r//nMxKIsxiGlpfTY9f/dv6mMTHQbmTWff1H45/u4393OOf1mXF/23ldT7w6Ng+pdNSJxRWfAlm4wu/5/PB67/AgB6z1EQVczd1gAAAABJRU5ErkJggg=='
                placeholder='blur'
                unoptimized
                alt='Dubai'
                width={2560}
                height={1227.8}
                priority
                className={styles.city}
            />
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
                </div>
            </InnerContainer>
        </section>
    )
}
