/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useContext, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { claimApi, createPoolApi, initializeApi } from "@/program/web3";
import { errorAlert, successAlert } from "@/components/Toast";
import { useAuth } from "@/context/AuthContext";

export default function Admin() {
  const account = useAuth();

  const wallet = useWallet();
  const [gameTime, setGameTime] = useState(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGameTime(Number(e.target.value));
  };

  //creatre pool
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
  const createPool = async () => {
    console.log("click create pool");
    const res: CreatePoolApiResult = await createPoolApi(wallet, gameTime);
    if (res == "WalletError" || !res) {
      errorAlert("createPool was failed.");
      return;
    } else {
      console.log("success create pool", res);
      successAlert("createPool success!");
      const {
        gameId,
        potBalance,
        readableStartTime,
        lastSender,
        secondSender,
        thirdSender,
        timeDuration,
      } = res;
      account.setGameIndexs(gameId);
      account.setSolAmounts(potBalance);
      account.setLastSenders(lastSender);
      account.setSecondSenders(secondSender);
      account.setThirdsenders(thirdSender);
      account.setAtStartTimes(readableStartTime);
      account.setTimeDurations(timeDuration);
      return;
    }
  };
  const initialize = async () => {
    const res = await initializeApi(wallet);
    if (res == "WalletError" || !res) {
      errorAlert("initialize was failed.");
      return;
    }
    successAlert("initialize success!");
    return;
  };

  const claim = async () => {
    console.log("clicked claim");
    const res: CreatePoolApiResult = await claimApi(wallet);
    if (res == "WalletError" || !res) {
      errorAlert("initialize was failed.");
      return;
    }
    successAlert("initialize success!");
    const {
      gameId,
      potBalance,
      readableStartTime,
      lastSender,
      secondSender,
      thirdSender,
      timeDuration,
    } = res;
    account.setGameIndexs(gameId);
    account.setSolAmounts(potBalance);
    account.setLastSenders(lastSender);
    account.setSecondSenders(secondSender);
    account.setThirdsenders(thirdSender);
    account.setAtStartTimes(readableStartTime);
    account.setTimeDurations(timeDuration);
    account.setProgresss(false);
  };
  return (
    <>
      <Link href="/" className="font-bold text-lg md:text-xl">
        Back Home
      </Link>
      <div className="flex justify-center items-center gap-5">
        <div className="flex justify-center items-center p-1 border border-[#2878C8] border-solid rounded-lg text-[10px] hover:scale-105 transition-all duration-300 hover:cursor-pointer">
          Create Game room
          <div className="flex flex-row justify-center items-center">
            <div className="text-[#03F5A5">Set time : </div>
          </div>
          <input
            type="number"
            className="self-stretch bg-transparent outline-none overflow-hidden font-['Inconsolata'] font-medium text-white text-base leading-normal grow shrink basis-0 placeholder-[#2f3132]"
            placeholder="Enter game time"
            value={gameTime}
            onChange={handleChange}
          />
          <div
            className="flex justify-center items-center p-1 border border-[red] border-solid rounded-lg text-[10px] hover:scale-105 transition-all duration-300 hover:cursor-pointer"
            onClick={() => {
              createPool();
            }}
          >
            ok
          </div>
        </div>
        <div
          className="flex justify-center items-center p-1 border border-[#2878C8] border-solid rounded-lg text-[10px] hover:scale-105 transition-all duration-300 hover:cursor-pointer"
          onClick={() => {
            initialize();
          }}
        >
          Initialize
        </div>
        <div
          className="flex justify-center items-center p-1 border border-[#2878C8] border-solid rounded-lg text-[10px] hover:scale-105 transition-all duration-300 hover:cursor-pointer"
          onClick={() => {
            claim();
          }}
        >
          Claim
        </div>
      </div>
    </>
  );
}
