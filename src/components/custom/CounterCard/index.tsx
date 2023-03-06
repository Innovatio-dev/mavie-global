// React
import { useEffect, useRef, useState } from 'react'
// Framer Motion
import { useInView } from 'framer-motion'

const CounterCard = ({
    amount,
    label,
    id
}: {
    amount: number;
    label: string;
    id: number;
}) => {
    const numberWithCommas = (x: number) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') // Parsing function to add commas every 3 digits.
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
            className='relative md:w-[calc(25%-0.5rem)]  lg:w-[calc(25%-3rem)] w-[calc(50%-0.5rem)] md:pl-[3px] md:!pr-0 bg-vertical-gradient hover:backdrop-brightness-200 rounded-tr-lg md:rounded-tl-none rounded-tl-lg rounded-br-lg md:rounded-bl-none rounded-bl-lg hover:translate-y-[-0.25rem] transition-all duration-300'>
            <div className= 'flex flex-col gap-4 justify-start text-center px-5 py-4 w-full bg-purple-gradient md:rounded-tr-md md:rounded-br-md hover:backdrop-brightness-200 relative transition-all duration-300'>
                <p className='md:text-4xl lg:text-7xl text-3xl font-semibold'>
                    {numberWithCommas(count)}{'+'}
                </p>
                <p className='uppercase'>
                    {label}
                </p>
            </div>
        </div>
    </>
}
export default CounterCard
