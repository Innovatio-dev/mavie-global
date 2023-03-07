// Components
import Button from '@/components/shared/Button'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <Button>
            <Link
                href='https://www.backoffice.mavie.global'
                aria-label="cta"
                className='inline-block text-xs md:text-base font-light lg:font-medium uppercase py-3.5 lg:py-2 px-16 lg:px-7'
            >
                SIGN IN / SIGN UP
            </Link>
        </Button>
    )
}
