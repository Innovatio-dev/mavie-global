import { SCORE_DATA } from '@/utils/constants/score'
import { IoChevronForwardOutline } from 'react-icons/io5'

export default function ScoreBoard() {
    return (
        <div className='w-full'>
            <table className={`
                w-full font-dm text-xl border-separate border-spacing-y-3
                [&_th]:text-[clamp(12px,_1vw,_16px)]
                [&_td]:text-[clamp(12px,_3vw,_16px)]
            `}>
                <thead>
                    <tr className='bg-purple-gradient italic'>
                        <th className='font-normal text-start rounded-tl-xl py-[14.13px] pl-[26px]'>NR</th>
                        <th className='font-normal text-start py-[14.13px]'>COMPANY</th>
                        <th className='font-normal text-start rounded-tr-xl py-[14.13px] pr-[26px]'>REVENUE <br /> GROWTH IN %</th>
                    </tr>
                </thead>
                <tbody className='font-bold'>
                    {
                        SCORE_DATA.map(({ ranking, company, revenue }) => (
                            <tr key={ranking} className={`bg-brand-black ${company === 'MaVie Global' && 'mavieRow'}`}>
                                <td className={`py-[14.13px] pl-[26px] ${ranking === 10 && 'rounded-bl-xl overflow-hidden'}`}>
                                    <div className={'w-[clamp(31.7px,_1vw,_48px)] h-[clamp(31.7px,_1vw,_48px)] flex justify-end bg-vertical-gradient rounded'}>
                                        <div className="w-[calc(100%-0.2rem)] h-full flex flex-col justify-center items-center bg-black rounded-r">
                                            <span className="text-[clamp(16px,_1vw,_30px)] font-eesti font-semibold italic uppercase tracking-[2.6px] !leading-none -ml-[0.2rem]">{ ranking }</span>
                                        </div>
                                    </div>
                                </td>
                                <td className='py-[14.13px]'>{company}</td>
                                <td className={`py-[14.13px] pr-[26px] ${ranking === 10 && 'rounded-br-xl overflow-hidden'}`}>
                                    <div className='flex justify-between items-center'>{revenue} <IoChevronForwardOutline /></div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <span className='block font-dm text-sm text-brand-gray text-center mt-3'>(MaVie Global - the 2nd fastest revenue-growing affiliate company in the world)</span>
        </div>

    )
}
