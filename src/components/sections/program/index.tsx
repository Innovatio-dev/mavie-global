import InnerContainer from '@/layouts/InnerContainer'
import Item, { IItemProps } from './item'
import styles from './styles.module.sass'
import { motion } from 'framer-motion'
import { slideLeft, zoomOut, zoomIn } from '@/utils/motion_effects'

const entries: IItemProps[] = [{
    title: 'SECRET PROJECT - THE NEW ERA',
    subtitle: 'A secret project that bridges the gap between WEB2 and WEB3 and introduces the masses to decentralized finance (DeFi).',
    startColor: '#E14696',
    endColor: '#E1469600',
    tags: ['Mavie Academy', 'Flip.me', 'secret partner announcement']
}, {
    title: 'MAVIE - THE 100M VISION',
    subtitle: 'Introducing the vision that will position MaVie as one of the most prominent leaders in the WEB3.',
    startColor: '#46E1FC',
    endColor: '#46E1FC00',
    tags: ['Mavie Academy', 'Flip.me', 'secret partner announcement']
}, {
    title: 'MAVIE - REBRANDING UNVEIL',
    subtitle: 'Unveiling a complete rebranding, with new sales materials that reflect our values and vision for the future.',
    startColor: '#E14696',
    endColor: '#E1469600',
    tags: ['Mavie Academy', 'Flip.me', 'secret partner announcement']
}, {
    title: 'MAVIE - LEADERSHIP WORKSHOP',
    subtitle: 'An introduction to the new sales materials and training on how to present MaVie to the global audience.',
    startColor: '#46E1FC',
    endColor: '#46E1FC00',
    tags: ['Mavie Academy', 'Flip.me', 'secret partner announcement']
}, {
    title: 'mavie - recognition',
    subtitle: 'A special moment for the MaVie family, where we honor the top performing members from all around the world.',
    startColor: '#E14696',
    endColor: '#4112A200',
    tags: ['Mavie Academy', 'Flip.me', 'secret partner announcement']
}, {
    title: 'ultron - disrupting finance',
    subtitle: 'Ultron is set to unveil its grand plan for the next phase after months of rapid expansion.',
    startColor: '#1CFFB3',
    endColor: '#1CFFB300',
    tags: ['Mavie Academy', 'Flip.me', 'secret partner announcement']
}, {
    title: 'ULTRON - SURPRISE INFLUENCERS',
    subtitle: 'Ultron will introduce its new partners who will help educate the masses about the future of WEB3.',
    startColor: '#4112A2',
    endColor: '#4112A200',
    tags: ['Mavie Academy', 'Flip.me', 'secret partner announcement']
}]

export default function Program() {
    return <section id='why-mavie' className={styles.container}>
        <InnerContainer>
            <div className={styles.content}>
                <motion.h2
                    variants={zoomIn}
                    initial={'hidden'}
                    whileInView={'visible'}
                    className='uppercase text-4xl md:text-6xl font-medium text-center tracking-[0.115em] max-w-[1200px]'>
                    {'Unleash your full potential with MaVie'}
                </motion.h2>
                <h3 className='text-center mt-4 mb-8 text-lg md:text-2xl font-light tracking-widest max-w-[1400px]'>
                    {'MaVie empowers you to unlock your true potential and succeed by providing expertly curated resources tailored to your personal and professional growth'}
                </h3>
                <motion.div className={styles.list} variants={zoomOut} initial={'hidden'} whileInView={'visible'}>
                    {entries.map((item, index) =>
                        <motion.div key={index} custom={index} variants={slideLeft} >
                            <Item {...item} />
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </InnerContainer>
    </section>
}
