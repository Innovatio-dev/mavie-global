import Button from '@/components/shared/Button'
import axios from 'axios'

interface IContactForm {
    mavieId: boolean,
    listId: number
  }

const ContactForm:React.FC<IContactForm> = ({ mavieId, listId }) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const form = new FormData(event.currentTarget)
        const formData = Object.fromEntries(form)
        console.log(formData)
        event.preventDefault()
        axios.post(`/api/sendinblue/id=${listId}`, formData)
            .then(function () {
                event.currentTarget.reset()
                console.log(formData)
            })
            .catch(function (error) {
                console.log(error.message)
            })
    }
    return (
        <>
            <form
                onSubmit={handleSubmit}
                className='mx-auto w-[90%] lg:w-[60%] max-w-[1200px] h-fit'>
                <div className='flex flex-col lg:flex-row w-full justify-around mt-12 mb-4'>
                    <div className='flex flex-col lg:w-[45%]'>
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
                    <div className='flex flex-col lg:w-[45%]'>
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
                <div className='flex-col lg:flex-row w-full justify-around mb-4'>
                    <div className='flex flex-col lg:w-[45%]'>
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
                    <div className='flex flex-col lg:w-[45%]'>
                        <label
                            className='py-2'
                            htmlFor='mavieid'>Mavie ID</label>
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
                    <label className='ml-6 py-4'>Write your message</label>
                    <textarea
                        name='message'
                        placeholder='Click here to write...'
                        className="bg-transparent w-full lg:w-[95%] h-[200px] border border-gray-600 py-4 pl-4 rounded-lg relative resize-none mx-auto"
                    >
                    </textarea>
                </div>
                <div className='flex flex-col items-center justify-center mx-auto w-full h-[50px] py-[50px]'>
                    <div className='flex w-full mx-auto'>
                        <p className='flex py-[30px] pt-[60px] mx-auto items-center justify-center'>
                            <input id='checkbox' type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 mx-4'/>
                            <label htmlFor='checkbox'>I have read and agree to mavie.global terms of use and privacy policy</label>
                        </p>
                    </div>
                    <Button>
                        <button type="submit">
                            <p className='px-12 py-2 cursor-pointer'>Send</p>
                        </button>
                    </Button>
                </div>
            </form>
        </>
    )
}

export default ContactForm
