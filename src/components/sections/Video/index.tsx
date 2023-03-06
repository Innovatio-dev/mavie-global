// React
import { useState } from 'react'
// Components
import CounterCard from '@/components/custom/CounterCard'
import StrangeButton from '@/components/shared/StrangeButton'
// Icons
import { BiPlayCircle } from 'react-icons/bi'
// Styles
// import styles from './styles.module.scss'
// Constants
import { CARDS } from '@/utils/constants/amounts'
// Framer Motion
import { motion } from 'framer-motion'

export default function Video () {
    const [videOpened, setVideoOpened] = useState(false)

    const handleVideoOpen = () => {
        setVideoOpened(true)
    }

    return <section className='max-h-screen h-auto flex justify-center items-center relative z-30'>
        <div className= 'flex flex-col h-full w-full max-w-[2000px] px-5 md:px-20 py-10 gap-12'>
            <motion.div
                className='w-auto bg-vertical-gradient pl-[3px] rounded-tr-md rounded-br-md'
                transition={{ duration: 0.8 }}
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
            >
                <div className='h-48 md:h-[20rem] lg:h-[40rem] rounded-tr-md rounded-br-md overflow-hidden bg-[url("/assets/images/Image_video.png")] bg-no-repeat bg-cover flex items-center justify-center relative'>
                    {/* <div className={styles.overlay}/>
                    <video
                        autoPlay
                        preload={'auto'}
                        muted
                        loop
                        playsInline
                        className={styles.video}
                    >
                        <source src="/assets/videos/Background-video.webm" type="video/webm" />
                        <source src="/assets/videos/Background-video.mp4" type="video/mp4" />
                    </video> */}
                    {videOpened
                        ? <EmbededVideo/>
                        : <StrangeButton onClick={handleVideoOpen}>{'Play video'} <BiPlayCircle className='text-5xl'/></StrangeButton>
                    }

                </div>
            </motion.div>
            <div className= 'flex justify-between flex-wrap md:flex-nowrap gap-3 md:gap-0 md:flex-row md:overflow-visible overflow-hidden md:rounded-none rounded-md'>
                {CARDS.map((card, i) => {
                    return <CounterCard key={card.label} id={i} amount={card.amount} label={card.label}/>
                })}
            </div>
        </div>
    </section>
}

const EmbededVideo = () => {
    return <motion.div
        className = 'h-full w-full relative'
        transition={{ duration: 0.8 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
    >
        <iframe
            className = 'h-full w-full ease-in-out transition-all '
            src="https://www.youtube.com/embed/Ul9G5hkr7tM"
            title="YouTube video player"
            allow="accelerometer;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture;
            autoplay;
            web-share"
            allowFullScreen
        ></iframe>
    </motion.div>
}
