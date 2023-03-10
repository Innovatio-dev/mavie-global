// React
import { useEffect, useRef, useState } from 'react'
// Framer Motion
import { useInView } from 'framer-motion'

const CounterCard = ({
    amount,
    label,
    id,
    sufix
}: {
    amount: number;
    label: string;
    id: number;
    sufix?: string;
}) => {
    const numberWithCommas = (x: number) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') // Parsing function to add commas (dot) every 3 digits.
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        if (isInView) {
            const digits = (Math.log10((amount ^ (amount >> 31)) - (amount >> 31)) | 0) + 1
            const intervalId = setInterval(() => {
                const min = Math.pow(10, digits - 1)
                const max = Math.pow(10, digits) - 1
                const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
                setCount(randomNumber)
            }, 50)

            setTimeout(() => {
                clearInterval(intervalId)
                setCount(amount)
            }, 1500)

            return () => {
                clearInterval(intervalId)
            }
        }
    }, [amount, isInView])

    return <>
        <div ref={ref} style={id % 2 !== 0 ? { paddingLeft: '3px' } : { paddingRight: '3px' }}
            className='relative 2xl:w-[calc(25%-3rem)] xl:w-[calc(25%-2.5rem)] lg:w-[calc(25%-1rem)] w-[calc(50%-0.5rem)] md:pl-[3px] md:!pr-0 bg-vertical-gradient hover:backdrop-brightness-200 rounded-tr-lg md:rounded-tl-none rounded-tl-lg rounded-br-lg md:rounded-bl-none rounded-bl-lg hover:translate-y-[-0.25rem] transition-all duration-300'>
            <div className= 'flex flex-col gap-4 justify-start text-center md:px-5 py-4 w-full bg-purple-gradient md:rounded-tr-md md:rounded-br-md hover:backdrop-brightness-200 relative transition-all duration-300'>
                <p className='3xl:text-7xl 2xl:text-6xl xl:text-5xl lg:text-4xl text-3xl font-semibold font-eesti'>
                    {numberWithCommas(count)}{sufix}
                </p>
                <p className='uppercase min-w-fit text-sm md:text-base'>
                    {label}
                </p>
            </div>
        </div>
    </>
}
export default CounterCard
