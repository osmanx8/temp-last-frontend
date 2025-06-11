import React from 'react'
import KingCard from '../others/KingCard'
import { kingCardTestData } from '@/config/ConfigData'
import { KingCardData } from '@/utils/types'

export default function Leaderboard() {

  return (
    <div className="flex flex-col w-full h-full py-12 sm:py-28 justify-center items-center gap-6 sm:gap-16 px-4">
      <p className="text-[36px] sm:text-[48px] font-extrabold text-[#FACC15] uppercase text-center">leaderboard</p>
      <div className="flex flex-wrap w-full justify-center items-center gap-5 sm:gap-[92px]">
        {kingCardTestData.map((item: KingCardData, index: number) => (
          <KingCard key={index} {...item} index={index} />
        ))}
      </div>
    </div>
  )
}
