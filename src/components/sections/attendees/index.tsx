
import { useEffect, useState, useCallback, MouseEvent, useRef } from 'react'
import Card, { Post } from './Card'
import styles from './styles.module.sass'
import { motion } from 'framer-motion'
import { slideLeft, nothing, zoomIn } from '@/utils/motion_effects'

import Link from 'next/link'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'

const cyanBalls = [
    {
        position: [-100, 300],
        size: 200,
        speed: 20
    },
    {
        position: [0, 640],
        size: 90,
        speed: 14
    }, {
        position: [100, 550],
        size: 70,
        speed: 10
    }
]
const pinkBalls = [
    {
        position: [90, 200],
        size: 80,
        speed: -30
    },
    {
        position: [-100, 100],
        size: 250,
        speed: -40
    },
    {
        position: [100, 0],
        size: 100,
        speed: -25
    },
    {
        position: [120, 100],
        size: 120,
        speed: -35
    },
    {
        position: [200, 600],
        size: 100,
        speed: -20
    }
]
const posts: Post[] = [{
    author: 'CHRISTINE V.',
    from: 'MaVie member',
    message: 'Thanks to the help of Mavie my life has totally changed and I want to make sure others don\'t miss out on the opportunity.'
}, {
    author: 'DAILA D.',
    from: 'MaVie member',
    message: 'Thank you Mavie for this unique opportunity to start getting additional income.'
}, {
    author: 'jOSHUA C.',
    from: 'MaVie member',
    message: 'Ultron and Mavie have enabled myself and many others to not only get back on our feet but fly.'
}, {
    author: 'omar g.',
    from: 'MaVie member',
    message: 'Thanks to Mavie and Ultron, I’m excited to be part of this amazing project that’s completely outside the box.'
}, {
    author: 'karl k.',
    from: 'MaVie member',
    message: 'Working with Mavie has been a game-changer for me. It\'s allowed me to grow my business and reach a wider audience.'
}, {
    author: 'kathleen o. s.',
    from: 'MaVie member',
    message: 'After losing everything I had in the past, Ultron and Mavie gave me faith and hope for the future!'
}, {
    author: 'marco p.',
    from: 'MaVie member',
    message: 'The realisation was crystal clear, Ultron has a vision and Mavie is allowing us to partake in their journey! '
}, {
    author: 'misha s.',
    from: 'MaVie member',
    message: `I’m so grateful to Mavie for this once-in-a-lifetime opportunity for me and my family.
    `
}, {
    author: 'neisha m.',
    from: 'MaVie member',
    message: `I truly believe this is a right place, right time moment and Mavie dropped a gem in our hands!
    `
}, {
    author: 'juan g.',
    from: 'MaVie member',
    message: 'Mavie\'s affiliate program is a win-win situation - I get to earn money while promoting products I believe in and that benefit others.'
}, {
    author: 'minjun x.',
    from: 'MaVie member',
    message: 'A ground-breaking project with momentum showing no sign of slowing down, even after launching in a bear market!'
}, {
    author: 'ahmad d.',
    from: 'MaVie member',
    message: 'I appreciate the transparency and integrity of Mavie\'s affiliate program. They value their affiliates and always treat us fairly.'
}]
export default function AttendeesSection() {
    const [entries] = useState<Post[]>(posts)
    const [showAll, setShowAll] = useState(false)
    const [currentWidth, setCurrentWidth] = useState<number>(0)
    const contentRef = useRef<HTMLDivElement>(null)

    const handleViewMore = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        setShowAll(!showAll)
        contentRef.current?.scrollIntoView()
    }, [showAll])

    return <section id='why-attend' className={styles.container}>
        <div className={styles.scene}>
            <div className={styles.pinkGradient}>

            </div>

            {pinkBalls.map((ball, index) =>
                <Parallax key={index} speed={ball.speed}>
                    <div
                        style={{
                            position: 'absolute',
                            right: `${ball.position[0]}px`,
                            top: `${ball.position[1]}px`,
                            width: `${ball.size}px`,
                            height: `${ball.size}px`
                        }}>
                        <Image src={'/assets/svg/ballpink.svg'} alt={`ballpink${index}`} fill />
                    </div>
                </Parallax>
            )}
            {cyanBalls.map((ball, index) =>
                <Parallax key={index} speed={ball.speed}>
                    <div
                        style={{
                            position: 'absolute',
                            left: `${ball.position[0]}px`,
                            top: `${ball.position[1]}px`,
                            width: `${ball.size}px`,
                            height: `${ball.size}px`
                        }}>
                        <Image src={'/assets/svg/ballcyan.svg'} alt={`ballcyan${index}`} fill />
                    </div>
                </Parallax>
            )}
        </div>
        <div className={styles.content} ref={contentRef}>
            <motion.h2
                variants={zoomIn}
                viewport={{ once: true }}
                initial={'hidden'}
                whileInView={'visible'}
                className='uppercase text-4xl md:text-6xl max-w-4xl font-[600] tracking-[0.115em]' >{'WHAT does our users SAY ABOUT'} <span className={styles.coloredText}>mavie</span></motion.h2>
            {currentWidth < 640 && <motion.div
                variants={nothing}
                initial={'hidden'}
                whileInView={'visible'}
                className={styles.grid}>
                {entries.slice(0, showAll ? -1 : 3).map((item, index) =>
                    <motion.div key={index}>
                        <Card {...item} />
                    </motion.div>)}
            </motion.div>}
            {currentWidth < 640 && <Link href={'#'} onClick={handleViewMore}>
                {showAll ? 'Hide' : 'View More'}
            </Link>}
            {currentWidth >= 640 && <motion.div
                variants={nothing}
                initial={'hidden'}
                whileInView={'visible'}
                viewport={{ once: true }}
                className={styles.grid}>
                {entries.map((item, index) => <motion.div
                    key={index}
                    custom={index}
                    variants={slideLeft}>
                    <Card {...item} /></motion.div>)}
            </motion.div>}
        </div>
    </section>
}
