import React from "react";

interface Props {
  amount: number;
  title: string;
  text: string;
}

export default function LiveGameStatsCard({ amount, title, text }: Props) {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-t from-[#105D90] to-[#1C9FF6] shadow-[-5px_5px_0px_#1B5DB1,8px_12px_20px_rgba(0,0,0,0.4),inset_8px_-8px_8px_#00000022,inset_-8px_8px_8px_#ffffff22] py-4 sm:py-5 md:py-7 lg:py-10 border-[#83D6F9] border-[5px] rounded-[15px] w-full max-w-[512px] h-full max-h-[415px]">
      <div className="flex flex-col justify-center items-center gap-4 h-full">
        <p className="text-[#FFE815] text-[58px] md:text-[88px] lg:text-[120px]">
          {amount}
        </p>
        <p className="text-[32px] text-white sm:text-[36px] md:text-[40px] uppercase palypen">
          {title}
        </p>
        <p className="text-[24px] text-white/60 sm:text-[28px] md:text-[32px] palypen">
          {text}
        </p>
      </div>
    </div>
  );
}
