import { useRouter } from 'next/router'
import Dropdown from '../Dropdown/index'
import { useMemo } from 'react'
const locales = [{
    icon: '/assets/images/flags/en.png',
    text: 'English',
    id: 'en'
}, {
    icon: '/assets/images/flags/es.png',
    text: 'Spanish',
    id: 'es'
}, {
    icon: '/assets/images/flags/jp.png',
    text: 'Japanese',
    id: 'jp'
}, {
    icon: '/assets/images/flags/pt.png',
    text: 'Portuguese',
    id: 'pt'
}, {
    icon: '/assets/images/flags/hu.png',
    text: 'Hungarian',
    id: 'hu'
}]
export default function LanguageSelector() {
    const router = useRouter()

    const langIndex = useMemo(() => {
        const index = locales.findIndex((item) => item.id === router.locale)
        return index < 0 ? 0 : index
    }, [router.locale])
    return <Dropdown items={locales} selectedIndex={langIndex}
        onChange={(item) => {
            router.replace(router.pathname, router.asPath, {
                locale: item.id as string
            })
        }}
    />
}
