import CallToAction from '@/components/custom/CallToAction'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'
import { motion } from 'framer-motion'

type ImageCardProps = {
    title: string;
    subTitle: string;
    content1: string;
    content2: string;
    img: string;
    reverse: boolean;
    leftTop: boolean;
    leftBottom: boolean;
    right: boolean;
};

const ImageCard: React.FC<ImageCardProps> = ({ title, subTitle, content1, content2, img, reverse, leftBottom, leftTop, right }) => {
    return (
        <div className={`flex items-center justify-center ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-col w-full min-h-fit md:my-6 lg:my-16`}>
            <motion.div
                transition={{ duration: 0.7 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className='flex w-full h-[300px] xl:h-[400px] max-w-[800px] object-contain relative'>
                <Image src={img} alt={img} fill className='object-scale-down' sizes="(max-width: 768px) 100vw" />
                {leftTop &&
                    <Parallax speed={-2} rotate={[-45, 0]} >
                        <i className='absolute w-[150px] h-[150px] top-6 -left-20 lg:left-2'>
                            <Image src="/assets/svg/arrow_left.svg" alt="arrow" fill className='object-contain' />
                        </i>
                    </Parallax>
                }
                {leftBottom &&
                    <Parallax speed={2} rotate={[35, 0]}>
                        <i className='slow absolute w-[150px] h-[150px] top-16 -rotate-45 -left-24 lg:left-8 lg:top-52'>
                            <Image src="/assets/svg/arrow_left.svg" alt="arrow" fill className='object-contain' />
                        </i>
                    </Parallax>}
                {right &&
                    <Parallax speed={-2} rotate={[25, 0]}>
                        <i className='absolute w-[150px] h-[150px] top-16 left-[18rem] lg:left-[40rem] lg:top-2'>
                            <Image src="/assets/svg/arrow_right.svg" alt="arrow" fill className='object-contain' />
                        </i>
                    </Parallax>
                }
            </motion.div>
            <motion.div
                transition={{ duration: 0.7 }}
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className={`w-[95%] xl:w-2/3 h-full flex flex-col xl:max-w-[800px] lg:pt-6 md:pt-12 mx-auto ${reverse ? 'md:pl-12' : 'lg:pl-12 xl:pl-6'}`}>
                <h4 className='text-md lg:text-4xl font-thin uppercase'>{title}</h4>
                <Parallax translateX={[-8, 0]} translateY={[0, 0]} speed={100}>
                    <div className="flex flex-col">
                        <h3 className='text-4xl lg:text-5xl uppercase font-thin italic lg:mb-2'>{subTitle}</h3>
                        <p className='text-lg py-2 font-thin' dangerouslySetInnerHTML={{ __html: content1 }} />
                        <p className='text-lg pb-12 font-thin' dangerouslySetInnerHTML={{ __html: content2 }} />
                        <div className='hidden lg:block w-fit mx-auto lg:ml-0'>
                            <CallToAction />
                        </div>
                    </div>
                </Parallax>
            </motion.div>
        </div>
    )
}

export default ImageCard
