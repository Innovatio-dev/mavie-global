import { SCORE_DATA } from '@/utils/constants/score'
import { IoChevronForwardOutline } from 'react-icons/io5'

export default function ScoreBoard() {
    return (
        <div className='w-full font-dm'>
            <div className="text-xs md:text-base w-full grid gap-y-2 rounded-xl overflow-hidden">
                {/* Table head */}
                <div className='bg-purple-gradient font-medium italic grid grid-cols-[60px,_1fr,_90px] md:grid-cols-[60px,_1fr,_130px] items-center py-[14.13px] px-[26px]'>
                    <span className='text-start rounded-tl-xl '>NR</span>
                    <span className='text-start '>COMPANY</span>
                    <span className='text-start rounded-tr-xl '>REVENUE <br /> GROWTH IN %</span>
                </div>

                {/* Table body */}
                {
                    SCORE_DATA.map(({ ranking, company, revenue }) => (
                        <div key={ranking} className={`grid grid-cols-[60px,_1fr,_90px] md:grid-cols-[60px,_1fr,_130px] items-center py-[14.13px] px-[26px] ${company === 'MaVie Global' ? 'bg-main-gradient text-black' : 'bg-brand-black'}`}>
                            <div className={` ${ranking === 10 && 'rounded-bl-xl overflow-hidden'}`}>
                                <div className={'w-[clamp(45px,_1vw,_48px)] h-[clamp(45px,_1vw,_48px)] flex justify-end bg-vertical-gradient rounded'}>
                                    <div className="w-[calc(100%-0.2rem)] h-full flex flex-col justify-center items-center bg-black rounded-r">
                                        <span className="text-[clamp(20px,_1vw,_30px)] text-white font-eesti font-semibold italic uppercase tracking-[2.6px] !leading-none -ml-[0.2rem]">{ ranking }</span>
                                    </div>
                                </div>
                            </div>
                            <div className='font-bold'>{company}</div>
                            <div className='w-full flex justify-between items-center font-bold'>{revenue} <IoChevronForwardOutline /></div>
                        </div>
                    ))
                }
            </div>

            <span className='block text-sm text-brand-light text-center mt-3'>(MaVie Global - the 2nd fastest revenue-growing affiliate company in the world)</span>
        </div>

    )
}
