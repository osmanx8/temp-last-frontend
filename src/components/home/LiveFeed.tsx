import React, { useEffect, useState } from 'react'
import LiveFeedCard from '../others/LiveFeedCard'
import { liveFeedTestData } from '@/config/ConfigData'

export default function LiveFeed() {
  const [data, setData] = useState<any[]>();

  // const getData = () => {
  //   try {

  //   } catch (error) {

  //   }
  // }

  // useEffect(() => {
  //   getData()
  // }, [])

  return (
    <div className='w-full h-full py-9 md:py-16 justify-center items-center flex flex-col px-4'>
      <div className='w-full h-full max-w-[1000px] mx-auto'>
        <div className="flex flex-col gap-6 w-full justify-center items-start">
          <p className="flex flex-col text-white/80 text-[28px] sm:text-[36px] font-bold uppercase">
            live feed
          </p>
          <div className="flex flex-col w-full border-[3px] sm:border-[5px] max-h-[365px] md:max-h-[625px] border-[#2F88D4] shadow-xl shadow-black/50 object-cover overflow-hidden bg-[#07245C] rounded-[8px] sm:rounded-[15px] ">
            <div className='flex flex-col w-full h-full py-2 sm:py-4 px-3 sm:px-12 gap-2 sm:gap-4 overflow-y-scroll'>
              {liveFeedTestData.map((item, index) => (
                <LiveFeedCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
