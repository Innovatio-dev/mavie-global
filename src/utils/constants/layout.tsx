import { HiOutlineChatBubbleOvalLeft, HiOutlineClipboard, HiOutlineDocumentText, HiOutlineMicrophone } from 'react-icons/hi2'

export const NAVIGATION_LINKS = [
    {
        name: 'what is mavie?',
        to: '#what-is-mavie',
        icon: <HiOutlineClipboard />
    },
    {
        name: 'why mavie?',
        to: '#why-mavie',
        icon: <HiOutlineDocumentText />
    },
    {
        name: 'team',
        to: '#team',
        icon: <HiOutlineMicrophone />
    },
    {
        name: 'contact us',
        to: '#contact-us',
        icon: <HiOutlineChatBubbleOvalLeft />
    }
]
