import { InviteLink } from '@/config/ConfigData';
import React, { useState } from 'react'
import { LuClipboardCopy } from "react-icons/lu";
import { successAlert } from '../others/Toast';

export default function InviteTag() {
  const [copySuccess, setCopySuccess] = useState<string>();

  const copyToClipBoard = async (copyMe: string) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess('Copied!');
      successAlert("Copied!")
    }
    catch (err) {
      setCopySuccess('Failed to copy!');
    }
  };

  return (
    <div className='w-full h-full flex flex-col justify-center items-center py-8 md:py-14 px-4'>
      <div className="container">
        <div className="flex flex-col w-full max-w-[546px] md:max-w-[768px] h-[248px] rounded-[15px] bg-gradient-to-tl from-[#2563EB] to-[#9333EA] justify-center items-center gap-2 px-4 md:px-7 mx-auto shadow-[inset_8px_-8px_8px_#00000022,inset_-8px_8px_8px_#ffffff22]">
          <p className="flex flex-col w-full justify-center items-center text-center text-white text-[24px] sm:text-[30px] uppercase">INVITE FRIENDS & EARN</p>
          <div className="flex flex-row gap-3 justify-center items-center w-full">
            <div className="flex flex-col w-full max-w-[400px] h-[45px] md:h-[65px] rounded-lg bg-white/10 justify-center items-start px-3 py-5 text-[#E5E7EB] text-lg md:text-[24px] playpen object-cover overflow-hidden">
              {InviteLink}
            </div>
            <div onClick={() => copyToClipBoard(InviteLink ?? '')} className="flex flex-row bg-gradient-to-t from-[#162D7B] to-[#2852E1] rounded-[15px] border-[5px] border-[#83D6F9] justify-center items-center w-full max-w-[120px] md:max-w-[200px] h-[47px] md:h-[77px] text-white gap-3 cursor-pointer">
              <LuClipboardCopy className='text-xl md:text-3xl' />
              <p className="text-base md:text-[24px] uppercase playpen">copy</p>
            </div>
          </div>
          <span className="flex flex-col text-[#D1D5DB] text-xs sm:text-sm w-full text-center">
            Earn 5% of what your friends deposit!
          </span>
          <div className="flex flex-row justify-center w-full items-center gap-2">
            <span className="flex flex-col text-[#D1D5DB] text-xs sm:text-sm text-center playpen">
              You have earned:
            </span>
            <span className="text-base sm:text-xl text-[#FDE047]">
              2.8 SOL
            </span>
            <span className="flex flex-col text-[#D1D5DB] text-xs sm:text-sm text-center playpen">
              from referrals
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
