import ContactForm from '@/components/custom/ContactForm'
import HoverBox from '@/components/custom/HoverBox'
import { useState } from 'react'

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
        console.log(mavieId)
        console.log(listId)
    }

    const toggleMedia = () => {
        setMavieId(false)
        setListId(69)
        console.log(mavieId)
        console.log(listId)
    }
    return (
        <section className='flex flex-col'>
            <div className='flex flex-col text-center mx-auto py-[100px] w-full h-fit bg-black'>
                <h2 className='text-7xl uppercase max-w-[700px] mx-auto'>Contact Us</h2>
                <p className='font-thin max-w-[700px] mx-auto'>If you have any questions or concerns, please don&apos;t hesitate to contact us.</p>
                <p className='font-thin max-w-[700px] mx-auto'>We&apos;re always happy to help in any way we can.</p>
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
            <div className='flex w-full h-[800px]'>
                {mavieId
                    ? <ContactForm mavieId={mavieId} listId={listId}/>
                    : <ContactForm mavieId={mavieId} listId={listId}/>
                }
            </div>
        </section>
    )
}

export default ContactUs
