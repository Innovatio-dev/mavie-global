import axios from 'axios'
import { useState } from 'react'
import { HiArrowLongRight } from 'react-icons/hi2'
import Loader from './Loader'
import Result from './Result'

const Input = () => {
    const [error, setError] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = Object.fromEntries(new FormData(e.currentTarget))
        try {
            setLoading(true)
            setError(false)
            await axios.post('/api/sendinblue', formData)
            setSuccess(true)
            setLoading(false)
        } catch (error: unknown) {
            setError(true)
            setLoading(false)
            setSuccess(true)
        }
    }
    const handleReset = () => {
        setSuccess(false)
    }
    return (
        <div className="relative w-fit">
            {loading ? <Loader/> : null}
            {success
                ? <Result onReset={handleReset} error={error} />
                : <div style={{ display: loading ? 'none' : 'flex' }}>
                    <form onSubmit={handleSubmit}>
                        <input value={64} className='hidden' name='listId' readOnly />
                        <p className="my-2 italic">Reserve your seat now</p>
                        <input
                            type='email'
                            name='email'
                            className="bg-black w-72 border border-white px-5 pr-16 py-5 rounded-full relative"
                            placeholder={'Enter your email'}
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
