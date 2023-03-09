import Button from '@/components/shared/Button'
import axios from 'axios'
import styles from './styles.module.scss'
import { BsPerson, BsPencil } from 'react-icons/bs'
import { IoMailOutline } from 'react-icons/io5'
import Image from 'next/image'
import { useState } from 'react'

interface IContactForm {
    mavieId: boolean,
    listId: number
  }

const ContactForm:React.FC<IContactForm> = ({ mavieId, listId }) => {
    const [error, setError] = useState()
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const form = new FormData(event.currentTarget)
        const formData = Object.fromEntries(form)
        console.log(formData)
        event.preventDefault()
        axios.post(`/api/sendinblue/id=${listId}`, formData)
            .then(function () {
                event.currentTarget.reset()
            })
            .catch(function (error) {
                setError(error.message)
            })
    }
    return (
        <>
            <form
                onSubmit={handleSubmit}
                className='mx-auto w-[90%] lg:w-[60%] max-w-[1200px] min-h-fit mb-12'>
                <div className='flex flex-col lg:flex-row w-full justify-around mt-12 lg:mb-4'>
                    <div className='flex flex-col lg:w-[45%]'>
                        <label
                            className='flex items-center justify-start py-2'
                            htmlFor='name'>
                            <BsPerson className='mr-2'/>
                                Name
                        </label>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            className="bg-transparent w-full h-[50px] border border-gray-600 px-5 pr-16 rounded-lg relative"
                            placeholder="Type Here"
                            required/>
                    </div>
                    <div className='flex flex-col lg:w-[45%]'>
                        <label
                            className='flex items-center justify-start py-2'
                            htmlFor='surname'>
                            <BsPerson className='mr-2'/>
                                Surname
                        </label>
                        <input
                            type='text'
                            name='surname'
                            id="surname"
                            className="bg-transparent w-full h-[50px] border border-gray-600 px-5 pr-16 py-5 rounded-lg relative"
                            placeholder="Type Here"
                            required
                        />
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row w-full justify-around mb-4'>
                    <div className='flex flex-col lg:w-[45%]'>
                        <label
                            className='flex items-center justify-start py-2'
                            htmlFor='email'>
                            <IoMailOutline className='mr-2'/>
                                Email Address
                        </label>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            className="bg-transparent w-full h-[50px] border border-gray-600 px-5 pr-16 py-5 rounded-lg relative"
                            placeholder="Type Here"
                            required
                        />
                    </div>
                    <div className='flex flex-col lg:w-[45%]'>
                        <label
                            className='flex items-center py-2'
                            htmlFor='mavieid'>
                            <Image className='mr-2' src="/assets/svg/mavie.svg" width="22" height="22" alt='mavie'/>
                                Mavie ID
                        </label>
                        <input
                            type='text'
                            name='mavieid'
                            id='mavieid'
                            className="bg-transparent w-full h-[50px] border border-gray-600 px-5 pr-16 rounded-lg relative"
                            placeholder="Type Here"
                            required={mavieId}
                        />
                    </div>
                </div>
                <div className='flex flex-col w-full justify-around my-2'>
                    <label className='flex items-center justify-start py-2 lg:pl-8 xl:pl-6'>
                        <BsPencil className='mr-2'/>
                        Write your message
                    </label>
                    <textarea
                        name='message'
                        placeholder='Click here to write...'
                        className="bg-transparent w-full lg:w-[95%] h-[200px] border border-gray-600 py-4 pl-4 rounded-lg relative resize-none mx-auto"
                    >
                    </textarea>
                </div>
                <div>
                    <div className='flex flex-row lg:flex-row items-center justify-around w-[95%] max-w-[560px] mx-auto lg:py-2 py-0'>
                        <div className={styles.checkbox}>
                            <label className={styles.toggleButton}>
                                <input type="checkbox"/>
                                <div>
                                    <svg viewBox="0 0 44 44">
                                        <path d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758" transform="translate(-2.000000, -2.000000)"></path>
                                    </svg>
                                </div>
                            </label>
                        </div>
                        <p className='mx-auto text-center py-4'>I have read and agree to mavie.global Terms of Use and Privacy Policy</p>
                    </div>
                    <div className='flex items-center justify-center w-full mx-auto py-6'>
                        <Button>
                            <button type="submit">
                                <p className='px-12 py-2 cursor-pointer'>Send</p>
                            </button>
                        </Button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ContactForm
