import React from "react";
import { HowToPlayCard } from "../others/HowToPlayCard";
import { HowToPlayData } from "@/config/ConfigData";

export default function HowToplay() {
  return (
    <div className="flex flex-col justify-center items-center gap-9 md:gap-16 px-4 py-10 md:py-28 w-full h-full">
      <div className="container">
        <div className="flex flex-col justify-center items-center gap-4 sm:gap-7 md:gap-16 w-full h-full">
          <p className="flex flex-col justify-center items-center w-full text-[#9945FF] text-[32px] sm:text-[36px] md:text-[48px] text-center uppercase">
            How to play
          </p>
          <div className="flex md:flex-row flex-col justify-center items-center bg-gradient-to-t from-[#162D7B] to-[#2852E1] shadow-[-5px_5px_0px_#1B5DB1,8px_12px_20px_rgba(0,0,0,0.4),inset_8px_-8px_8px_#00000022,inset_-8px_8px_8px_#ffffff22] px-4 lg:px-20 py-4 md:py-10 border-[#83D6F9] border-[3px] md:border-[5px] rounded-[8px] md:rounded-[15px] w-full h-full">
            {HowToPlayData.map((item, index) => (
              <HowToPlayCard
                key={index}
                id={item.id}
                title={item.title}
                text={item.text}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
