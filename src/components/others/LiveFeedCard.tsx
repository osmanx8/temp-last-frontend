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
    <div className='w-full h-[106px] flex flex-row justify-between items-center bg-gradient-to-t from-[#162D7B] to-[#2852E1] rounded-[15px] border-[5px] border-[#83D6F9] px-8 py-6 cursor-pointer'>
      <p className="text-[#0C1F5F] text-[32px] font-bold">{time}</p>
      <p className="text-white playpen text-base">{address}</p>
      <Image src={LightningIcon} alt='LightningIcon' width={52} height={80} className='flex flex-col' />
      <p className="text-[#FFD700] text-[32px] font-bold">{amount}</p>
    </div>
  )
}