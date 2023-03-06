import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SplashScreen from '@/components/shared/ScreenSplash'

export default function Loader() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
    return (
        <AnimatePresence>
            {
                loading &&
                <motion.div key="splash"
                    style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'fixed', zIndex: 9999, backgroundColor: 'black' }}
                    initial={{ opacity: 1 }} exit={{ opacity: 0 }}><SplashScreen/></motion.div>
            }
        </AnimatePresence>
    )
}
