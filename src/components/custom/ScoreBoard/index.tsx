import { SCORE_DATA } from '@/utils/constants/score'
import { IoChevronForwardOutline } from 'react-icons/io5'

export default function ScoreBoard() {
    return (
        <div className='w-full'>
            <div className="w-full">
                <div className='bg-purple-gradient italic grid grid-cols-[110px_1fr_auto] items-center'>
                    <span className='font-normal text-start rounded-tl-xl py-[14.13px] pl-[26px]'>NR</span>
                    <span className='font-normal text-start py-[14.13px]'>COMPANY</span>
                    <span className='font-normal text-start rounded-tr-xl py-[14.13px] pr-[26px]'>REVENUE <br /> GROWTH IN %</span>
                </div>

                <div>
                    {
                        SCORE_DATA.map(({ ranking, company, revenue }) => (
                            <div key={ranking} className={`grid grid-cols-[110px_1fr_auto] items-center ${company === 'MaVie Global' ? 'bg-main-gradient text-black' : 'bg-brand-black'}`}>
                                <div className={`py-[14.13px] pl-[26px] ${ranking === 10 && 'rounded-bl-xl overflow-hidden'}`}>
                                    <div className={'w-[clamp(45px,_1vw,_48px)] h-[clamp(45px,_1vw,_48px)] flex justify-end bg-vertical-gradient rounded'}>
                                        <div className="w-[calc(100%-0.2rem)] h-full flex flex-col justify-center items-center bg-black rounded-r">
                                            <span className="text-[clamp(20px,_1vw,_30px)] text-white font-eesti font-semibold italic uppercase tracking-[2.6px] !leading-none -ml-[0.2rem]">{ ranking }</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-[14.13px]'>{company}</div>
                                <div className={`py-[14.13px] pr-[26px] ${ranking === 10 && 'rounded-br-xl overflow-hidden'}`}>
                                    <div className='flex justify-between items-center'>{revenue} <IoChevronForwardOutline /></div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <span className='block font-dm text-sm text-brand-gray text-center mt-3'>(MaVie Global - the 2nd fastest revenue-growing affiliate company in the world)</span>
        </div>

    )
}
