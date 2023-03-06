// Next Js
import Image from 'next/image'
// import Link from 'next/link'
// Icons
// import { BsTwitter } from 'react-icons/bs'
// import { RiInstagramFill } from 'react-icons/ri'

const ProfileCard = ({
    image,
    name,
    subtitle,
    logo
}: {
    image: string;
    name: string;
    subtitle: string;
    logo: string;
}) => {
    return <div className='py-3 md:mx-14 hover:translate-y-[-0.25rem] transition-all duration-300 overflow-visible'>
        <div className='w-auto bg-vertical-gradient pl-[3px] rounded-tr-lg rounded-br-lg max-w-[15rem] hover:backdrop-brightness-200 transition-all duration-300'>
            <div className='flex flex-col items-center w-auto bg-purple-gradient p-4 rounded-tr-md rounded-br-md shadow-card hover:backdrop-brightness-200 hover:shadow-card-hover transition-all duration-300'>
                <div className='w-36 h-36 3xl:w-32 relative '>
                    <Image src= {image} unoptimized={true} fill alt='profile.png' className='object-scale-down' sizes="(max-width: 768px) 50vw" />
                </div>
                <div>
                    <h3 className='text-sm font-semibold uppercase bg-main-gradient bg-clip-text inline-block text-transparent'>
                        {name}
                    </h3>
                </div>
                <div>
                    <h3 className='text-xs'>
                        {subtitle}
                    </h3>
                </div>
                <div style={logo === '/assets/images/ultron-logo.png' ? { transform: 'scale(1.3)' } : {}} className='w-12 h-4 relative mt-3'>
                    <Image src= {logo} fill alt='profile.png' className='object-scale-down' />
                </div>
            </div>
        </div>
    </div>
}

export default ProfileCard
