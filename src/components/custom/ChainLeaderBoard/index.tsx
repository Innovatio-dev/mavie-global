import { CHAIN_DATA } from '@/utils/constants/score'
import Image from 'next/image'
import { useCallback } from 'react'

export default function ChainLeaderBoard() {
    const isPositive = useCallback((v: string) => v.includes('+'), [])

    return (
        <div className='w-full'>
            <div className='w-full h-fit flex items-center gap-8 bg-gradient-to-b from-[#013787] to-[#0161EE] rounded-xl overflow-hidden'>
                <Image src='/assets/images/about-us/llama.png' alt='DeFi Llama Chains Leaderboard' width={50} height={50} />
                <span className='font-dm text-xl font-bold'>DeFi Llama Chains Leaderboard</span>
            </div>
            <table className={`
                w-full font-dm text-xl border-separate border-spacing-y-1 mt-3
                [&_th]:text-[11px] [&_th]:font-normal [&_th]:py-[14.13px]
            `}>
                <thead>
                    <tr className='bg-purple-gradient'>
                        <th className='text-start rounded-tl-xl pl-[26px]'>Name</th>
                        <th className='hidden lg:table-cell text-end'>Protocols</th>
                        <th className='hidden lg:table-cell text-end'>Active Users</th>
                        <th className='hidden lg:table-cell text-end'>1d Change</th>
                        <th className='hidden lg:table-cell text-end'>7d Change</th>
                        <th className='text-end'>1m Change</th>
                        <th className='text-end rounded-tr-xl lg:rounded-none pr-[26px] lg:pr-0'>TVL</th>
                        <th className='hidden lg:table-cell text-end rounded-tr-xl pr-[26px]'>Stables</th>
                    </tr>
                </thead>
                <tbody className='font-bold'>
                    {
                        CHAIN_DATA.map(({ ranking, name, protocols, users, day, week, month, tvl, stables }) => (
                            <tr key={ranking} className={`bg-brand-black ${name === 'Ultron' && 'ultronRow'}`}>
                                <td className={`text-[10px] py-[14.13px] pl-[26px] ${ranking === 11 && 'rounded-bl-xl overflow-hidden'}`}>
                                    <div className='flex items-center'>
                                        <span className='mr-4'>{ ranking }</span>
                                        <Image src={`/assets/images/about-us/chains/${name}.png`} alt={ name } width={18} height={18} className='mr-2 min-w-fit'/>
                                        <span>{ name }</span>
                                    </div>
                                </td>
                                <td className='hidden lg:table-cell text-[10px] text-end py-[14.13px]'>{protocols}</td>
                                <td className='hidden lg:table-cell text-[10px] text-end py-[14.13px]'>{users}</td>
                                <td className={`hidden lg:table-cell text-[10px] text-end py-[14.13px] ${isPositive(day) ? 'text-green-600' : 'text-red-600'}`}>{day}</td>
                                <td className={`hidden lg:table-cell text-[10px] text-end py-[14.13px] ${isPositive(week) ? 'text-green-600' : 'text-red-600'}`}>{week}</td>
                                <td className={`text-[10px] text-end py-[14.13px] ${isPositive(month) ? 'text-green-600' : 'text-red-600'}`}>{month}</td>
                                <td className={`text-[10px] text-end py-[14.13px] pr-[26px] lg:pr-0 ${ranking === 11 && 'rounded-br-xl lg:rounded-none overflow-hidden'}`}>{tvl}</td>
                                <td className={`hidden lg:table-cell text-[10px] text-end py-[14.13px] pr-[26px] ${ranking === 11 && 'rounded-br-xl overflow-hidden'}`}>{stables}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    )
}
