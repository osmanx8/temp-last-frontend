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
    <div className='w-full h-full flex flex-col justify-center items-center py-14'>
      <div className="container">
        <div className="flex flex-col w-full max-w-[768px] h-[248px] rounded-[15px] bg-gradient-to-tl from-[#2563EB] to-[#9333EA] justify-center items-center gap-2 px-7 mx-auto">
          <p className="flex flex-col w-full justify-center items-center text-center text-white text-[30px] uppercase">INVITE FRIENDS & EARN</p>
          <div className="flex flex-row gap-3 justify-center items-center w-full">
            <div className="flex flex-col w-full h-[65px] rounded-lg bg-white/10 justify-center items-center px-3 py-5 text-[#E5E7EB] text-[24px] playpen">
              {InviteLink}
            </div>
            <div onClick={() => copyToClipBoard(InviteLink ?? '')} className="flex flex-row bg-gradient-to-t from-[#162D7B] to-[#2852E1] rounded-[15px] border-[5px] border-[#83D6F9] justify-center items-center w-full max-w-[200px] h-[77px] text-white gap-3 cursor-pointer">
              <LuClipboardCopy className='text-3xl' />
              <p className="text-[24px] uppercase playpen">copy</p>
            </div>
          </div>
          <span className="flex flex-col text-[#D1D5DB] text-sm w-full text-center">
            Earn 5% of what your friends deposit!
          </span>
          <div className="flex flex-row justify-center w-full items-center gap-2">
            <span className="flex flex-col text-[#D1D5DB] text-sm text-center playpen">
              You have earned:
            </span>
            <span className="text-xl text-[#FDE047]">
              2.8 SOL
            </span>
            <span className="flex flex-col text-[#D1D5DB] text-sm text-center playpen">
              from referrals
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
