import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface HowToPlayCardProp {
  id: number;
  title: string;
  text: string;
  img: StaticImageData;
}

export const HowToPlayCard = ({ id, title, text, img }: HowToPlayCardProp) => {
  return (
    <div className={`${id !== 3 && "border-r-[5px] border-r-[#0D1941]"} flex flex-col gap-2 justify-center items-center px-16 py-3`}>
      <Image src={img} alt={title} width={100} height={100} className='flex flex-col w-[100px] h-[100px] justify-center items-center' />
      <p className="flex flex-col w-full max-w-[260px] justify-center items-center text-[32px] text-[#9F9F9F] uppercase">
        {title}
      </p>
      <span className="flex flex-col w-full max-w-[260px] justify-center items-center text-base text-white uppercase text-center">
        {text}
      </span>
    </div>
  )
}
