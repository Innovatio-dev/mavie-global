import React from 'react'

const ContactForm = () => {
    return (
        <>
            <form className='mx-auto w-[60%] max-w-[1200px] h-fit'>
                <div className='flex w-full justify-around mt-12 mb-4'>
                    <div className='flex flex-col w-[45%]'>
                        <label
                            className='py-2'
                            htmlFor='name'>Name</label>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            className="bg-transparent w-full h-[50px] border border-gray-600 px-5 pr-16 rounded-lg relative"
                            placeholder="Type Here"
                            required/>
                    </div>
                    <div className='flex flex-col w-[45%]'>
                        <label
                            className='py-2'
                            htmlFor='surname'>Surname</label>
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
                <div className='flex w-full justify-around mb-4'>
                    <div className='flex flex-col w-[45%]'>
                        <label
                            className='py-2'
                            htmlFor='email'>Email Address</label>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            className="bg-transparent w-full h-[50px] border border-gray-600 px-5 pr-16 py-5 rounded-lg relative"
                            placeholder="Type Here"
                            required
                        />
                    </div>
                    <div className='flex flex-col w-[45%]'>
                        <label
                            className='py-2'
                            htmlFor='mavieid'>Mavie ID</label>
                        <input
                            type='text'
                            name='mavieid'
                            id='mavieid'
                            className="bg-transparent w-full h-[50px] border border-gray-600 px-5 pr-16 rounded-lg relative"
                            placeholder="Type Here"
                        />
                    </div>
                </div>
                <div className='flex flex-col w-full justify-around my-2'>
                    <label className='ml-6 py-4'>Write your message</label>
                    <textarea
                        name='message'
                        placeholder='Click here to write...'
                        className="bg-transparent w-[95%] h-[200px] border border-gray-600 py-4 pl-4 rounded-lg relative resize-none mx-auto"
                    >
                    </textarea>
                </div>
            </form>
        </>
    )
}

export default ContactForm
