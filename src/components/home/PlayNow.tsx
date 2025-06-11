import React from 'react'
import Image from 'next/image'
import KingImg from "@/../public/assets/images/footer_king.webp"
import MoneyBox from "@/../public/assets/images/footer_money.webp"

export default function PlayNow() {
  return (
    <div className='flex flex-col w-full h-full justify-center items-center py-9 md:py-14 px-4'>
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full h-full gap-5">
          <Image src={KingImg} alt='KingImg' width={240} height={340} className='flex flex-col w-[100px] md:w-[240px] md:h-[342px] rotate-12' />
          <div className="flex flex-col justify-center items-center gap-2 sm:gap-4 md:gap-6">
            <p className="flex flex-col text-[28px] sm:text-[32px] md:text-[48px] uppercase bg-gradient-to-t from-[#9F9F9F] to-[#FFFFFF] bg-clip-text text-transparent">Ready to Win Big?</p>
            <div className="flex flex-col px-6 sm:px-9 md:px-14 py-3 sm:py-4 md:py-6 bg-gradient-to-t from-[#94790C] to-[#FACC15] rounded-[15px] border-[#919191] border-[5px] justify-center items-center text-[#362C05] text-[20px] sm:text-[26px] md:text-[32px] playpen uppercase font-extrabold cursor-pointer shadow-[-4px_4px_0px_#878888,8px_12px_20px_rgba(0,0,0,0.4),inset_8px_-8px_8px_#00000022,inset_-8px_8px_8px_#ffffff22]">
              play now
            </div>
          </div>
          <Image src={MoneyBox} alt='MoneyBox' width={220} height={315} className='w-[100px] md:w-[220px] md:h-[315px]' />
        </div>
      </div>
    </div>
  )
}
