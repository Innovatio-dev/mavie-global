import Image from 'next/image'

interface ResultProps {
    error: boolean;
    onReset: () => void;
  }

const Result = ({ error, onReset }: ResultProps) => {
    const handleReset = () => {
        onReset()
    }
    return (
        <div onClick={handleReset} className='flex cursor-pointer bg-black w-72 border border-white text-xs rounded-full relative justify-between'>
            <div className='flex flex-col mx-auto justify-center items-center py-4 px-4'>
                <p className='text-sm font-semibold'>{error ? 'An error has ocurred' : 'Thanks for your submission.'}</p>
                <p>{error ? 'Click to try again' : 'We will send you an email shortly.'}</p>
            </div>
            <div className='flex w-16 h-16 p-3'>
                <Image
                    className='p-1'
                    src={`/assets/svg/${error ? 'error' : 'check'}.svg`}
                    alt='result' width='100' height='100' />
            </div>
        </div>
    )
}

export default Result
