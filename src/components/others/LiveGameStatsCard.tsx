import React from 'react'

interface Props {
  amount: number;
  title: string;
  text: string;
}

export default function LiveGameStatsCard({ amount, title, text }: Props) {
  return (
    <div className='flex flex-col w-full h-full max-w-[512px] max-h-[415px] justify-center items-center rounded-[15px] border-[5px] border-[#83D6F9] bg-gradient-to-t from-[#105D90] to-[#1C9FF6] shadow-[-5px_5px_0px_#1B5DB1,8px_12px_20px_rgba(0,0,0,0.4),inset_8px_-8px_8px_#00000022,inset_-8px_8px_8px_#ffffff22] transition-transform active:translate-y-[16px] py-4 sm:py-5 md:py-7 lg:py-10'>
      <div className="flex flex-col gap-4 justify-center items-center h-full">
        <p className="text-[58px] md:text-[88px] lg:text-[120px] text-[#FFE815]">{amount}</p>
        <p className="text-white text-[32px] sm:text-[36px] md:text-[40px] uppercase palypen">{title}</p>
        <p className="text-[24px] sm:text-[28px] md:text-[32px] text-white/60 palypen">{text}</p>
      </div>
    </div>
  )
}
