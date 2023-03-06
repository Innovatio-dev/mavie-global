// Common
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// Framer motion
import { motion as m, AnimatePresence } from 'framer-motion'
// Icons
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi2'
// Utils
import { NAVIGATION_LINKS } from '@/utils/constants/layout'
// Styles
import styles from './styles.module.scss'
import { useMenu } from '@/context/Menu'

const Menu = ({ isOpen, onClick }: { isOpen: boolean, onClick: (to: string) => void }) => (
    <AnimatePresence>
        { isOpen && (
            <m.div
                key='menu'
                initial={{ opacity: 0, translateY: -20 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: -20 }}
                transition={{ type: 'just' }}
                className={styles.containerOptions}
            >
                <Image src='/assets/images/texture_left_lines.webp' width={220} height={200} alt='arrow' className='absolute -top-32 left-0 opacity-70 z-0' />
                <Image src='/assets/svg/arrow_right_lines.svg' width={45} height={45} alt='arrow' className='absolute top-10 right-10' />
                <Image src='/assets/svg/arrow_right_lines.svg' width={45} height={45} alt='arrow' className='absolute top-14 right-20' />
                <Image src='/assets/svg/arrow_right_lines.svg' width={60} height={60} alt='arrow' className='absolute bottom-40 right-16 rotate-[50deg]' />
                <ul className='relative z-10'>
                    {
                        NAVIGATION_LINKS.map(({ name, to, icon }) => (
                            <li key={name}>
                                <button
                                    aria-label="section"
                                    onClick={() => onClick(to)}
                                    className={styles.link}
                                ><span>{ icon }</span> { name }</button>
                            </li>
                        ))
                    }
                    <li>
                        <Link href='/dubai-faq' className={styles.link}><span><HiOutlineQuestionMarkCircle /></span>Dubai FAQ</Link>
                    </li>
                </ul>
            </m.div>
        )}
    </AnimatePresence>
)

export default function MobileMenu({ onClick }: { onClick: (to: string) => void }) {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const { isOpen, setIsOpen } = useMenu()

    useEffect(() => {
        const body = document.querySelector('body')
        if (isOpen) {
            body?.addEventListener('touchmove', disableTouchScroll, { passive: false })
        } else {
            body?.removeEventListener('touchmove', disableTouchScroll)
        }

        return () => {
            body?.removeEventListener('touchmove', disableTouchScroll)
        }
    }, [isOpen])

    const disableTouchScroll = (e: TouchEvent) => {
        e.preventDefault()
        e.stopPropagation()
        return false
    }

    const handleClickOpen = () => {
        setIsOpen(!isOpen)
    }
    const handleClickOption = (to: string) => {
        setIsOpen(false)
        onClick(to)
    }

    return (
        <div className={styles.container}>
            <button ref={buttonRef} onClick={handleClickOpen} className={styles.button}>
                <div className={`${isOpen && 'rotate-45'} ${styles.menuLines}`} />
                <div className={`${isOpen && 'opacity-0'} ${styles.menuLines}`} />
                <div className={`${isOpen && '-rotate-45'} ${styles.menuLines}`} />
            </button>
            <Menu isOpen={isOpen} onClick={handleClickOption} />
        </div>
    )
}
