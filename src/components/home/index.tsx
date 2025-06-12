"use client";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import UserContext from "@/context/UserContext";
import { stakingSolApi } from "@/program/web3";
import { useWallet } from "@solana/wallet-adapter-react";
import { errorAlert, successAlert } from "../others/Toast";
import { set } from "@coral-xyz/anchor/dist/cjs/utils/features";
import { useAuth } from "@/context/AuthContext";
import PotCard from "./PotCard";
import Leaderboard from "./Leaderboard";
import LiveFeed from "./LiveFeed";
import LiveGameStats from "./LiveGameStats";
import HowToplay from "./HowToplay";
import InviteTag from "./InviteTag";
import FAQ from "./FAQ";
import PlayNow from "./PlayNow";
import AdminModal from "../others/AdminModal";
import { fetchTX } from "@/utils/util";

export default function Index() {
  const account = useAuth();
  const {
    lastWiner,
    setLastWiner,
    winners,
    setWinners,
    stakers,
    setStakers,
    dailytotalSolWon,
    setDailyTotalSolWon,
    alltotalSolWon,
    setAllTotalSolWon,
    dailyroundsPlayed,
    setDailyRoundsPlayed,
    allroundsPlayed,
    setAllRoundsPlayed,
    allbiggestPrice,
    setAllBiggestPrice,
    dailybiggestPrice,
    setDailyBiggestPrice,
    potBalance,
    setPotBalance,
    dailyactivePlayers,
    setDailyActivePlayers,
    firstPlayer,
    setFirstPlayer,
    secondPlayer,
    setSecondPlayer,
    thirdPlayer,
    setThirdPlayer,

    progress,
    setProgress,
    allactivePlayers,
    setAllActivePlayers,
    firstPlayerSol,
    setFirstPlayerSol,
    secondPlayerSol,
    setSecondPlayerSol,
    thirdPlayerSol,
    setThirdPlayerSol,
    lastWinerSol,
    setLastWinerSol,

    adminModal,
    setAdminModal,
    lastSender,
    setLastSender,
    secondSender,
    setSecondSender,
    thirdSender,
    setThirdsender,
    gameIndex,
    setGameIndex,
    solAmount,
    setSolAmount,
    leftTime,
    setLeftTime,
    atStartTime,
    setAtStartTime,
    timeDuration,
    setTimeDuration,
  } = useContext(UserContext);
  const [currentSol, setCurrentSol] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const wallet = useWallet();

  interface GameStateInfo {
    gameId: number;
    potBalance: number;
    readableStartTime: string;
    lastSender: string;
    secondSender: string;
    thirdSender: string;
    timeDuration: number;
  }
  type CreatePoolApiResult = GameStateInfo | "WalletError" | false;

  // useEffect(() => {
  //   if (timeDuration > 0) {
  //     setTime(timeDuration);
  //   }
  // }, [timeDuration]);

  // useEffect(() => {
  //   if (time <= 0) return;
  //   if (progress) {
  //     const interval = setInterval(() => {
  //       setTime((prev) => {
  //         if (prev <= 1) {
  //           clearInterval(interval);
  //           return 0;
  //         }
  //         return prev - 1;
  //       });
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }
  // }, [time,progress]);

  // useEffect(()=>{
  //   const res = await
  // },[])

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("refresh....");
        const res = await fetchTX();
        if (!res) return;
        console.log("reult", res);
        setAtStartTime(res.data.startTime);
        setTimeDuration(res.data.timeDuration);
        setDailyRoundsPlayed(res.data.dailyroundsPlayed);
        setAllRoundsPlayed(res.data.allroundsPlayed);
        setDailyActivePlayers(res.data.dailyactivePlayers);
        setAllActivePlayers(res.data.allactivePlayers);
        setDailyTotalSolWon(res.data.dailytotalSolWon);
        setAllTotalSolWon(res.data.alltotalSolWon);
        setDailyBiggestPrice(res.data.dailybiggestPrice);
        setAllBiggestPrice(res.data.allbiggestPrice);
        setPotBalance(res.data.currentPot);
        setLastWiner(res.data.lastWiner);
        setWinners(res.data.winners);
        setStakers(res.data.stakers);
        ////||||
      } catch (err) {
        console.log("fetch res.err", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="relative flex flex-col justify-start items-center w-full h-full min-h-screen">
      <PotCard />
      <Leaderboard />
      <LiveFeed />
      <LiveGameStats />
      <HowToplay />
      <InviteTag />
      <FAQ />
      <PlayNow />
      {adminModal && <AdminModal />}
    </div>
  );
}

{
  /* <div className="flex flex-col gap-4 md:gap-8 w-full">
  <div className={`${border} p-5 flex flex-col gap-8`}>
    <div className="flex justify-center items-center gap-8">
      <div className="text-white">current sol {currentSol}</div>
      <div
        className="p-3 border border-[#28272C]/65 border-solid rounded-lg max-h-[42px] hover:scale-105 transition-all duration-200 hover:cursor-pointer"
        onClick={() => {
          stakingSol();
        }}
      >
        Staking SOL
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        Gamestate
        <div className="over-flow-hidden flex flex-row justify-center items-center p-2 border border-y-teal-500 border-dotted rounded-b-lg w-[500px]">
          <div className="text-[#03F5A5]">Game Room Number</div>
          <div className="mx-2 text-red-700"> : {account.gameIndex}</div>
        </div>
        <div className="over-flow-hidden flex flex-row justify-center items-center gap-5 p-2 border border-y-teal-500 border-dotted rounded-b-lg w-[500px]">
          <div className="text-[#03F5A5]">Staked SOL Amount</div>
          <div className="mx-2 text-red-700"> : {account.solAmount}</div>
        </div>
        <div className="over-flow-hidden flex flex-row justify-center items-center gap-5 p-2 border border-y-teal-500 border-dotted rounded-b-lg w-[500px]">
          <div className="text-[#03F5A5]">Left staking time</div>
          <div className="mx-2 text-red-700"> : {time}</div>
        </div>
        <div className="over-flow-hidden flex flex-row justify-center items-center gap-5 p-2 border border-y-teal-500 border-dotted rounded-b-lg w-[500px]">
          <div className="text-[#03F5A5]">Last Staker</div>
          <div className="mx-2 text-red-700"> : {account.lastSender}</div>
        </div>
        <div className="over-flow-hidden flex flex-row justify-center items-center gap-5 p-2 border border-y-teal-500 border-dotted rounded-b-lg w-[500px]">
          <div className="mx-2 text-[#03F5A5]">Second Staker</div>
          <div className="text-red-700"> : {account.secondSender}</div>
        </div>
        <div className="over-flow-hidden flex flex-row justify-center items-center gap-5 p-2 border border-y-teal-500 border-dotted rounded-b-lg w-[500px]">
          <div className="text-[#03F5A5]">Third Staker</div>
          <div className="mx-2 text-red-700">
            {" "}
            : {account.thirdSender}
          </div>
        </div>
        <div className="over-flow-hidden flex flex-row justify-center items-center gap-5 p-2 border border-y-teal-500 border-dotted rounded-b-lg w-[500px]">
          <div className="text-[#03F5A5]">Start time</div>
          <div className="mx-2 text-red-700">
            {" "}
            : {account.atStartTime}
          </div>
        </div>
        <div className="over-flow-hidden flex flex-row justify-center items-center gap-5 p-2 border border-y-teal-500 border-dotted rounded-b-lg w-[500px]">
          <div className="text-[#03F5A5]">Time duratrion</div>
          <div className="mx-2 text-red-700">
            {" "}
            : {account.timeDuration}
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-row justify-between items-center gap-3 p-10 border border-[#28272C]/65">
      <div
        className="flex justify-center items-center p-1 border border-[#2878C8] border-solid rounded-lg text-[10px] hover:scale-105 transition-all duration-300 hover:cursor-pointer"
        onClick={() => setCurrentSol(100_000_000)}
      >
        0.1 SOL
      </div>
      <div
        className="flex justify-center items-center p-1 border border-[#2878C8] border-solid rounded-lg text-[10px] hover:scale-105 transition-all duration-300 hover:cursor-pointer"
        onClick={() => setCurrentSol(300_000_000)}
      >
        0.3 SOL
      </div>
      <div
        className="flex justify-center items-center p-1 border border-[#2878C8] border-solid rounded-lg text-[10px] hover:scale-105 transition-all duration-300 hover:cursor-pointer"
        onClick={() => setCurrentSol(500_000_000)}
      >
        0.5 SOL
      </div>
      <div
        className="flex justify-center items-center p-1 border border-[#2878C8] border-solid rounded-lg text-[10px] hover:scale-105 transition-all duration-300 hover:cursor-pointer"
        onClick={() => setCurrentSol(1_000_000_000)}
      >
        1 SOL
      </div>
      <div
        className="flex justify-center items-center p-1 border border-[#2878C8] border-solid rounded-lg text-[10px] hover:scale-105 transition-all duration-300 hover:cursor-pointer"
        onClick={() => setCurrentSol(5_000_000_000)}
      >
        5 SOL
      </div>
    </div>
  </div>
</div> */
}
