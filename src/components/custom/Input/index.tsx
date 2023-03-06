import axios from 'axios'
import Image from 'next/image'
import { useState } from 'react'
import { HiArrowLongRight } from 'react-icons/hi2'

const Input = ({
    placeholder
}: { placeholder: string; }) => {
    const [error, setError] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const formData = Object.fromEntries(form)
        try {
            setLoading(true)
            await axios.post('/api/sendinblue', formData)
            e.currentTarget.reset()
        } catch (e: unknown) {
            setError(true)
            setSuccess(true)
            setLoading(false)
        } finally {
            setError(false)
            setSuccess(true)
            setLoading(false)
        }
    }
    return (
        <div className="relative w-fit">
            {loading
                ? <div>
                    <div className="lds-ripple"><div></div><div></div></div>
                </div>
                : success
                    ? <div className='flex bg-black w-72 border border-white text-xs rounded-full relative justify-between'>
                        <div className='flex flex-col mx-auto justify-center items-center py-4 px-4'>
                            {error
                                ? <p className='text-sm font-semibold'>An error has ocurred</p>
                                : <p className='text-sm font-semibold'>Thanks for your submission.</p>}
                            {error
                                ? <p>Please, try again</p>
                                : <p>We will send you an email shortly.</p>}
                        </div>
                        <div className='flex w-16 h-16 p-3'>
                            <Image
                                className='p-1'
                                src={error
                                    ? '/assets/svg/error.svg'
                                    : '/assets/svg/check.svg'}
                                alt='result' width='100' height='100' />
                        </div>
                    </div>
                    : <div>
                        <form onSubmit={handleSubmit}>
                            <p className="my-2 italic">Apply for your seat</p>
                            <input
                                type='email'
                                name='email'
                                className="bg-black w-72 border border-white px-5 pr-16 py-5 rounded-full relative"
                                placeholder={placeholder}
                                required
                            />
                            <div className="absolute right-2 bg-main-gradient w-[4.2rem] h-12 bottom-[9px] flex justify-center items-center rounded-full text-black">
                                <button
                                    aria-label="send"
                                    className="h-full w-full flex items-center justify-center font-extrabold text-2xl">
                                    <HiArrowLongRight />
                                </button>
                            </div>
                        </form>
                    </div>}
        </div>
    )
}

export default Input
