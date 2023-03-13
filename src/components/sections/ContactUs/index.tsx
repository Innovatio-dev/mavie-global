import ContactForm from '@/components/custom/ContactForm'
import HoverBox from '@/components/custom/HoverBox'
import Image from 'next/image'
import { useState } from 'react'
import { Parallax } from 'react-scroll-parallax'

const item = [
    {
        title: 'Help & Support',
        icon: 'icon1',
        content: 'Need help?</br>Contact our support team',
        startColor: '#29808F',
        endColor: '#4112A200'
    }, {
        title: 'Media & Events',
        icon: 'icon2',
        content: 'Questions about organising or </br> attending a MaVie event?',
        startColor: '#E14696',
        endColor: '#4112A200'
    }
]

const ContactUs = () => {
    const [mavieId, setMavieId] = useState<boolean>(false)
    const [listId, setListId] = useState<number>(68)

    const toggleHelp = () => {
        setMavieId(true)
        setListId(68)
    }

    const toggleMedia = () => {
        setMavieId(false)
        setListId(69)
    }

    return (
        <section className='flex flex-col' id='contact-us'>
            <div className='flex flex-col text-center mx-auto py-[100px] w-full h-fit bg-black'>
                <h2 className='text-6xl lg:text-7xl uppercase max-w-[700px] lg:mx-auto mx-4 tracking-[0.6rem] font-semibold'>Contact Us</h2>
                <p className='font-thin max-w-[700px] lg:mx-auto mx-4'>If you have any questions or concerns, please don&apos;t hesitate to contact us.</p>
                <p className='font-thin max-w-[700px] lg:mx-auto mx-4'>We&apos;re always happy to help in any way we can.</p>
            </div>
            <div className='flex flex-col items-center justify-start w-full h-[350px] bg-purple-gradient'>
                <p className='text-transparent bg-clip-text bg-main-gradient text-2xl py-6'>I&apos;m interested in...</p>
                <div className='flex flex-row'>
                    <HoverBox
                        {...item[0]}
                        onClick={toggleHelp}
                        active={mavieId} />
                    <HoverBox
                        {...item[1]}
                        onClick={toggleMedia}
                        active={!mavieId}/>
                </div>
            </div>
            <div className='flex w-full min-h-[800px]'>
                <div className="w-full relative top-0">
                    <div className='absolute w-[200px] h-[100%] lg:w-1/6 -z-10'>
                        <Image src="/assets/images/texture_left_lines.webp" fill alt="image" className="object-fit" />
                    </div>
                    <Parallax speed={5} rotateY={[0, -30]} rotateZ={[15, 0]}>
                        <i className='absolute w-[75px] lg:w-[150px] h-[75px] lg:h-[150px] top-0 lg:-top-48 right-0 lg:right-20 -rotate-30'>
                            <Image src="/assets/svg/arrow_right.svg" alt="arrow" fill className='object-contain' />
                        </i>
                    </Parallax>
                    {mavieId
                        ? <ContactForm mavieId={mavieId} listId={listId}/>
                        : <ContactForm mavieId={mavieId} listId={listId}/>
                    }
                    <Parallax speed={6} rotateY={[0, 45]} rotateZ={[15, 0]}>
                        <i className='absolute w-[75px] lg:w-[150px] h-[75px] lg:h-[150px] left-0 lg:left-20 -top-32 lg:-top-48 -rotate-15'>
                            <Image src="/assets/svg/arrow_left.svg" alt="arrow" fill className='object-contain' />
                        </i>
                    </Parallax>
                    <div className='absolute w-[200px] h-[100%] lg:w-1/6 -z-10 right-0 -top-16'>
                        <Image src="/assets/images/texture_right_lines.webp" fill alt="image" className="object-fit" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs
