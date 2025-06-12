import React, { useEffect, useState } from "react";
import LiveFeedCard from "../others/LiveFeedCard";
import { liveFeedTestData } from "@/config/ConfigData";

export default function LiveFeed() {
  const [data, setData] = useState<any[]>();

  // const getData = () => {
  //   try {

  //   } catch (error) {

  //   }
  // }

  // useEffect(() => {
  //   getData()
  // }, [])

  // useEffect(() => {
  //   if (socket) {
  //     setData((prev) => [[socket, ...prev]]);
  //   }
  // }, [socket]);

  return (
    <div className="flex flex-col justify-center items-center px-4 py-9 md:py-16 w-full h-full">
      <div className="mx-auto w-full max-w-[1000px] h-full">
        <div className="flex flex-col justify-center items-start gap-6 w-full">
          <p className="flex flex-col font-bold text-[28px] text-white/80 sm:text-[36px] uppercase">
            live feed
          </p>
          <div className="flex flex-col bg-[#07245C] shadow-black/50 shadow-xl border-[#2F88D4] border-[3px] sm:border-[5px] rounded-[8px] sm:rounded-[15px] w-full max-h-[365px] md:max-h-[625px] object-cover overflow-hidden">
            <div className="flex flex-col gap-2 sm:gap-4 px-3 sm:px-12 py-2 sm:py-4 w-full h-full overflow-y-scroll">
              {liveFeedTestData.map((item, index) => (
                <LiveFeedCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
