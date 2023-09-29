import { ABOUT_LOCALES } from '@/utils/constants/about'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { FlagIcon, FlagIconCode } from 'react-flag-kit'
import { IoIosArrowDown } from 'react-icons/io'

export default function AboutLanguageSelector() {
    const { asPath, locale } = useRouter()
    const [isOpen, setIsOpen] = useState(false)

    const optionsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const body = document.querySelector('html')

        if (isOpen) {
            body?.classList.add('overflow-hidden')
        } else {
            body?.classList.remove('overflow-hidden')
        }
    }, [isOpen])

    const handleOpen = useCallback(() => {
        setIsOpen(!isOpen)

        const options = optionsRef.current
        if (options) {
            if (options.style.maxHeight) {
                options.style.maxHeight = ''
                options.style.opacity = '0'
            } else {
                options.style.maxHeight = options.scrollHeight + 'px'
                options.style.opacity = '1'
            }
        }
    }, [isOpen])

    const currentLang = useMemo(() => ABOUT_LOCALES.find(lang => lang.locale === locale), [locale])

    return (
        <>
            {isOpen && <div className='w-screen h-screen bg-black/50 absolute inset-0 z-0' />}
            <div className='relative z-10'>
                {/* Button */}
                <button onClick={handleOpen} className='w-full h-fit flex justify-between items-center bg-[#161718] px-5 py-4'>
                    <div className='w-max flex items-center gap-5'>
                        <FlagIcon
                            code={currentLang?.code as FlagIconCode} size={45}
                            className='group-hover:shadow-lang transition-shadow rounded-sm'
                        />
                        <span>{currentLang?.text}</span>
                    </div>
                    <IoIosArrowDown className={`text-xl transition-all origin-center ${isOpen && 'rotate-180'}`}/>
                </button>

                {/* Options */}
                <div ref={optionsRef} className='w-full h-fit max-h-0 overflow-hidden transition-all duration-200 ease-out absolute top-full left-0'>
                    {
                        ABOUT_LOCALES.map(({ locale, code, text }) => (
                            <Link href={asPath} locale={locale} key={locale} onClick={handleOpen} className={`
                                w-full flex justify-between items-center px-5 py-4
                                ${currentLang?.locale === locale ? 'bg-[#0A0A0A]' : 'bg-brand-black'}
                            `}>
                                <div className='w-max flex items-center gap-5'>
                                    <FlagIcon
                                        code={code as FlagIconCode} size={45}
                                        className='group-hover:shadow-lang transition-shadow rounded-sm'
                                    />
                                    <span>{text}</span>
                                </div>
                                <span>{ currentLang?.locale === locale && 'SELECTED' }</span>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
