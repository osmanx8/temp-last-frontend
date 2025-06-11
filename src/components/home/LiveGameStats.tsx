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
    <div className='w-full h-full py-16 justify-center items-center flex flex-col'>
      <div className="max-w-[1180px] w-full mx-auto">
        <div className="w-full flex flex-col h-full gap-16 justify-center items-center">
          <p className="w-full flex flex-col text-center text-[55px] text-[#FACC15] uppercase">Live Game stats</p>
          <div className="flex flex-row gap-2 relative justify-center items-center w-full max-w-[360px] px-2 pt-2 pb-3.5 ">
            <div onClick={() => setFilterData(true)} className={`${!filerData ? "" : "bg-gradient-to-t from-[#264FD9] to-[#19348F]"} flex flex-col rounded-[13px] w-[155px] py-4 h-full justify-center items-center text-[#CED6EF] playpen z-10 cursor-pointer font-semibold text-xl`}>
              Daily
            </div>
            <div onClick={() => setFilterData(false)} className={`${!filerData ? "bg-gradient-to-t from-[#264FD9] to-[#19348F]" : ""} flex flex-col rounded-[13px] w-[175px] py-4 h-full justify-center items-center text-[#CED6EF] playpen z-10 cursor-pointer font-semibold text-xl`}>
              All-Time
            </div>
            <Image src={SelectButtonBg} alt='SelectButtonBg' className='absolute top-0 left-0 w-full h-full' />
          </div>
          <div className="flex flex-col w-full h-full justify-center items-center p-[50px] rounded-[15px] border-[#83D6F9] border-[5px] bg-gradient-to-t from-[#162D7B] to-[#2852E1] gap-9">
            <div className="flex flex-row w-full items-center justify-center gap-9">
              <LiveGameStatsCard amount={RoundAmount} title="Rounds Played" text={!filerData ? "All-Time" : "Today"} />
              <LiveGameStatsCard amount={activeAmount} title="Active Players" text={!filerData ? "All-Time" : "Today"} />
            </div>
            <div className="flex flex-row w-full items-center justify-center gap-9">
              <LiveGameStatsCard amount={totalSolAmount} title="Total sol won!!" text={!filerData ? "All-Time" : "Today"} />
              <LiveGameStatsCard amount={BigGestPrice} title="Biggest Price" text={!filerData ? "All-Time" : "Today"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
