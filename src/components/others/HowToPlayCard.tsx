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
    <div className={`${id !== 3 && "border-b-[3px] border-b-[#0D1941] md:border-b-0 md:border-r-[5px] md:border-r-[#0D1941]"} flex flex-col gap-2 justify-center items-center px-3 lg:px-8 xl:px-14 py-3`}>
      <Image src={img} alt={title} width={100} height={100} className='flex flex-col w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] justify-center items-center' />
      <p className="flex flex-col w-full max-w-[260px] justify-center items-center text-[24px] sm:text-[26px] lg:text-[32px] bg-gradient-to-t from-[#9F9F9F] to-[#FFFFFF] bg-clip-text text-transparent uppercase">
        {title}
      </p>
      <span className="flex flex-col w-full max-w-[260px] justify-center items-center text-sm lg:text-base text-white uppercase text-center">
        {text}
      </span>
    </div>
  )
}
