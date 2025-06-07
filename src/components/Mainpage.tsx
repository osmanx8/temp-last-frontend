"use client";
import Link from "next/link";
import { useContext, useRef, useState } from "react";
import UserContext from "@/context/usercontext";
import { stakingSolApi } from "@/program/web3";
import { useWallet } from "@solana/wallet-adapter-react";
import { errorAlert, successAlert } from "./Toast";
import { set } from "@coral-xyz/anchor/dist/cjs/utils/features";

export default function Mainpage() {
  const [currentSol, setCurrentSol] = useState<number>(0);
  const wallet = useWallet();
  const {
    gameIndex,
    setGameIndex,
    solAmount,
    setSolAmount,
    leftTime,
    setLeftTime,
    lastSender,
    setLastSender,
    secondSender,
    setSecondSender,
    thirdSender,
    setThirdsender,
  } = useContext(UserContext);
  const border =
    "rounded-2xl border border-[rgba(63,62,67,0.40)] bg-[rgba(19,18,23,0.32)] lg:backdrop-blur-[24px]";

  const stakingSol = async () => {
    const res = await stakingSolApi(wallet, currentSol);
    if (res !== "WalletError" || !res) {
      errorAlert("stake sol was failed.");
    } else {
      if (typeof res === "number") {
        // setGameIndex();
        // setSolAmount;
        // setLeftTime;
        // setLastSender;
        // setSecondSender;
        // setThirdsender;
      }

      successAlert("stake sol success!");
      return;
    }
  };

  return (
    <div className="flex lg:flex-row justify-between items-center mt-[300px] w-full lg:max-w-[800px] 2xl:max-w-[1000px] xl:max-w-[1200px] twin-container">
      <Link href="/admin" className="font-bold text-lg md:text-xl">
        Go to Admin page
      </Link>
      <div className="flex flex-col gap-4 md:gap-8 w-full">
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
              <div className="flex flex-row justify-center items-center p-2 border border-y-teal-500 border-dotted rounded-b-lg w-[200px]">
                <div className="text-[#03F5A5]">Game Room Number</div>
                <div className="mx-2 text-red-700"> : {gameIndex}</div>
              </div>
              <div className="flex flex-row justify-center items-center gap-5 p-2 border border-y-teal-500 border-dotted rounded-b-lg w-[200px]">
                <div className="text-[#03F5A5]">Staked SOL Amount</div>
                <div className="mx-2 text-red-700"> : {solAmount}</div>
              </div>
              <div className="flex flex-row justify-center items-center gap-5 p-2 border border-y-teal-500 border-dotted rounded-b-lg w-[200px]">
                <div className="text-[#03F5A5]">Left staking time</div>
                <div className="mx-2 text-red-700"> : {leftTime}</div>
              </div>
              <div className="flex flex-row justify-center items-center gap-5 p-2 border border-y-teal-500 border-dotted rounded-b-lg w-[200px]">
                <div className="text-[#03F5A5]">Last Staker</div>
                <div className="mx-2 text-red-700"> : {lastSender}</div>
              </div>
              <div className="flex flex-row justify-center items-center gap-5 p-2 border border-y-teal-500 border-dotted rounded-b-lg w-[200px]">
                <div className="mx-2 text-[#03F5A5]">Second Staker</div>
                <div className="text-red-700"> : {secondSender}</div>
              </div>
              <div className="flex flex-row justify-center items-center gap-5 p-2 border border-y-teal-500 border-dotted rounded-b-lg w-[200px]">
                <div className="text-[#03F5A5]">Third Staker</div>
                <div className="mx-2 text-red-700"> : {thirdSender}</div>
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
      </div>
    </div>
  );
}
