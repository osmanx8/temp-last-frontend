import React from 'react'
import { HowToPlayCard } from '../others/HowToPlayCard'
import { HowToPlayData } from '@/config/ConfigData'

export default function HowToplay() {
  return (
    <div className="flex flex-col w-full h-full py-28 justify-center items-center gap-16">
      <div className="container">
        <div className="flex flex-col gap-16 justify-center items-center w-full h-full">
          <p className="w-full flex flex-col justify-center items-center text-center text-[48px] text-[#9945FF] uppercase">
            How to play
          </p>
          <div className="flex flex-row w-full h-full px-20 py-10 justify-center items-center bg-gradient-to-t from-[#162D7B] to-[#2852E1] border-[#83D6F9] border-[5px] rounded-[15px]">
            {HowToPlayData.map((item, index) => (
              <HowToPlayCard
                key={index}
                id={item.id}
                title={item.title}
                text={item.text}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
