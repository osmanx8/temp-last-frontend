import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { BsLightningFill } from "react-icons/bs";
import SolIcon from "@/../public/assets/images/sol-icon.webp";
import CurrentPotIcon from "@/../public/assets/images/current_top.webp";
import Countdown from "../others/Countdown";
import { stakingSolApi } from "@/program/web3";
import { errorAlert, successAlert } from "../others/Toast";
import UserContext from "@/context/UserContext";
import { useWallet } from "@solana/wallet-adapter-react";

export default function PotCard() {
  const {
    setGameIndex,
    setTimeDuration,
    setAtStartTime,
    timeDuration,
    progress,
    setPotBalance,
  } = useContext(UserContext);
  const [solAmount, setSolAmount] = useState<number>(0);
  const [currentSolAmount, setCuttenSolAmount] = useState<number>(42.54);
  const [currentJackpotTime, setCurrentJackpotTime] = useState<Date | null>(
    null
  );

  useEffect(() => {
    if (progress) {
      const futureTime = new Date(Date.now() + timeDuration * 1000);
      setCurrentJackpotTime(futureTime);
    } else {
      setCurrentJackpotTime(null); // reset when progress is false
    }
  }, [progress, timeDuration]);

  const wallet = useWallet();
  const handleChangeSolAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSolAmount(Number(e.target.value));
  };
  const [time, setTime] = useState<number>(0);
  const addSolAmount = () => {
    setSolAmount((prev) => prev + 0.1);
  };
  //setting time
  useEffect(() => {
    if (timeDuration > 0) {
      setTime(timeDuration);
    }
  }, [timeDuration]);

  useEffect(() => {
    if (time <= 0) return;
    if (progress) {
      const interval = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time, progress]);
  const removeSolAmount = () => {
    if (solAmount < 0.2) {
      return;
    }
    setSolAmount((prev) => prev - 0.1);
  };
  const sendSol = async () => {
    console.log("clicked send sol button");
    const res = await stakingSolApi(wallet, solAmount * 10 ** 9);
    if (res == "WalletError" || !res) {
      errorAlert("stake sol was failed.");
      return;
    } else {
      successAlert("stake sol success!");
      setTimeDuration(res);
      // const { gameId, potBalance, readableStartTime, timeDuration } = res;
      // // setGameIndex(res.gameId);
      // setGameIndex(gameId);
      // setPotBalance(potBalance);
      // setAtStartTime(readableStartTime.toString());
      // setTimeDuration(timeDuration);

      // const nowUTC = new Date();
      // const diffInSeconds = Math.floor(
      //   (nowUTC.getTime() - new Date(readableStartTime).getTime()) / 1000
      // );
      // setTime(diffInSeconds);
      return;
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center bg-[url('/assets/images/home_bg.webp')] bg-cover bg-center mx-auto pt-32 lg:pt-[180px] w-full h-full min-h-[calc(100vh-100px)]">
      <div className="z-10 relative px-4 sm:px-6 md:px-10 pb-16 container">
        <div className="flex lg:flex-row flex-col justify-center items-center gap-5 bg-[url('/assets/images/jackpot_bg.webp')] bg-black bg-cover bg-center shadow-[0px_10px_0px_#2B3248,8px_12px_20px_rgba(0,0,0,1),inset_8px_-8px_8px_#00000022,inset_-8px_8px_8px_#ffffff22] mx-auto p-3 sm:p-5 md:p-10 border-[#C1D6E4] border-[3px] md:border-[5px] rounded-[15px] w-full max-w-[1180px] h-full lg:max-h-[485px]">
          <div className="bg-gradient-to-tr from-[#80B4F4] to-[#60A5FA] shadow-[0px_6px_0px_#1252A4,8px_12px_20px_rgba(0,0,0,1),inset_8px_-8px_8px_#00000022,inset_-12px_12px_8px_#ffffff44] p-[5px] rounded-[15px] w-full">
            <div className="flex flex-col justify-center items-center gap-4 md:gap-7 bg-gradient-to-t from-[#13286D] to-[#254DD3] py-3 md:py-5 rounded-[10px] w-full h-full">
              <p className="text-[20px] text-white sm:text-[28px] md:text-[45px] uppercase">
                time until jackpot
              </p>
              <div className="flex flex-col justify-center items-center w-full h-[100px] md:h-[128px] text-4xl">
                <Countdown
                  targetTime={
                    currentJackpotTime ? currentJackpotTime.getTime() : 0
                  }
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full playpen">
                <div className="flex sm:flex-row flex-col gap-2 bg-gradient-to-t from-[#67CCFF] to-[#0194DE] shadow-[-4px_4px_0px_#1B5DB1,8px_12px_20px_rgba(0,0,0,0.4)] p-2 border-[#8CCFFC] border-[3px] md:border-[5px] rounded-[8px] md:rounded-[15px] max-w-[400px]">
                  <div className="flex flex-row justify-center items-center gap-1 bg-[#0E7CB3] p-2 rounded-[13px] w-full max-w-[180px] h-[48px] md:h-[70px]">
                    <input
                      type="number"
                      value={solAmount.toFixed(2)}
                      onChange={handleChangeSolAmount}
                      min={0.1}
                      className="flex flex-col bg-transparent px-1 py-1 md:py-2 outline-none w-[88px] text-[24px] text-white md:text-[32px]"
                    />
                    <div className="flex flex-col justify-center items-center text-[#143F55] text-[20px]">
                      <FaAngleUp
                        onClick={() => addSolAmount()}
                        className="flex flex-col cursor-pointer"
                      />
                      <FaAngleDown
                        onClick={() => removeSolAmount()}
                        className="flex flex-col cursor-pointer"
                      />
                    </div>
                    <Image
                      src={SolIcon}
                      alt="SolIcon"
                      width={44}
                      height={44}
                      className="flex flex-col rounded-full w-8 md:w-11 h-8 md:h-11"
                    />
                  </div>
                  <div
                    onClick={() => sendSol()}
                    className="flex flex-row justify-center items-center gap-1 bg-gradient-to-t from-[#264FD9] to-[#19348F] shadow-[inset_8px_-8px_8px_#00000022,inset_-8px_8px_8px_#ffffff22] px-3 py-2 rounded-[13px] cursor-pointer"
                  >
                    <p className="text-[#CED6EF] text-[20px] md:text-[34px] uppercase">
                      send
                    </p>
                    <BsLightningFill className="text-[#0B2270] text-2xl md:text-4xl" />
                  </div>
                </div>
              </div>
              <p className="flex flex-col justify-center items-center w-full text-[#D1D5DB]/70 text-sm text-center playpen">
                Entry: 0.1 - 1.5 SOL allowed
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 bg-gradient-to-t from-[#5C2999] to-[#9945FF] shadow-[0px_6px_0px_#1252A4,8px_12px_20px_rgba(0,0,0,1),inset_8px_-8px_8px_#00000022,inset_-8px_8px_8px_#ffffff22] px-5 py-8 border-[#60A5FA] border-[5px] rounded-[15px] w-full max-w-[340px] h-full max-h-[340px] object-cover overflow-hidden">
            <div className="flex flex-row justify-center items-center gap-2 text-[32px] sm:text-[40px] uppercase">
              <p className="text-white">current</p>
              <p className="text-[#FACC15]">pot</p>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-full">
              <Image
                src={CurrentPotIcon}
                alt="CurrentPotIcon"
                width={86}
                height={94}
                className="flex flex-col w-[86px] h-[94px]"
              />
            </div>
            <div className="flex flex-row justify-center items-center gap-2 bg-gradient-to-t from-[#94790C] to-[#FACC15] shadow-[-4px_4px_0px_#767265,8px_12px_20px_rgba(0,0,0,1), px-3 py-2 border-[#E5E0CB] border-[5px] rounded-[15px] md:w-full h-[68px] md:h-[85px] inset_8px_-8px_8px_#00000022,inset_-8px_8px_8px_#ffffff22]">
              <div className="flex flex-col justify-center items-center bg-[#514207] px-2 border-[#EBE3C6] border-[5px] rounded-[13px] w-full max-w-[145px] md:max-w-[160px] h-[52px] md:h-[66px] text-[#FFFFFF]/80 text-[28px] md:text-[44px]">
                {currentSolAmount}
              </div>
              <p className="font-semibold text-[28px] text-white md:text-[48px] uppercase playpen">
                sol
              </p>
            </div>
            <p className="flex flex-row justify-center items-center gap-2 w-full text-[#D1D5DB]/70 text-sm text-center playpen">
              Last Winner: <strong>Hs82...3k9d</strong>
            </p>
            <p className="flex flex-row justify-center items-center gap-2 w-full text-[#D1D5DB]/70 text-sm text-center playpen">
              Won: <strong>28.5 SOL</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-0 left-0 absolute flex flex-col bg-gradient-to-t from-[#083791] to-[#6453E5]/0 w-full h-[450px]"></div>
    </div>
  );
}
