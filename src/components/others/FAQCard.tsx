import React from 'react'
import { FaAngleDown } from "react-icons/fa6";

interface FAQDataProp {
  data: any;
  currentPage: number;
  click: (id: number) => void;
}

export default function FAQCard({ data, currentPage, click }: FAQDataProp): JSX.Element {
  return (
    <div onClick={() => click(data.id)} className={`${currentPage === data.id ? "h-[110px] sm:h-[160px] md:h-[230px]" : "h-[44px] sm:h-[64px] md:h-[96px]"} relative w-full  flex flex-col justify-start items-start border-[2px] md:border-[5px] border-[#83D6F9] rounded-[16px] cursor-pointer object-cover overflow-hidden duration-300 shadow-[-5px_5px_0px_#1B5DB1,8px_12px_20px_rgba(0,0,0,0.4),inset_8px_-8px_8px_#00000022,inset_-8px_8px_8px_#ffffff22]`}>
      <div className="flex flex-row w-full py-3 sm:py-4 md:py-5 justify-between items-center px-2 sm:px-4 md:px-9 bg-gradient-to-t from-[#162D7B] to-[#2852E1] z-10 rounded-b-[16px]">
        <p className="flex flex-col text-white text-sm sm:text-lg md:text-[32px]">
          {data.title}
        </p>
        <FaAngleDown className={`${currentPage === data.id ? "rotate-180" : "rotate-0"} text-[#D6DAE9] text-xl sm:text-2xl md:text-5xl duration-300`} />
      </div>
      <div className="absolute flex flex-col w-full h-full pb-2 md:pb-8 pt-12 sm:pt-[80px] md:pt-[120px] px-3 sm:px-4 md:px-5 playpen text-xs sm:text-base md:text-[24px] text-white bg-gradient-to-t from-black/20 to-black/10">
        {data.text}
      </div>
    </div>
  )
}
