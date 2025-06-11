import React, { useState } from 'react'
import Image from 'next/image';
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { BsLightningFill } from "react-icons/bs";
import SolIcon from "@/../public/assets/images/sol-icon.webp"
import CurrentPotIcon from "@/../public/assets/images/current_top.webp"

export default function PotCard() {
  const [solAmount, setSolAmount] = useState<number>(0)
  const [currentSolAmount, setCuttenSolAmount] = useState<number>(42.54)

  const handleChangeSolAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSolAmount(Number(e.target.value))
  }

  const addSolAmount = () => {
    setSolAmount((prev) => prev + 0.1);
  }

  const removeSolAmount = () => {
    if (solAmount < 0.2) {
      return;
    }
    setSolAmount((prev) => prev - 0.1);
  }

  const sendSol = () => {

  }


  return (
    <div className="flex flex-col justify-center relative items-center w-full h-full min-h-[calc(100vh-100px)] mx-auto bg-[url('/assets/images/home_bg.webp')] bg-cover bg-center pt-[180px]">
      <div className="container pb-16 px-10 z-10">
        <div className="flex flex-row w-full h-full max-h-[485px] justify-center items-center max-w-[1180px] mx-auto bg-black bg-[url('/assets/images/jackpot_bg.webp')] bg-cover bg-center p-10 rounded-[15px] border-[5px] border-[#C1D6E4] shadow-lg shadow-[#616E96] gap-5">
          <div className='flex flex-col w-full h-full justify-center items-center py-5 border-[5px] border-[#60A5FA] rounded-[15px] bg-gradient-to-t from-[#13286D] to-[#254DD3] shadow-lg shadow-[#254DD3] gap-7'>
            <p className="text-[45px] text-white uppercase">time until jackpot</p>
            <div className="w-full h-[128px] flex flex-col text-4xl justify-center items-center">
              Countdown
            </div>
            <div className="flex flex-col justify-center items-center w-full playpen">
              <div className='flex flex-row max-w-[400px] border-[5px] border-[#8CCFFC] rounded-[15px] bg-gradient-to-t from-[#67CCFF] to-[#0194DE] gap-2 p-2'>
                <div className='flex flex-row gap-1 justify-center items-center p-2 w-[180px] h-[70px] rounded-[13px] bg-[#0E7CB3]'>
                  <input
                    type="number"
                    value={solAmount.toFixed(2)}
                    onChange={handleChangeSolAmount}
                    min={0.1}
                    className='flex flex-col text-white text-[32px] px-1 py-2 bg-transparent outline-none w-[88px]'
                  />
                  <div className="flex flex-col justify-center items-center text-[#143F55] text-[20px]">
                    <FaAngleUp onClick={() => addSolAmount()} className='flex flex-col cursor-pointer' />
                    <FaAngleDown onClick={() => removeSolAmount()} className='flex flex-col cursor-pointer' />
                  </div>
                  <Image src={SolIcon} alt='SolIcon' width={44} height={44} className='flex flex-col w-11 h-11 rounded-full' />
                </div>
                <div onClick={() => sendSol()} className="flex flex-row justify-center items-center gap-1 px-3 py-2 rounded-[13px] bg-gradient-to-t from-[#264FD9] to-[#19348F] cursor-pointer">
                  <p className="text-[#CED6EF] text-[34px] uppercase">send</p>
                  <BsLightningFill className='text-[#0B2270] text-4xl' />
                </div>
              </div>
            </div>
            <p className="w-full flex flex-col justify-center items-center text-center text-sm playpen text-[#D1D5DB]/70">
              Entry: 0.1 - 1.5 SOL allowed
            </p>
          </div>
          <div className="flex flex-col w-full h-full max-w-[340px] max-h-[340px] justify-center items-center px-5 py-8 rounded-[15px] bg-gradient-to-t from-[#5C2999] to-[#9945FF] object-cover overflow-hidden gap-2">
            <div className="flex flex-row items-center justify-center gap-2 text-[40px] uppercase">
              <p className="text-white">current</p>
              <p className="text-[#FACC15]">pot</p>
            </div>
            <div className="flex flex-col w-full h-full justify-center items-center">
              <Image src={CurrentPotIcon} alt='CurrentPotIcon' width={86} height={94} className='flex flex-col w-[86px] h-[94px]' />
            </div>
            <div className="flex flex-row justify-center items-center w-full h-[85px] border-[5px] border-[#E5E0CB] bg-gradient-to-t from-[#94790C] to-[#FACC15] px-3 py-2 gap-2 rounded-[15px]">
              <div className="flex flex-col w-full max-w-[160px] h-[66px] border-[5px] border-[#EBE3C6] bg-[#514207] justify-center items-center text-[#FFFFFF]/80 rounded-[13px] text-[48px]">
                {currentSolAmount}
              </div>
              <p className=" text-white text-[48px] playpen uppercase font-semibold">
                sol
              </p>
            </div>
            <p className="w-full flex flex-row gap-2 justify-center items-center text-center text-sm playpen text-[#D1D5DB]/70">
              Last Winner: <strong>Hs82...3k9d</strong>
            </p>
            <p className="w-full flex flex-row gap-2 justify-center items-center text-center text-sm playpen text-[#D1D5DB]/70">
              Won: <strong>28.5 SOL</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 flex flex-col w-full h-[450px] bg-gradient-to-t from-[#083791] to-[#6453E5]/0">
      </div>
    </div>
  )
}
