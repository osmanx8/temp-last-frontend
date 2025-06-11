import React from 'react'
import Image from 'next/image'
import LightningIcon from "@/../public/assets/images/lightning.webp"

interface Props {
  time: string
  address: string
  amount: string
}

export default function LiveFeedCard({ time, address, amount }: Props) {
  return (
    <div className='w-full h-[106px] flex flex-row justify-between items-center bg-gradient-to-t from-[#162D7B] to-[#2852E1] rounded-[8px] sm:rounded-[15px] border-[3px] sm:border-[5px] border-[#83D6F9] px-2 sm:px-8 py-1 sm:py-6 gap-1 cursor-pointer shadow-[-5px_5px_0px_#1B5DB1,8px_12px_20px_rgba(0,0,0,0.4),inset_8px_-8px_8px_#00000022,inset_-8px_8px_8px_#ffffff22] transition-transform active:translate-y-[16px]'>
      <p
        className="text-[#0C1F5F] text-[18px] sm:text-[24px] md:text-[32px] font-semibold sm:font-bold"
        style={{ textShadow: "inset 1px 1px 0.25 #000, inset -1px -1px 0.25 #000" }}
      >
        {time}
      </p>
      <p className="text-white playpen text-sm sm:text-base">{address}</p>
      <Image src={LightningIcon} alt='LightningIcon' width={52} height={80} className='hidden sm:flex flex-col' />
      <p
        className="text-[#FFD700] text-[18px] sm:text-[24px] md:text-[32px] font-semibold sm:font-bold"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}
      >
        {amount}
      </p>
    </div>
  )
}