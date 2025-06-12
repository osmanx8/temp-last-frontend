import UserContext from "@/context/UserContext";
import { claimApi, createPoolApi, initializeApi } from "@/program/web3";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { errorAlert, successAlert } from "./Toast";

export default function AdminModal() {
  const { setAdminModal, timeDuration, setTimeDuration } =
    useContext(UserContext);
  const menuDropdown = useRef<HTMLDivElement | null>(null);
  const [inputTime, setInputTime] = useState<number>(0);
  const wallet = useWallet();

  const createPot = async () => {
    console.log("click create pool");
    let res = await createPoolApi(wallet, inputTime * 60);
    if (res == "WalletError" || !res) {
      errorAlert("createPool was failed.");
      return;
    }
    if (typeof res === "number") {
      setTimeDuration(res); // ✅ Only set if it's a number
      successAlert("createPool success!");
      return res;
    } else {
      errorAlert("Unexpected response type from createPoolApi");
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
    const res = await claimApi(wallet);
    if (res == "WalletError" || !res) {
      errorAlert("claim was failed.");
      return false;
    }
    successAlert("claim success!");
    return res;
  };

  const handleChangeTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTime(Number(e.target.value));
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuDropdown.current &&
        !menuDropdown.current.contains(event.target as Node)
      ) {
        setAdminModal(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuDropdown]);

  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center backdrop-blur-md w-full playpen">
      <div
        ref={menuDropdown}
        className="relative flex flex-col justify-center items-center gap-6 bg-gradient-to-t from-[#162D7B] to-[#2852E1] py-[50px] border-[#83D6F9] border-[1px] rounded-md w-[90%] max-w-[600px] sm:max-w-xl"
      >
        <div
          onClick={() => setAdminModal(false)}
          className="top-4 right-4 absolute flex flex-col rounded-full w-[20px] 2xs:w-[25px] md:w-[30px] h-[20px] 2xs:h-[25px] md:h-[30px] cursor-pointer"
        >
          <IoIosCloseCircleOutline className="text-[#83D6F9] text-2xl 2xs:text-3xl md:text-4xl" />
        </div>

        <p className="text-white text-3xl">Input Time</p>
        <input
          type="number"
          value={inputTime}
          onChange={handleChangeTime}
          placeholder="input minute. ex: 20"
          className="flex flex-col bg-white/10 px-4 py-2 rounded-lg outline-none text-xl"
        />

        <div className="flex flex-row justify-center items-center gap-5 py-2 w-full">
          <div className="flex justify-around">
            <div
              onClick={() => createPot()}
              className={`bg-[#784FD8] text-white cursor-pointer px-4 2xs:px-5 md:px-6 py-1 2xs:py-2 md:py-3 border-[3px] border-[#83D6F9] rounded-[8px] text-[12px] 2xs:text-sm md:text-lg`}
            >
              Create
            </div>
          </div>

          <div className="flex justify-around">
            <div
              onClick={() => initialize()}
              className={`bg-[#784FD8] text-white cursor-pointer px-4 2xs:px-5 md:px-6 py-1 2xs:py-2 md:py-3 border-[3px] border-[#83D6F9] rounded-[8px] text-[12px] 2xs:text-sm md:text-lg`}
            >
              Initialize
            </div>
          </div>

          <div className="flex justify-around">
            <div
              onClick={() => claim()}
              className={`bg-[#784FD8] text-white cursor-pointer px-4 2xs:px-5 md:px-6 py-1 2xs:py-2 md:py-3 border-[3px] border-[#83D6F9] rounded-[8px] text-[12px] 2xs:text-sm md:text-lg`}
            >
              Claim
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function setInputTime(arg0: number) {
  throw new Error("Function not implemented.");
}
