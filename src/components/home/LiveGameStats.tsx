import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import SelectButtonBg from "@/../public/assets/images/game_stats_button.webp"
import LiveGameStatsCard from '../others/LiveGameStatsCard'

export default function LiveGameStats() {
  const [filerData, setFilterData] = useState<boolean>(false)
  const [RoundAmount, setRoundAmount] = useState<number>(12)
  const [activeAmount, setActiveAmount] = useState<number>(84)
  const [totalSolAmount, setTotalSolAmount] = useState<number>(126.5)
  const [BigGestPrice, setBigGestPrice] = useState<number>(28.5)

  // const getData = () => {
  //   try {

  //   } catch (error) {

  //   }
  // }

  // useEffect(() => {
  //   getData();
  // }, [filerData])


  return (
    <div className='w-full h-full py-9 md:py-16 justify-center items-center flex flex-col px-4'>
      <div className="max-w-[1180px] w-full mx-auto">
        <div className="w-full flex flex-col h-full gap-6 md:gap-16 justify-center items-center">
          <p className="w-full flex flex-col text-center text-[32px] sm:text-38px md:text-[55px] text-[#FACC15] uppercase">Live Game stats</p>
          <div className="flex flex-row gap-2 relative justify-center items-center max-w-[360px] py-1 px-2 border-[3px] sm:border-[5px] border-[#8CCFFC] bg-gradient-to-t from-[#67CCFF] to-[#0194DE] rounded-[8px] sm:rounded-[13px] shadow-[-6px_6px_0px_#1B5DB1,8px_12px_20px_rgba(0,0,0,0.4),inset_8px_-8px_8px_#00000022,inset_-8px_8px_8px_#ffffff22]">
            <div onClick={() => setFilterData(true)} className={`${!filerData ? "" : "bg-gradient-to-t from-[#264FD9] to-[#19348F] shadow-[inset_8px_-8px_8px_#00000022,inset_-8px_8px_8px_#ffffff22]"} flex flex-col rounded-[8px] sm:rounded-[13px] w-[115px] sm:w-[155px] py-2 md:py-4 h-full justify-center items-center text-[#CED6EF] playpen z-10 cursor-pointer font-semibold text-xl`}>
              Daily
            </div>
            <div onClick={() => setFilterData(false)} className={`${!filerData ? "bg-gradient-to-t from-[#264FD9] to-[#19348F] shadow-[inset_8px_-8px_8px_#00000022,inset_-8px_8px_8px_#ffffff22]" : ""} flex flex-col rounded-[8px] sm:rounded-[13px] w-[135px] sm:w-[175px] py-2 md:py-4 h-full justify-center items-center text-[#CED6EF] playpen z-10 cursor-pointer font-semibold text-xl`}>
              All-Time
            </div>
          </div>
          <div className="flex flex-col w-full h-full justify-center items-center p-2.5 md:p-[28px] lg:p-[50px] rounded-[15px] border-[#83D6F9] border-[5px] bg-gradient-to-t from-[#162D7B] to-[#2852E1] gap-3 md:gap-9 shadow-[-5px_5px_0px_#1B5DB1,8px_12px_20px_rgba(0,0,0,0.4),inset_8px_-8px_8px_#00000022,inset_-8px_8px_8px_#ffffff22] transition-transform active:translate-y-[16px]">
            <div className="flex flex-col sm:flex-row w-full items-center justify-center gap-3 md:gap-9">
              <LiveGameStatsCard amount={RoundAmount} title="Rounds Played" text={!filerData ? "All-Time" : "Today"} />
              <LiveGameStatsCard amount={activeAmount} title="Active Players" text={!filerData ? "All-Time" : "Today"} />
            </div>
            <div className="flex flex-col sm:flex-row w-full items-center justify-center gap-3 md:gap-9">
              <LiveGameStatsCard amount={totalSolAmount} title="Total sol won!!" text={!filerData ? "All-Time" : "Today"} />
              <LiveGameStatsCard amount={BigGestPrice} title="Biggest Price" text={!filerData ? "All-Time" : "Today"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
