import { useEffect, useRef, useState } from 'react'
import TestimonialCard from '@/components/custom/TestimonialCard'
import { TestimonialsData } from './data'
// Swipper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import { Autoplay } from 'swiper'

const Testimonials = () => {
    const [itemsPerPage, setItemsPerPage] = useState<number>(3)
    const carouselContainer = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const listener = () => {
            if (carouselContainer.current) {
                const rect = carouselContainer.current.getBoundingClientRect()
                let itemsPerPage = rect.width / 500
                if (rect.width < 768) {
                    itemsPerPage = 1
                } else if (rect.width > 768) {
                    itemsPerPage = rect.width / 500
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
    return (
        <section ref={carouselContainer} className='flex bg-purple-gradient shadow-card-container mx-auto py-[100px]'>
            <div className='flex w-full mx-auto overflow-y-visible'>
                <Swiper
                    centeredSlides={true}
                    loop={true}
                    draggable={true}
                    initialSlide={2}
                    spaceBetween={100}
                    slidesPerView={itemsPerPage}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    modules={[Autoplay]}>
                    {TestimonialsData.map((item) =>
                        <SwiperSlide key={item.phrase}>
                            <TestimonialCard
                                phrase={item.phrase}
                                name={item.name}
                                image={item.image}
                            />
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials
