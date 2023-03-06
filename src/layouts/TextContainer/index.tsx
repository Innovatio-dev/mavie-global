// Next Js
import Image from 'next/image'
// React Scroll Parallax
import { Parallax } from 'react-scroll-parallax'

interface ITextContainerItem {
    className?: string;
    children: React.ReactNode;
    amount?: number;
}

const TextContainer: React.FC<ITextContainerItem> = ({ className, children, amount = 2 }) => {
    return (
        <section className="lines !bg-black">
            <div className={`w-full h-full flex justify-center ${className}`}>
                {[...Array(amount)].map((_, i) => {
                    return <Parallax key={i} speed={-2} rotate={[-45, 0]} style={{ top: 1200 + (900 * i) }} className={'absolute lg:w-[150px] lg:h-[150px] left-0 lg:left-5 xl:left-32'}>
                        <Image src="/assets/svg/arrow_left.svg" alt="arrow" fill className='object-contain' />
                    </Parallax>
                })}
                {[...Array(amount)].map((_, i) => {
                    return <Parallax key={i} speed={2} rotate={[35, 0]} style={{ top: 900 * (i + 1) }} className={'absolute lg:w-[150px] lg:h-[150px] right-0 lg:right-5 xl:right-32'}>
                        <Image src="/assets/svg/arrow_right.svg" alt="arrow" fill className='object-contain' />
                    </Parallax>
                })}
                {children}
            </div>
        </section>
    )
}

export default TextContainer
