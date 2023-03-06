import { FaFacebookF, FaYoutube, FaTelegramPlane } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
const networks = [{
    name: 'telegram',
    icon: <FaTelegramPlane/>,
    href: 'https://t.me/mavie_news',
    style: {
        transform: 'translateX(-1px)'
    }
},
{
    name: 'youtube',
    icon: <FaYoutube/>,
    href: 'https://www.youtube.com/channel/UCZ-PSGJ1VCjSYTvZabCmjQQ'
},
{
    name: 'instagram',
    icon: <AiFillInstagram/>,
    href: 'https://www.instagram.com/mavie.global/'
},
{
    name: 'facebook',
    icon: <FaFacebookF/>,
    href: 'https://www.facebook.com/mavie.global/'
}
]

export {
    networks
}
