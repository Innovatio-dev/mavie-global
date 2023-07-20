// import { AiOutlineTeam } from 'react-icons/ai'
import Marker from '@/components/shared/Marker'
// import { HiOutlineClipboard, HiOutlineDocumentText } from 'react-icons/hi2'

export const NAVIGATION_LINKS = [
    {
        name: 'what is mavie?',
        to: '#what-is-mavie',
        icon: <Marker />
    },
    {
        name: 'About us',
        to: '/about-us',
        icon: <Marker />,
        isLink: true
    },
    {
        name: 'why mavie?',
        to: '#why-mavie',
        icon: <Marker />
    },
    {
        name: 'events',
        to: '#newsletter',
        icon: <Marker />
    }
    // {
    //     name: 'team',
    //     to: '#team',
    //     icon: <AiOutlineTeam />
    // },
    // {
    //     name: 'contact us',
    //     to: '#contact-us',
    //     icon: <HiOutlineChatBubbleOvalLeft />
    // }
]
