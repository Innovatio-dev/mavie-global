import ImageCard from '@/components/custom/ImageCard'
import Image from 'next/image'
import { motion } from 'framer-motion'

const WelcomeDubai = () => {
    return (
        <section id='details' className="w-full min-h-screen pt-[100px]">
            <motion.h2
                transition={{ duration: 0.7 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-5xl lg:text-7xl xl:text-[7rem] uppercase font-light w-[90%] lg:w-[75%] mx-auto text-center tracking-[0.115em]">
                Welcome to
            </motion.h2>
            <motion.h2
                transition={{ duration: 0.7 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-5xl lg:text-7xl xl:text-[7rem] uppercase font-light w-[90%] lg:w-[75%] mx-auto text-center tracking-[0.115em]">
                Mavie<span className="font-semibold"> Dubai Event</span>
            </motion.h2>
            <div className="relative top-0">
                <div className='absolute w-3/4 h-[2000px] lg:w-1/3 3xl:w-1/6 -z-10 top-64 lg:-top-64'>
                    <Image src="/assets/images/texture_left_lines.webp" fill alt="image" className="object-fit" />
                </div>
                <div className='absolute w-3/4 h-[2000px] lg:w-1/3 3xl:w-1/6 -z-10 right-0 -top-72'>
                    <Image src="/assets/images/texture_right_lines.webp" fill alt="image" className="object-fit" />
                </div>
            </div>
            <div className="flex flex-col w-[90%] mx-auto py-6 lg:py-16 xl:py-24">
                <ImageCard
                    reverse={false}
                    title="Mavie Vision"
                    subTitle="Road to 100M"
                    content1="Built on strong fundamentals and guided by a clear long-term strategy, <strong>MaVie’s grand vision</strong> will position the company as one of the most prominent leaders in the WEB3."
                    content2=""
                    img="/assets/images/welcome1.png"
                    leftBottom={false}
                    leftTop
                    right={false}
                />
                <ImageCard
                    reverse
                    title="Ultron Vision"
                    subTitle="Disrupting Finance"
                    content1="Empowered by a <strong>massive community</strong>, Ultron stands ready to conquer the world."
                    content2="Ultron Foundation, one of the planet's fastest-growing layer-1 networks, is poised to unveil its plan for the next phase after months of rapid expansion."
                    img="/assets/images/welcome2.png"
                    leftBottom={false}
                    leftTop={false}
                    right
                />
                <ImageCard
                    reverse={false}
                    title="Mavie Rebranding"
                    subTitle="The next chapter"
                    content1="We're thrilled to unveil our new rebranding, reflecting our values and vision for the future, enabling us to connect better with our users and positively impact their lives."
                    content2="We look forward to the <strong>next chapter</strong> of our journey, where we will continue to stand together, work towards our goals, and support each other in all our endeavours."
                    img="/assets/images/welcome3.png"
                    leftBottom
                    leftTop={false}
                    right={false}
                />
            </div>
        </section>
    )
}

export default WelcomeDubai
