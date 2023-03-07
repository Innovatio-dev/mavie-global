import HoverBox from '@/components/custom/HoverBox'
import TextContainer from '@/layouts/TextContainer'
import { slideUp } from '@/utils/motion_effects'
import { motion } from 'framer-motion'

const entries = [
    {
        title: 'Sales',
        icon: 'icon3',
        content: '',
        startColor: 'rgba(70, 225, 252, 0)',
        endColor: '#29808F',
    },
    {
        title: 'Help & Support',
        icon: 'icon1',
        content: '',
        startColor: '',
        endColor: '',
    }, {
        title: 'Media & Events',
        icon: 'icon2',
        content: '',
        startColor: '',
        endColor: '',
    }
]

const ContactUs = () => {
    return (
        <TextContainer className="flex flex-col py-[100px]">
            <div className="flex flex-col text-center mx-auto mb-[40px] max-w-[700px]">
                <h2 className="text-7xl uppercase">Contact Us</h2>
                <p className="font-thin">If you have any questions or concerns, please don&apos;t hesitate to contact us.</p>
                <p className="font-thin">We&apos;re always happy to help in any way we can.</p>
            </div>
            <div className="flex flex-col items-center justify-start w-full h-[350px] bg-purple-gradient">
                <p className="text-transparent bg-clip-text bg-main-gradient text-2xl py-6">I&apos;m interested in...</p>
                <div className='flex flex-col lg:flex-row'>
                    {entries.map((item, index) =>
                        <motion.div key={index} custom={index} variants={slideUp} >
                            <HoverBox {...item} />
                        </motion.div>
                    )}
                </div>
            </div>
        </TextContainer>
    )
}

export default ContactUs
