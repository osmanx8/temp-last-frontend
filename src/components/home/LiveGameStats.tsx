import React, { useEffect, useState } from "react";
import LiveGameStatsCard from "../others/LiveGameStatsCard";
import { getGameStats } from "@/api";
import { io, Socket } from "socket.io-client";

let socket: Socket | undefined = undefined;
if (typeof window !== "undefined") {
  socket = io(process.env.NEXT_PUBLIC_BACKEND_URL!);
}

export default function LiveGameStats() {
  const [filterData, setFilterData] = useState<boolean>(false);
  const [isDaily, setIsDaily] = useState<boolean>(true);
  const [dailyStats, setDailyStats] = useState<{
    rounds: number;
    playerNum: number;
    totalSolWon: number;
    biggestNum: number;
  }>();
  const [allTimeStats, setAllTimeStats] = useState<{
    rounds: number;
    playerNum: number;
    totalSolWon: number;
    biggestNum: number;
  }>();

  useEffect(() => {
    getGameStatshandle();
  }, []);

  const getGameStatshandle = async () => {
    const data = await getGameStats();
    console.log("live game stats", data);
    if (!data) return;

    setDailyStats({
      rounds: data.dayGameStats.roundPlayed,
      playerNum: data.dayGameStats.activePlayers,
      totalSolWon: Number(data.dayGameStats.totalSolWon.toFixed(4)),
      biggestNum: Number(data.dayGameStats.biggestWon.toFixed(4)),
    });

    setAllTimeStats({
      rounds: data.allgameStats.roundPlayed,
      playerNum: data.allgameStats.activePlayers,
      totalSolWon: Number(data.allgameStats.totalSolWon.toFixed(4)),
      biggestNum: Number(data.allgameStats.biggestWon.toFixed(4)),
    });
  };

  if (socket) {
    socket.on("stakeSol", async () => {
      console.log("socket event in Live Game Stats");
      await getGameStatshandle();
    });

    socket.on("disconnect", (reason) => {
      console.log("[socket] Disconnected:", reason);
    });

    socket.on("connect_error", (error) => {
      if (socket!.active) {
        // temporary failure, the socket will automatically try to reconnect
      } else {
        // the connection was denied by the server
        // in that case, `socket.connect()` must be manually called in order to reconnect
        console.log("[socket] Error:", error.message);
      }
    });
  }

  const stats = isDaily ? dailyStats : allTimeStats;

  return (
    <div className="flex flex-col justify-center items-center px-4 py-9 md:py-16 w-full h-full">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="flex flex-col justify-center items-center gap-6 md:gap-16 w-full h-full">
          <p className="flex flex-col w-full text-[#FACC15] text-[32px] sm:text-38px md:text-[55px] text-center uppercase">
            Live Game stats
          </p>
          <div className="relative flex flex-row justify-center items-center gap-2 bg-gradient-to-t from-[#67CCFF] to-[#0194DE] shadow-[-6px_6px_0px_#1B5DB1,8px_12px_20px_rgba(0,0,0,0.4),inset_8px_-8px_8px_#00000022,inset_-8px_8px_8px_#ffffff22] px-2 py-1 border-[#8CCFFC] border-[3px] sm:border-[5px] rounded-[8px] sm:rounded-[13px] max-w-[360px]">
            <div
              onClick={() => setIsDaily(true)}
              className={`${
                isDaily
                  ? "bg-gradient-to-t from-[#264FD9] to-[#19348F] shadow-[inset_8px_-8px_8px_#00000022,inset_-8px_8px_8px_#ffffff22]"
                  : ""
              } flex flex-col rounded-[8px] sm:rounded-[13px] w-[135px] sm:w-[175px] py-2 md:py-4 h-full justify-center items-center text-[#CED6EF] playpen z-10 cursor-pointer font-semibold text-xl`}
            >
              Daily
            </div>
            <div
              onClick={() => setIsDaily(false)}
              className={`${
                isDaily
                  ? ""
                  : "bg-gradient-to-t from-[#264FD9] to-[#19348F] shadow-[inset_8px_-8px_8px_#00000022,inset_-8px_8px_8px_#ffffff22]"
              } flex flex-col rounded-[8px] sm:rounded-[13px] w-[115px] sm:w-[155px] py-2 md:py-4 h-full justify-center items-center text-[#CED6EF] playpen z-10 cursor-pointer font-semibold text-xl`}
            >
              All-Time
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 md:gap-9 bg-gradient-to-t from-[#162D7B] to-[#2852E1] shadow-[-5px_5px_0px_#1B5DB1,8px_12px_20px_rgba(0,0,0,0.4),inset_8px_-8px_8px_#00000022,inset_-8px_8px_8px_#ffffff22] p-2.5 md:p-[28px] lg:p-[50px] border-[#83D6F9] border-[5px] rounded-[15px] w-full h-full">
            <div className="flex sm:flex-row flex-col justify-center items-center gap-3 md:gap-9 w-full">
              <LiveGameStatsCard
                amount={stats?.rounds ?? 0}
                title="Rounds Played"
                text={isDaily ? "Today" : "All-Time"}
              />
              <LiveGameStatsCard
                amount={stats?.playerNum ?? 0}
                title="Active Players"
                text={isDaily ? "Today" : "All-Time"}
              />
            </div>
            <div className="flex sm:flex-row flex-col justify-center items-center gap-3 md:gap-9 w-full">
              <LiveGameStatsCard
                amount={stats?.totalSolWon ?? 0}
                title="Total sol won!!"
                text={isDaily ? "Today" : "All-Time"}
              />
              <LiveGameStatsCard
                amount={stats?.biggestNum ?? 0}
                title="Biggest Price"
                text={isDaily ? "Today" : "All-Time"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
