import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  index: number;
  address: string;
  reward: number;
  image: StaticImageData;
}

export default function KingCard({ index, address, reward, image }: Props) {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-t from-[#162D7B] to-[#2852E1] shadow-[-5px_5px_0px_#1B5DB1,8px_12px_20px_rgba(0,0,0,0.4),inset_8px_-8px_8px_#00000022,inset_-8px_8px_8px_#ffffff22] border-[#83D6F9] border-[5px] rounded-[15px] w-full max-w-[325px] h-[190px]">
      <div className="bg-clip-text bg-gradient-to-t from-[#9F9F9F] to-[#FFFFFF] font-bold text-[24px] text-transparent sm:text-[32px] uppercase">
        {Number(index + 1)}st place
      </div>
      <div className="text-white text-sm sm:text-base playpen">
        {address.slice(0, 5)}...{address.slice(-5)}
      </div>
      <div className="relative flex flex-row justify-center items-center mt-3">
        <div className="flex flex-col justify-center items-start bg-[url('/assets/images/blue_button.webp')] px-5 w-[168px] h-[70px] text-[#015D8B] text-[26px] uppercase">
          {reward.toFixed(2)} sol
        </div>
        <Image
          src={image}
          alt="King1"
          width={80}
          height={96}
          className={`${
            index === 1
              ? "right-[-32px] top-[-16] w-16"
              : "right-[-44px] bottom-0 w-20"
          } absolute flex`}
        />
      </div>
    </div>
  );
}
