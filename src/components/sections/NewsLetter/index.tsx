import Input from '@/components/custom/Input'
import { motion } from 'framer-motion'
import Image from 'next/image'

const NewsLetter = () => {
    const handleInView = () => {
        const button = document.getElementById('cta')
        button?.classList.add('!opacity-0', '!-z-50')
    }
    const handleOutView = () => {
        const button = document.getElementById('cta')
        button?.classList.remove('!opacity-0', '!-z-50')
    }

    return (
        <motion.section
            id="newsletter"
            onViewportEnter={handleInView}
            onViewportLeave={handleOutView}
            className="flex flex-col w-full min-h-screen bg-news bg-center lg:bg-cover bg-no-repeat items-center justify-center text-center -mb-36 lg:-mb-48"
        >
            <div>
                <motion.h3
                    transition={{ duration: 1 }}
                    initial={{ y: -150, opacity: 0, scale: 1.8 }}
                    whileInView={{ y: 0, opacity: 1, scale: 1 }}
                    className="text-transparent bg-clip-text font-medium text-xl lg:text-3xl xl:text-4xl bg-main-gradient max-w-fit mx-auto"
                >
                    All for One
                </motion.h3>
                <motion.h2
                    transition={{ duration: 1 }}
                    initial={{ y: 150, opacity: 0, scale: 1.8 }}
                    whileInView={{ y: 0, opacity: 1, scale: 1 }}
                    className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[10rem] mb-16 lg:mb-6 leading-none w-[80%] lg:w-full mx-auto"
                >
                    90% of seats taken
                </motion.h2>
                <motion.h3
                    transition={{ duration: 1 }}
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="max-w-[320px] font-light lg:max-w-[1080px] text-2xl lg:text-3xl xl:text-4xl mx-auto"
                >
                    There&apos;s a limited amount of seats left for the Dubai Leadership Event.<br /> You can apply for a seat below.
                </motion.h3>
            </div>
            <motion.div
                transition={{ duration: 1 }}
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="my-16 z-20"
            >
                <Input placeholder="Enter Your Email." />
            </motion.div>
            <div className="absolute min-h-screen w-full">
                <motion.div
                    transition={{ duration: 1.5 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.6 }}
                    className="md:block absolute hidden w-[40vw] md:w-[45vw] md:h-[30vh] h-[45vh] 2xl:h-[50vh] right-0 bottom-0"
                >
                    <Image src="/assets/images/diamond_left.png" alt="diamond" fill />
                </motion.div>
                <motion.div
                    transition={{ duration: 1.5 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.6 }}
                    className="md:block absolute hidden w-[40vw] md:w-[45vw] md:h-[30vh] h-[45vh] 2xl:h-[50vh] left-0 bottom-0"
                >
                    <Image src="/assets/images/diamond_right.png" alt="diamond" fill />
                </motion.div>
            </div>
        </motion.section>
    )
}

export default NewsLetter
