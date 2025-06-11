import React, { useState } from 'react'
import { FAQData } from '@/config/ConfigData'
import FAQCard from '../others/FAQCard'

export default function FAQ() {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const selectPage = (e: number) => {
    if (currentPage === e) {
      setCurrentPage(0)
    } else {
      setCurrentPage(e)
    }
  }

  return (
    <div className='flex flex-col w-full h-full justify-center items-center py-6 md:py-14 px-2.5'>
      <div className="container">
        <div className="flex flex-col gap-6 md:gap-14 justify-center items-center w-full h-full">
          <p className="text-center w-full justify-center items-center text-[#7EC0F6] text-[32px] sm:text-[34px] md:text-[48px] uppercase">
            Frequently asked Questions
          </p>
          <div className="flex flex-col w-full gap-5 md:gap-9 h-full duration-300 justify-center items-center">
            {FAQData.map((item, index) => (
              <FAQCard key={index} data={item} click={(id: number) => selectPage(id)} currentPage={currentPage} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
