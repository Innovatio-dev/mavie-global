import Borderedtext from '@/components/custom/BorderedText'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'

const Networking = () => {
    return (
        <section className='flex flex-col lg:flex-row items-center lg:items-start lg:justify-center w-full h-[970px] md:h-[1000px] lg:h-[580px] lg:py-[100px] 2xl:h-[650px] 3xl:h-[700px]'>
            <Parallax speed={-2}
                translateX={['-300px', '0px']}
                translateY={['0px', '50px']}
                rotate={[0, 30]}>
                <i className='absolute w-[50px] md:w-[100px] xl:w-[150px] h-[50px] md:h-[100px] xl:h-[150px] left-[2rem] top-[11rem] md:left-[10rem] md:top-[5rem] lg:-left-[-15rem] lg:top-[5rem] xl:left-[20rem] xl:top-[0rem] 2xl:left-[15rem] 3xl:left-[5rem] 3xl:top-[5rem] 4xl:left-[-10rem] 4xl:top-[4rem] rotate-[-30deg]'>
                    <Image src="/assets/svg/arrow_left.svg" alt="arrow" fill className='object-contain' />
                </i>
            </Parallax>
            <Borderedtext
                duplicate={false}
                className='text-2xl text-center md:max-w-[680px] lg:max-w-none md:text-4xl lg:text-4xl xl:text-6xl bg-main-gradient text-transparent bg-clip-text font-extrabold font-inter uppercase z-0'>
                networking events & experiences
            </Borderedtext>
            <div
                className='absolute left-0 lg:w-2/3 h-fit w-full max-w-full'>
                <div className='absolute w-[100%] lg:w-[850px] h-[600px] lg:h-[600px] mix-blend-lighten -top-48 md:-top-32 lg:top-[-10rem] xl:-top-32 opacity-60 animate-pulse-slow lg:right-48 xl:-left-32'>
                    <Image src='/assets/images/glow.webp' alt='Dubai' fill className='object-cover lg:object-fill drop-shadow-pink-shadow lg:drop-shadow-none' />
                </div>
                <div className='absolute w-full lg:w-[75%] xl:w-[50%] h-[500px] lg:h-[500px] xl:h-[700px] top-0 xl:-top-32 2xl:w-[65%] 4xl:w-[1200px] 4xl:h-[900px] 4xl:left-0 4xl:top-[-25rem]'>
                    <Image fill src={'/assets/images/faded.png'} alt="city" className='object-cover lg:object-contain' />
                </div>
                <motion.div
                    transition={{ duration: 0.6, delay: 0.3 }}
                    initial={{ x: -150, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className='absolute max-w-full w-full h-[350px] md:w-[800px] md:h-[450px] lg:w-[85%] xl:w-[68%] 2xl:h-[300px] 4xl:w-[1500px] 4xl:h-[800px] top-52 md:top-48 md:-left-16 lg:top-32 lg:-left-32 2xl:top-60 2xl:-left-48 4xl:top-[-6rem]'>
                    <Image fill src={'/assets/images/ship.png'} alt="ship" className='object-contain' />
                </motion.div>
            </div>
            <div className='flex items-center absolute w-full lg:right-0 lg:w-[75%] h-[600px]'>
                <div className='hidden lg:flex w-full lg:h-fit xl:h-[350px] bg-box-gradient justify-center xl:mt-20'>
                    <i className='relative w-[150px] h-[150px] md:left-0 lg:top-32 lg:left-[30rem] xl:-top-16 xl:left-[42rem]'>
                        <Image src="/assets/images/wine.webp" alt="arrow" fill className='object-contain' />
                    </i>
                    <ul className='flex justify-center items-start flex-col lg:text-2xl xl:text-3xl xl:ml-44 list-none'>
                        <motion.li
                            transition={{ duration: 0.6 }}
                            initial={{ x: -150, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className='flex py-1 before:content-diamond'>
                            <p className='pl-6'>Connect with <span className='bg-main-gradient bg-clip-text inline-block text-transparent'>MaVie team</span></p>
                        </motion.li>
                        <motion.li
                            transition={{ duration: 0.6, delay: 0.1 }}
                            initial={{ x: -150, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className='flex py-1 before:content-diamond'>
                            <p className='pl-6'>Be part of <span className='bg-main-gradient bg-clip-text inline-block text-transparent'>Leadership & MaVie workshops</span> </p>
                        </motion.li>
                        <motion.li
                            transition={{ duration: 0.6, delay: 0.2 }}
                            initial={{ x: -150, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className='flex py-1 before:content-diamond'>
                            <p className='pl-6'>Forge meaningful <span className='bg-main-gradient bg-clip-text inline-block text-transparent'>connections and friendships</span></p>
                        </motion.li>
                        <motion.li
                            transition={{ duration: 0.6, delay: 0.3 }}
                            initial={{ x: -150, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className='flex py-1 before:content-diamond'>
                            <p className='pl-6'>Stay ahead with <span className='bg-main-gradient bg-clip-text inline-block text-transparent'>latest news</span> </p>
                        </motion.li>
                        <motion.li
                            transition={{ duration: 0.6, delay: 0.4 }}
                            initial={{ x: -150, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className='flex py-1 before:content-diamond'>
                            <p className='pl-6'>Have fun and <span className='bg-main-gradient bg-clip-text inline-block text-transparent'>create lasting memories</span></p>
                        </motion.li>
                    </ul>
                </div>
                <div className='flex lg:hidden mt-[43.5rem] md:mt-[43rem] w-full h-fit text-2xl pt-32 md:pt-72 pb-12 p-5 md:p-20 bg-purple-bottom'>
                    <ul className='flex justify-center flex-col  marker:content-diamond'>
                        <motion.li
                            transition={{ duration: 0.6 }}
                            initial={{ x: -150, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className='flex py-1 before:content-diamond'>
                            <p className='pl-6'>Connect with <span className='bg-main-gradient bg-clip-text inline-block text-transparent'>MaVie team</span></p>
                        </motion.li>
                        <motion.li
                            transition={{ duration: 0.6, delay: 0.1 }}
                            initial={{ x: -150, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className='flex py-1 before:content-diamond'>
                            <p className='pl-6'>Be part of <span className='bg-main-gradient bg-clip-text inline-block text-transparent'>Leadership & MaVie workshops</span> </p>
                        </motion.li>
                        <motion.li
                            transition={{ duration: 0.6, delay: 0.2 }}
                            initial={{ x: -150, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className='flex py-1 before:content-diamond'>
                            <p className='pl-6'>Forge meaningful <span className='bg-main-gradient bg-clip-text inline-block text-transparent'>connections and friendships</span></p>
                        </motion.li>
                        <motion.li
                            transition={{ duration: 0.6, delay: 0.3 }}
                            initial={{ x: -150, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className='flex py-1 before:content-diamond'>
                            <p className='pl-6'>Stay ahead with <span className='bg-main-gradient bg-clip-text inline-block text-transparent'>latest news</span> </p>
                        </motion.li>
                        <motion.li
                            transition={{ duration: 0.6, delay: 0.4 }}
                            initial={{ x: -150, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className='flex py-1 before:content-diamond'>
                            <p className='pl-6'>Have fun and <span className='bg-main-gradient bg-clip-text inline-block text-transparent'>create lasting memories</span></p>
                        </motion.li>
                    </ul>
                </div>
            </div>
            <Parallax
                speed={-2}
                translateX={['0px', '-120px']}
                translateY={['0px', '80px']}
                rotateY={[-30, 0]}
            >
                <i className='absolute z-50 w-[50px] md:w-[100px] lg:w-[100px] xl:w-[150px] h-[50px] md:h-[100px] lg:h-[100px] xl:h-[150px] left-16 top-[16rem] md:left-16 md:top-[18rem] lg:left-[-35rem] lg:top-[18rem] xl:left-[-65rem] 2xl:left-[-70rem] 2xl:top-[18rem] 3xl:top-[20rem] 3xl:left-[-80rem] 4xl:left-[-110rem]'>
                    <Image src="/assets/svg/arrow_right.svg" alt="arrow" fill className='object-contain' />
                </i>
            </Parallax>
        </section>
    )
}

export default Networking
