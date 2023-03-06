import Image from 'next/image'

type TestimonialCardProps = {
    phrase: string;
    name: string;
    image: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ phrase, name, image }) => {
    return (
        <div className='hover:translate-y-[-0.25rem] py-2 transition-all duration-300 overflow-visible'>
            <div className='my-2 bg-vertical-gradient ml-4 pl-[3px] rounded-tr-lg rounded-br-lg max-w-[90%] md:max-w-[27rem] hover:backdrop-brightness-200 transition-all duration-300' >
                <div className='flex shadow-card hover:shadow-card-hover items-center max-w-[93%] md:max-w-[440px] bg-purple-gradient p-4 rounded-tr-md rounded-br-md hover:backdrop-brightness-200 transition-all duration-300'>
                    <div className='w-1/3 lg:w-2/5 h-36 relative'>
                        <Image src={image} fill alt='profile.png' className='object-contain' sizes="(max-width: 768px) 30vw" />
                    </div>
                    <div className='flex flex-col pl-2 w-3/5 min-h-[8rem] justify-around'>
                        <div className='text-white' dangerouslySetInnerHTML={{ __html: phrase }} />
                        <div>
                            <h3 className='font-thin text-xs leading-none capitalize'>{name}</h3>
                        </div>
                    </div>
                    <div className='relative w-[40px] h-[40px] -top-16'>
                        <Image src="/assets/svg/quotes-bn.svg" alt="quotes" fill />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
