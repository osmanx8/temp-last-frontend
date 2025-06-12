import React, { useEffect, useState } from "react";
import KingCard from "../others/KingCard";
import { kingCardTestData } from "@/config/ConfigData";
import { KingCardData } from "@/utils/types";
import { getLeaderBoardData } from "@/api";

export default function Leaderboard() {
  const [isCurrentShow, setShowCurrent] = useState<boolean>(true);
  const [currentData, setCurrentData] = useState<
    Array<{ user: string; solAmount: number }>
  >([]);
  const [allTimeData, setAllTimeData] = useState<
    Array<{ user: string; solAmount: number }>
  >([]);

  useEffect(() => {
    getLeaderBoard();
  }, []);
  const getLeaderBoard = async () => {
    const data = await getLeaderBoardData();
    console.log("🚀 ~ getLeaderBoard ~ data:", data);
    if (!data) return;
    setCurrentData(data.currentRound);
    setAllTimeData(data.allTime);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6 sm:gap-16 px-4 py-12 sm:py-28 w-full h-full">
      <p className="font-extrabold text-[#FACC15] text-[36px] sm:text-[48px] text-center uppercase">
        leaderboard
      </p>
      <div className="relative flex flex-row justify-center items-center gap-2 bg-gradient-to-t from-[#67CCFF] to-[#0194DE] shadow-[-6px_6px_0px_#1B5DB1,8px_12px_20px_rgba(0,0,0,0.4),inset_8px_-8px_8px_#00000022,inset_-8px_8px_8px_#ffffff22] px-2 py-1 border-[#8CCFFC] border-[3px] sm:border-[5px] rounded-[8px] sm:rounded-[13px] max-w-[360px]">
        <div
          onClick={() => setShowCurrent(false)}
          className={`${
            isCurrentShow
              ? ""
              : "bg-gradient-to-t from-[#264FD9] to-[#19348F] shadow-[inset_8px_-8px_8px_#00000022,inset_-8px_8px_8px_#ffffff22]"
          } flex flex-col rounded-[8px] sm:rounded-[13px] w-[115px] sm:w-[155px] py-2 md:py-4 h-full justify-center items-center text-[#CED6EF] playpen z-10 cursor-pointer font-semibold text-xl`}
        >
          All-Time
        </div>
        <div
          onClick={() => setShowCurrent(true)}
          className={`${
            isCurrentShow
              ? "bg-gradient-to-t from-[#264FD9] to-[#19348F] shadow-[inset_8px_-8px_8px_#00000022,inset_-8px_8px_8px_#ffffff22]"
              : ""
          } flex flex-col rounded-[8px] sm:rounded-[13px] w-[135px] sm:w-[175px] py-2 md:py-4 h-full justify-center items-center text-[#CED6EF] playpen z-10 cursor-pointer font-semibold text-xl`}
        >
          Current Round
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-[92px] w-full">
        {(isCurrentShow ? currentData : allTimeData).map(
          ({ user, solAmount }, index: number) => (
            <KingCard
              key={index}
              image={kingCardTestData[index]?.image}
              address={user}
              reward={solAmount}
              index={index}
            />
          )
        )}
      </div>
    </div>
  );
}
