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
            className="flex flex-col w-full min-h-screen bg-news bg-center lg:bg-cover bg-no-repeat items-center justify-center text-center"
        >
            <div>
                <motion.h2
                    transition={{ duration: 1 }}
                    initial={{ y: 150, opacity: 0, scale: 1.8 }}
                    whileInView={{ y: 0, opacity: 1, scale: 1 }}
                    className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[10rem] mb-16 lg:mb-6 leading-none w-[80%] lg:w-full mx-auto"
                >
                    There is more..
                </motion.h2>
                <motion.h3
                    transition={{ duration: 1 }}
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="max-w-[320px] font-light lg:max-w-[1080px] text-2xl lg:text-3xl xl:text-4xl mx-auto"
                >
                    Reserve your seat for our next MaVie event in 2023
                </motion.h3>
                <motion.h3
                    transition={{ duration: 1 }}
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="max-w-[320px] font-light lg:max-w-[1080px] text-2xl lg:text-3xl xl:text-4xl mx-auto"
                >
                    Subscribe and stay ahead of the curve
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
                    whileInView={{ opacity: 0.75 }}
                    className="md:block absolute hidden w-[42vw] h-[60vh] right-0 top-[30%]"
                >
                    <Image src="/assets/images/diamond_right.png" alt="diamond" fill />
                </motion.div>
                <motion.div
                    transition={{ duration: 1.5 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.75 }}
                    className="md:block absolute hidden w-[42vw] h-[60vh] left-0 top-[30%]"
                >
                    <Image src="/assets/images/diamond_left.png" alt="diamond" fill />
                </motion.div>
            </div>
        </motion.section>
    )
}

export default NewsLetter
