"use client";
import axios from "axios";
import { FC, useContext, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { ArrowLine, ExitIcon, WalletIcon } from "../others/SvgIcon";
import UserContext from "@/context/UserContext";
import { errorAlert } from "@/components/others/Toast";

const ConnectButton: FC = () => {
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
  const { setVisible } = useWalletModal();
  const { publicKey, disconnect } = useWallet();

  useEffect(() => {
    if (publicKey?.toBase58() !== "" && publicKey?.toBase58() !== undefined) {
    }
  }, [publicKey]);

  return (
    <div className="group relative top-0 left-0 flex flex-col justify-center items-center shadow-btn-inner w-[140px] md:w-[200px] md2:w-[220px] lg:w-[270px] h-[40px] md:h-[52px] md2:h-[67px] text-white cursor-pointer">
      <div className="w-full h-full bg-[#1B5DB1] absolute top-1 right-1 rounded-[15px]"></div>
      {publicKey ? (
        <>
          <div className="flex justify-center items-center text-[14px] md:text-[16px] lg:text-[24px] w-[140px] md:w-[200px] md2:w-[220px] lg:w-[270px] h-[40px] md:h-[52px] md2:h-[67px] bg-gradient-to-b from-[#234ACB] to-[#112565] border-[2px] md:border-[5px] border-[#60A5FA] rounded-[15px] z-10">
            {publicKey.toBase58().slice(0, 6)}....
            {publicKey.toBase58().slice(-6)}
          </div>
          <div className="hidden group-hover:block top-[66px] right-[10px] absolute w-[250px] flex-col">
            <ul className="bg-[#112565] border-[#89C7B5] border-[0.75px] rounded-[15px]">
              <li>
                <button
                  className="flex flex-row items-center gap-2 w-full h-full"
                  onClick={() => setVisible(true)}
                >
                  <WalletIcon className="text-white!importent" /> Change Wallet
                </button>
              </li>
              <li>
                <button
                  className="flex flex-row items-center gap-2 w-full h-full"
                  onClick={disconnect}
                >
                  <ExitIcon /> Disconnect
                </button>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <div
          className="flex justify-center items-center gap-1 text-[16px] lg:text-[24px] uppercase w-[140px] md:w-[200px] md2:w-[220px] lg:w-[270px] h-[40px] md:h-[52px] md2:h-[67px] z-10 bg-gradient-to-b from-[#234ACB] to-[#112565] border-[2px] md:border-[5px] border-[#60A5FA] rounded-[15px]"
          onClick={() => setVisible(true)}
        >
          Connect wallet
        </div>
      )}
    </div>
  );
};

export default ConnectButton;
