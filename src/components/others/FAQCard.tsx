import React from 'react'
import { FaAngleDown } from "react-icons/fa6";

interface FAQDataProp {
  data: any;
  currentPage: number;
  click: (id: number) => void;
}

export default function FAQCard({ data, currentPage, click }: FAQDataProp): JSX.Element {
  return (
    <div onClick={() => click(data.id)} className={`${currentPage === data.id ? "h-[230px]" : "h-[96px]"} relative w-full  flex flex-col justify-start items-start border-[5px] border-[#83D6F9] rounded-[16px] cursor-pointer object-cover overflow-hidden duration-300`}>
      <div className="flex flex-row w-full py-5 justify-between items-center px-9 bg-gradient-to-t from-[#162D7B] to-[#2852E1] z-10 rounded-b-[16px]">
        <p className="flex flex-col text-white text-[32px]">
          {data.title}
        </p>
        <FaAngleDown className={`${currentPage === data.id ? "rotate-180" : "rotate-0"} text-[#D6DAE9] text-5xl duration-300`} />
      </div>
      <div className="absolute flex flex-col w-full pb-8 pt-[120px] px-5 playpen text-[24px] text-white bg-gradient-to-t from-black/20 to-black/10">
        {data.text}
      </div>
    </div>
  )
}
