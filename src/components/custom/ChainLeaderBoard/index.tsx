import { CHAIN_DATA } from '@/utils/constants/score'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { useCallback } from 'react'

export default function ChainLeaderBoard() {
    const { t } = useTranslation('about')

    const isPositive = useCallback((v: string) => v.includes('+'), [])

    return (
        <div className='w-full'>
            <div className='w-full h-fit flex items-center gap-8 bg-gradient-to-b from-[#013787] to-[#0161EE] rounded-xl overflow-hidden'>
                <Image src='/assets/images/about-us/llama.png' alt='DeFi Llama Chains Leaderboard' width={50} height={50} />
                <span className='font-dm text-xl font-bold'>DeFi Llama Chains Leaderboard</span>
            </div>
            <div className='w-full grid gap-y-[3px] font-dm text-xl rounded-xl overflow-hidden mt-3'>

                {/* Table head */}
                <div className={`
                        bg-purple-gradient grid grid-cols-[3fr,_repeat(2,_2fr)] lg:grid-cols-[3fr,_repeat(7,_2fr)] items-center py-[15px] px-[25px]
                        [&_span]:text-[11px] [&_span]:font-normal
                    `}>
                    <span className='text-start rounded-tl-xl'>Name</span>
                    <span className='hidden lg:table-cell text-end'>Protocols</span>
                    <span className='hidden lg:table-cell text-end'>Active Users</span>
                    <span className='hidden lg:table-cell text-end'>1d Change</span>
                    <span className='hidden lg:table-cell text-end'>7d Change</span>
                    <span className='text-end'>1m Change</span>
                    <span className='text-end rounded-tr-xl lg:rounded-none lg:pr-0'>TVL</span>
                    <span className='hidden lg:table-cell text-end rounded-tr-xl'>Stables</span>
                </div>

                {/* Table body */}
                <div className='font-bold grid gap-y-[1px]'>
                    {
                        CHAIN_DATA.map(({ ranking, name, protocols, users, day, week, month, tvl, stables }) => (
                            <div key={ranking} className={`bg-brand-black grid grid-cols-[3fr,_repeat(2,_2fr)] lg:grid-cols-[3fr,_repeat(7,_2fr)] items-center py-[10px] px-[25px] ${name === 'Ultron' && 'ultronRow'}`}>
                                <span className={'text-[10px]'}>
                                    <span className='flex items-center'>
                                        <span className='mr-4'>{ ranking }</span>
                                        <Image src={`/assets/images/about-us/chains/${name}.png`} alt={ name } width={18} height={18} className='mr-2 min-w-fit'/>
                                        <span>{ name }</span>
                                    </span>
                                </span>
                                <span className='hidden lg:table-cell text-[10px] text-end'>{protocols}</span>
                                <span className='hidden lg:table-cell text-[10px] text-end'>{users}</span>
                                <span className={`hidden lg:table-cell text-[10px] text-end ${isPositive(day) ? 'text-green-600' : 'text-red-600'}`}>{day}</span>
                                <span className={`hidden lg:table-cell text-[10px] text-end ${isPositive(week) ? 'text-green-600' : 'text-red-600'}`}>{week}</span>
                                <span className={`text-[10px] text-end ${isPositive(month) ? 'text-green-600' : 'text-red-600'}`}>{month}</span>
                                <span className={'text-[10px] text-end lg:pr-0'}>{tvl}</span>
                                <span className={'hidden lg:table-cell text-[10px] text-end'}>{stables}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <span className='block text-sm text-brand-light text-center mt-3'>{t('leaderboard_caption')}</span>
        </div>

    )
}
