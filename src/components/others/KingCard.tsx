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
    <div className='flex flex-col w-full max-w-[325px] h-[190px] justify-center items-center border-[5px] border-[#83D6F9] rounded-[15px] bg-gradient-to-t from-[#162D7B] to-[#2852E1]'>
      <div className="text-[32px] font-bold text-[#9F9F9F] uppercase">{Number(index + 1)}st place</div>
      <div className="text-base text-white playpen">{address.slice(0, 5)}...{address.slice(-5)}</div>
      <div className="flex flex-row justify-center items-center relative mt-3">
        <div className="flex flex-col bg-[url('/assets/images/blue_button.webp')] uppercase w-[168px] h-[70px] justify-center items-start px-5 text-[26px] text-[#015D8B]">
          {reward.toFixed(2)} sol
        </div>
        <Image src={image} alt='King1' width={80} height={96} className={`${index === 1 ? "right-[-32px] top-[-16] w-16" : "right-[-44px] bottom-0 w-20"} absolute flex`} />
      </div>
    </div>
  )
}
