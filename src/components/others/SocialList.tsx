'use client'

import React, { useContext, useEffect, useState } from 'react'
import { SocialLinks } from '@/config/ConfigData'
import { RiAddLargeFill } from "react-icons/ri";
import { AdminWallet } from '@/config/ConfigData';
import { useWallet } from '@solana/wallet-adapter-react';
import UserContext from '@/context/UserContext';

export default function SocialList() {
  const { publicKey } = useWallet();
  const { setAdminModal } = useContext(UserContext);
  const [admin, setAdmin] = useState<boolean>(false)

  useEffect(() => {
    if (publicKey?.toBase58() !== "" && publicKey?.toBase58() !== undefined) {
      if (AdminWallet === publicKey?.toBase58()) {
        setAdmin(true)
      } else {
        setAdmin(false)
      }
    }
  }, [publicKey]);

  return (
    <div className='flex flex-row items-center gap-3 md:gap-6 justify-center'>
      {SocialLinks.map((item, index) => (
        <div key={index} className="flex flex-col relative justify-center items-center cursor-pointer w-[32px] h-[32px] md:w-[48px] md:h-[48px] md2:w-[67px] md2:h-[67px]">
          <div className="w-[32px] h-[32px] md:w-[48px] md:h-[48px] md2:w-[67px] md2:h-[67px] bg-[#1B5DB1] absolute top-0.5 right-0.5 md:top-1 md:right-1 rounded-[8px] md:rounded-[15px]"></div>
          <div className='border-[2px] md:border-[5px] p-1 rounded-[8px] md:rounded-[15px] border-[#60A5FA] bg-gradient-to-b from-[#234ACB] to-[#112565] w-[32px] h-[32px] md:w-[48px] md:h-[48px] md2:w-[67px] md2:h-[67px] justify-center items-center flex flex-col text-white text-xl md2:text-3xl z-10'>
            {item.icon}
          </div>
        </div>
      ))}

      {
        admin &&
        <div onClick={() => setAdminModal(true)} className="flex flex-col relative justify-center items-center cursor-pointer w-[32px] h-[32px] md:w-[48px] md:h-[48px] md2:w-[67px] md2:h-[67px]">
          <div className="w-[32px] h-[32px] md:w-[48px] md:h-[48px] md2:w-[67px] md2:h-[67px] bg-[#1B5DB1] absolute top-0.5 right-0.5 md:top-1 md:right-1 rounded-[8px] md:rounded-[15px]"></div>
          <div className='border-[2px] md:border-[5px] p-1 rounded-[8px] md:rounded-[15px] border-[#60A5FA] bg-gradient-to-b from-[#234ACB] to-[#112565] w-[32px] h-[32px] md:w-[48px] md:h-[48px] md2:w-[67px] md2:h-[67px] justify-center items-center flex flex-col text-white text-xl md2:text-3xl z-10'>
            <RiAddLargeFill />
          </div>
        </div>
      }
    </div>
  )
}
