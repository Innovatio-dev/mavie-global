import ContactForm from '@/components/custom/ContactForm'
import HoverBox from '@/components/custom/HoverBox'
import { slideUp } from '@/utils/motion_effects'
import { motion } from 'framer-motion'

const entries = [
    {
        title: 'Help & Support',
        icon: 'icon1',
        content: '',
        startColor: '',
        endColor: ''
    }, {
        title: 'Media & Events',
        icon: 'icon2',
        content: '',
        startColor: '',
        endColor: ''
    }
]

const ContactUs = () => {
    return (
        <section className='flex flex-col'>
            <div className='flex flex-col text-center mx-auto py-[100px] w-full h-fit bg-black'>
                <h2 className='text-7xl uppercase max-w-[700px] mx-auto'>Contact Us</h2>
                <p className='font-thin max-w-[700px] mx-auto'>If you have any questions or concerns, please don&apos;t hesitate to contact us.</p>
                <p className='font-thin max-w-[700px] mx-auto'>We&apos;re always happy to help in any way we can.</p>
            </div>
            <div className='flex flex-col items-center justify-start w-full h-[350px] bg-purple-gradient'>
                <p className='text-transparent bg-clip-text bg-main-gradient text-2xl py-6'>I&apos;m interested in...</p>
                <div className='flex flex-col lg:flex-row'>
                    {entries.map((item, index) =>
                        <motion.div key={index} custom={index} variants={slideUp} >
                            <HoverBox {...item} />
                        </motion.div>
                    )}
                </div>
            </div>
            <div className='flex w-full h-[800px]'>
                <ContactForm/>
            </div>
        </section>
    )
}

export default ContactUs
