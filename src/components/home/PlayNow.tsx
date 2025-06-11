import React from 'react'
import Image from 'next/image'
import KingImg from "@/../public/assets/images/footer_king.webp"
import MoneyBox from "@/../public/assets/images/footer_money.webp"

export default function PlayNow() {
  return (
    <div className='flex flex-col w-full h-full justify-center items-center py-14'>
      <div className="container">
        <div className="flex flex-row justify-between items-center w-full h-full gap-5">
          <Image src={KingImg} alt='KingImg' width={240} height={340} className='flex flex-col w-[240px] h-[342px] rotate-12' />
          <div className="flex flex-col justify-center items-center gap-6">
            <p className="flex flex-col text-[48px] text-[#9F9F9F] uppercase">Ready to Win Big?</p>
            <div className="flex flex-col px-14 py-6 bg-gradient-to-t from-[#94790C] to-[#FACC15] rounded-[15px] border-[#919191] border-[5px] justify-center items-center text-[#362C05] text-[32px] playpen uppercase font-bold cursor-pointer">
              play now
            </div>
          </div>
          <Image src={MoneyBox} alt='MoneyBox' width={220} height={315} className='w-[220px] h-[315px]' />
        </div>
      </div>
    </div>
  )
}
