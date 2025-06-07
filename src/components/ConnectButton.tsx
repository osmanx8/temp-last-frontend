"use client";
import axios from "axios";
import { FC, useContext, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { ArrowLine, ExitIcon, WalletIcon } from "./SvgIcon";
import UserContext from "@/context/usercontext";
import { errorAlert } from "@/components/Toast";

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
    <div className="group relative bg-primary-200 shadow-btn-inner px-2 py-2 border-[0.75px] border-primary-300 rounded-lg w-[140px] lg:w-[180px] text-primary-100 tracking-[0.32px] cursor-pointer">
      {publicKey ? (
        <>
          <div className="flex justify-center items-center text-[12px] lg:text-[16px]">
            {publicKey.toBase58().slice(0, 4)}....
            {publicKey.toBase58().slice(-4)}
            <div className="w-3 h-3 rotate-90">
              <ArrowLine />
            </div>
          </div>
          <div className="hidden group-hover:block top-10 right-0 absolute w-[200px]">
            <ul className="bg-[#162923] mt-2 p-2 border-[#89C7B5] border-[0.75px] rounded-lg">
              <li>
                <button
                  className="flex items-center gap-2 text-primary-100 tracking-[-0.32px]"
                  onClick={() => setVisible(true)}
                >
                  <WalletIcon /> Change Wallet
                </button>
              </li>
              <li>
                <button
                  className="flex items-center gap-2 text-primary-100 tracking-[-0.32px]"
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
          className="flex justify-center items-center gap-1 text-[12px] lg:text-[16px]"
          onClick={() => setVisible(true)}
        >
          Connect wallet <ArrowLine />
        </div>
      )}
    </div>
  );
};

export default ConnectButton;
