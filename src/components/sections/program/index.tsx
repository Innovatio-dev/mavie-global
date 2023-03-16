import InnerContainer from '@/layouts/InnerContainer'
import Item, { IItemProps } from './item'
import styles from './styles.module.sass'
import { motion } from 'framer-motion'
import { slideLeft, zoomOut, zoomIn } from '@/utils/motion_effects'

const entries: IItemProps[] = [{
    id: 1,
    title: 'RESHAPE - THE NEW ERA',
    subtitle: 'A massive project that bridges the gap between WEB2 and WEB3 and introduces the masses to decentralized finance (DeFi).',
    startColor: '#E14696',
    endColor: '#E1469600',
    tags: ['Mavie Academy', 'Flip.me', 'secret partner announcement']
}, {
    id: 2,
    title: 'THE 100M mavie VISION',
    subtitle: "Join MaVie's 100M vision to make a difference in the world and position yourself for future success. Gain valuable expertise in Web 3.0. Stay ahead of the curve and learn about the latest developments in blockchain technology, decentralized applications, and more.",
    startColor: '#46E1FC',
    endColor: '#46E1FC00',
    tags: ['Mavie Academy', 'Flip.me', 'secret partner announcement']
}, {
    id: 3,
    title: 'SETTING THE STANDARD',
    subtitle: 'MaVie sets the standard in Web 3.0 and affiliate marketing, providing innovative solutions for individuals and businesses to succeed in the digital economy.',
    startColor: '#E14696',
    endColor: '#E1469600',
    tags: ['Mavie Academy', 'Flip.me', 'secret partner announcement']
}, {
    id: 4,
    title: 'LEADERSHIP SUPPORT',
    subtitle: "MaVie's program offers practical tools and strategies to enhance leadership skills and drive success.",
    startColor: '#46E1FC',
    endColor: '#46E1FC00',
    tags: ['Mavie Academy', 'Flip.me', 'secret partner announcement']
}, {
    id: 5,
    title: 'EVENTS',
    subtitle: "Elevate your personal and professional growth with MaVie's exclusive events. Connect with like-minded individuals and enjoy unforgettable experiences worldwide.",
    startColor: '#E14696',
    endColor: '#4112A200',
    tags: ['Mavie Academy', 'Flip.me', 'secret partner announcement']
}, {
    id: 6,
    title: 'partnership with ultron',
    subtitle: 'The partnership between Ultron and Mavie is a testament to our successful collaboration. Together, we have been able to foster growing communities and achieve incredible results by working hand in hand. This presents an exciting opportunity for you to join us on this journey.',
    startColor: '#46E1FC',
    endColor: '#1CFFB300',
    tags: ['Mavie Academy', 'Flip.me', 'secret partner announcement']
}, {
    id: 7,
    title: 'education',
    subtitle: 'Providing education and training in areas of WEB 3.0 and our affiliate marketing platform can be incredibly valuable for individuals who want to start an online business or explore opportunities in the emerging decentralised WEB 3.0 economy.',
    startColor: '#E14696',
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
                    {/* Unnecesary, on static data that never changes in the app lifecycle */}
                    {entries.map((item, index) =>
                        <motion.div key={item.id} custom={index} variants={slideLeft} >
                            <Item {...item} />
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </InnerContainer>
    </section>
}
