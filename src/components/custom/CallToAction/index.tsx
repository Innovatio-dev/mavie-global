// Components
import Button from '@/components/shared/Button'
import { useMenu } from '@/context/Menu'
import { useRouter } from 'next/router'

export default function CallToAction() {
    const router = useRouter()
    const { setIsOpen } = useMenu()
    const handleClick = () => {
        if (router.pathname === '/privacy-policy' || router.pathname === '/terms-and-conditions') {
            router.push('/#newsletter')
        }
        const section = document.querySelector('#newsletter')
        section?.scrollIntoView({
            behavior: 'smooth'
        })
        setIsOpen(false)
    }

    return (
        <Button>
            <button
                aria-label="cta"
                onClick={handleClick}
                className='text-xs md:text-base font-light lg:font-medium uppercase py-3.5 lg:py-2 px-16 lg:px-7'
            >
                Secure your seat now
            </button>
        </Button>
    )
}
