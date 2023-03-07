// React
import { useEffect, useRef, useState } from 'react'
// Components
import ProfileCard from '@/components/custom/ProfileCard'
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css/effect-cards'
import 'swiper/css'
// Constants
import { SPEAKERSDATA } from '@/utils/constants/speakers'
// Framer Motion
import { motion } from 'framer-motion'
// Animations
import { zoomIn } from '@/utils/motion_effects'

export default function Speakers () {
    const carouselContainer = useRef<HTMLInputElement>(null)
    const [itemsPerPage, setItemsPerPage] = useState(5)

    useEffect(() => {
        const listener = () => {
            if (carouselContainer.current) {
                const rect = carouselContainer.current.getBoundingClientRect()
                let itemsPerPage = rect.width / 224
                if (rect.width < 768) {
                    itemsPerPage = 1.4
                } else if (rect.width > 768) {
                    itemsPerPage = Math.floor(rect.width / 350)
                }
                setItemsPerPage(itemsPerPage)
            }
        }
        window.addEventListener('resize', listener)
        listener()
        return () => {
            window.removeEventListener('resize', listener)
        }
    }, [])

    return <section id='speakers' className='h-auto flex justify-center'>
        <div className='flex flex-col items-center gap-10 py-10 w-full '>
            <div className= 'flex flex-col items-center gap-5 px-5'>
                <motion.h2
                    className='uppercase text-3xl md:text-6xl font-semibold md:font-medium text-center tracking-[0.115em]'
                    variants={zoomIn}
                    initial={'hidden'}
                    whileInView={'visible'}
                >
                    {'mavie team'}
                </motion.h2>
                <motion.div
                    className='w-full flex flex-col items-center text-center gap-2 text-xl font-dm font-light leading-[1.2]'
                    transition={{ duration: 0.6 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <p className='max-w-[55rem] text-center'>{'Meet the exceptional team behind MaVie, committed to creating a dynamic and engaged community that empowers individuals to achieve their dreams and live their best lives.'}</p>
                </motion.div>
            </div>
            <div ref={carouselContainer} className="w-full min-h-[10rem] bg-purple-gradient flex justify-center py-10 shadow-card-container">
                <Swiper
                    slidesPerView={itemsPerPage}
                    initialSlide={2}
                    loop={true}
                    pagination={false}
                    spaceBetween={0}
                    draggable={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    modules={[Autoplay]}
                >
                    {SPEAKERSDATA.map((speaker) => {
                        return <SwiperSlide key={speaker.name} >
                            <ProfileCard
                                image= {speaker.image}
                                name= {speaker.name}
                                subtitle= {speaker.subtitle}
                                logo= {speaker.logo}
                            />
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </div>
    </section>
}
