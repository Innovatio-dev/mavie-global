import { HiOutlineChatBubbleOvalLeft, HiOutlineClipboard, HiOutlineDocumentText, HiOutlineMicrophone } from 'react-icons/hi2'

export const NAVIGATION_LINKS = [
    {
        name: 'details',
        to: '#details',
        icon: <HiOutlineClipboard />
    },
    {
        name: 'program',
        to: '#program',
        icon: <HiOutlineDocumentText />
    },
    {
        name: 'speakers',
        to: '#speakers',
        icon: <HiOutlineMicrophone />
    },
    {
        name: 'why attend?',
        to: '#why-attend',
        icon: <HiOutlineChatBubbleOvalLeft />
    }
]
