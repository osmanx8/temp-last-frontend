import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface Props {
  index: number;
  address: string;
  reward: number;
  image: StaticImageData;
}

export default function KingCard({ index, address, reward, image }: Props) {
  return (
    <div className='flex flex-col w-full max-w-[325px] h-[190px] justify-center items-center border-[5px] border-[#83D6F9] rounded-[15px] bg-gradient-to-t from-[#162D7B] to-[#2852E1] shadow-[-5px_5px_0px_#1B5DB1,8px_12px_20px_rgba(0,0,0,0.4),inset_8px_-8px_8px_#00000022,inset_-8px_8px_8px_#ffffff22] transition-transform active:translate-y-[16px]'>
      <div className="text-[24px] sm:text-[32px] font-bold bg-gradient-to-t from-[#9F9F9F] to-[#FFFFFF] bg-clip-text text-transparent uppercase">{Number(index + 1)}st place</div>
      <div className="text-sm sm:text-base text-white playpen">{address.slice(0, 5)}...{address.slice(-5)}</div>
      <div className="flex flex-row justify-center items-center relative mt-3">
        <div className="flex flex-col bg-[url('/assets/images/blue_button.webp')] uppercase w-[168px] h-[70px] justify-center items-start px-5 text-[26px] text-[#015D8B]">
          {reward.toFixed(2)} sol
        </div>
        <Image src={image} alt='King1' width={80} height={96} className={`${index === 1 ? "right-[-32px] top-[-16] w-16" : "right-[-44px] bottom-0 w-20"} absolute flex`} />
      </div>
    </div>
  )
}
