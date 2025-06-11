import React, { useState } from 'react'
import Image from 'next/image';
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { BsLightningFill } from "react-icons/bs";
import SolIcon from "@/../public/assets/images/sol-icon.webp"
import CurrentPotIcon from "@/../public/assets/images/current_top.webp"
import Countdown from '../others/Countdown';

export default function PotCard() {
  const [solAmount, setSolAmount] = useState<number>(0)
  const [currentSolAmount, setCuttenSolAmount] = useState<number>(42.54)
  const [currentJackpotTime, setCurrentJackpotTime] = useState<Date>(new Date(new Date().getTime() + 10 * 60 * 1000))

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
    <div className="flex flex-col justify-center relative items-center w-full h-full min-h-[calc(100vh-100px)] mx-auto bg-[url('/assets/images/home_bg.webp')] bg-cover bg-center pt-32 lg:pt-[180px]">
      <div className="container pb-16 px-4 sm:px-6 md:px-10 z-10 relative">
        <div className="flex flex-col lg:flex-row w-full h-full lg:max-h-[485px] justify-center items-center max-w-[1180px] mx-auto bg-black bg-[url('/assets/images/jackpot_bg.webp')] bg-cover bg-center p-3 sm:p-5 md:p-10 rounded-[15px] border-[3px] md:border-[5px] border-[#C1D6E4] shadow-[0px_10px_0px_#2B3248,8px_12px_20px_rgba(0,0,0,1),inset_8px_-8px_8px_#00000022,inset_-8px_8px_8px_#ffffff22] transition-transform active:translate-y-[16px] gap-5">
          <div className="p-[5px] rounded-[15px] bg-gradient-to-tr from-[#80B4F4] to-[#60A5FA] shadow-[0px_6px_0px_#1252A4,8px_12px_20px_rgba(0,0,0,1),inset_8px_-8px_8px_#00000022,inset_-12px_12px_8px_#ffffff44] transition-transform active:translate-y-[16px] w-full">
            <div className="flex flex-col w-full h-full justify-center items-center py-3 md:py-5 rounded-[10px] bg-gradient-to-t from-[#13286D] to-[#254DD3] gap-4 md:gap-7">
              <p className="text-[20px] sm:text-[28px] md:text-[45px] text-white uppercase">time until jackpot</p>
              <div className="w-full h-[100px] md:h-[128px] flex flex-col text-4xl justify-center items-center">
                <Countdown targetTime={currentJackpotTime.getTime()} />
              </div>
              <div className="flex flex-col justify-center items-center w-full playpen">
                <div className='flex flex-col sm:flex-row max-w-[400px] border-[3px] md:border-[5px] border-[#8CCFFC] rounded-[8px] md:rounded-[15px] bg-gradient-to-t from-[#67CCFF] to-[#0194DE] gap-2 p-2 shadow-[-4px_4px_0px_#1B5DB1,8px_12px_20px_rgba(0,0,0,0.4)]'>
                  <div className='flex flex-row gap-1 justify-center items-center p-2 w-full  max-w-[180px] h-[48px] md:h-[70px] rounded-[13px] bg-[#0E7CB3]'>
                    <input
                      type="number"
                      value={solAmount.toFixed(2)}
                      onChange={handleChangeSolAmount}
                      min={0.1}
                      className='flex flex-col text-white text-[24px] md:text-[32px] px-1 py-1 md:py-2 bg-transparent outline-none w-[88px]'
                    />
                    <div className="flex flex-col justify-center items-center text-[#143F55] text-[20px]">
                      <FaAngleUp onClick={() => addSolAmount()} className='flex flex-col cursor-pointer' />
                      <FaAngleDown onClick={() => removeSolAmount()} className='flex flex-col cursor-pointer' />
                    </div>
                    <Image src={SolIcon} alt='SolIcon' width={44} height={44} className='flex flex-col w-8 h-8 md:w-11 md:h-11 rounded-full' />
                  </div>
                  <div
                    onClick={() => sendSol()}
                    className="flex flex-row justify-center items-center gap-1 px-3 py-2 rounded-[13px] bg-gradient-to-t from-[#264FD9] to-[#19348F] cursor-pointer shadow-[inset_8px_-8px_8px_#00000022,inset_-8px_8px_8px_#ffffff22]"
                  >
                    <p className="text-[#CED6EF] text-[20px] md:text-[34px] uppercase">send</p>
                    <BsLightningFill className="text-[#0B2270] text-2xl md:text-4xl" />
                  </div>
                </div>
              </div>
              <p className="w-full flex flex-col justify-center items-center text-center text-sm playpen text-[#D1D5DB]/70">
                Entry: 0.1 - 1.5 SOL allowed
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full h-full max-w-[340px] max-h-[340px] justify-center items-center px-5 py-8 rounded-[15px] bg-gradient-to-t from-[#5C2999] to-[#9945FF] object-cover overflow-hidden gap-2 border-[5px] border-[#60A5FA] shadow-[0px_6px_0px_#1252A4,8px_12px_20px_rgba(0,0,0,1),inset_8px_-8px_8px_#00000022,inset_-8px_8px_8px_#ffffff22] transition-transform active:translate-y-[16px]">
            <div className="flex flex-row items-center justify-center gap-2 text-[32px] sm:text-[40px] uppercase">
              <p className="text-white">current</p>
              <p className="text-[#FACC15]">pot</p>
            </div>
            <div className="flex flex-col w-full h-full justify-center items-center">
              <Image src={CurrentPotIcon} alt='CurrentPotIcon' width={86} height={94} className='flex flex-col w-[86px] h-[94px]' />
            </div>
            <div className="flex flex-row justify-center items-center md:w-full h-[68px] md:h-[85px] border-[5px] border-[#E5E0CB] bg-gradient-to-t from-[#94790C] to-[#FACC15] px-3 py-2 gap-2 rounded-[15px] shadow-[-4px_4px_0px_#767265,8px_12px_20px_rgba(0,0,0,1), inset_8px_-8px_8px_#00000022,inset_-8px_8px_8px_#ffffff22] transition-transform active:translate-y-[16px]">
              <div className="flex flex-col w-[125px] md:max-w-[160px] h-[52px] md:h-[66px] border-[5px] border-[#EBE3C6] bg-[#514207] justify-center items-center text-[#FFFFFF]/80 rounded-[13px] md:text-[48px] text-[28px]">
                {currentSolAmount}
              </div>
              <p className=" text-white text-[28px] md:text-[48px] playpen uppercase font-semibold">
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
    </div >
  )
}
