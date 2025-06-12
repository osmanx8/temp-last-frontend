import React, { useEffect, useState } from "react";
import { LuClipboardCopy } from "react-icons/lu";
import { successAlert } from "../others/Toast";
import { getReferralCodeAmount } from "@/api";
import { useWallet } from "@solana/wallet-adapter-react";

export default function InviteTag() {
  const [copySuccess, setCopySuccess] = useState<string>();
  const [inviteCode, setInviteCode] = useState<string>();
  const [referralEarnedAmount, setReferEarnAmount] = useState<number>(0);
  const wallet = useWallet();

  useEffect(() => {
    referralCodeAmountHandle();
  }, [wallet.publicKey]);

  const referralCodeAmountHandle = async () => {
    if (!wallet || !wallet.publicKey) return;
    const data = await getReferralCodeAmount(wallet.publicKey.toBase58());
    if (!data) return;
    setInviteCode(data.refCode);
    setReferEarnAmount(data.earnAmountFromReferral);
  };

  const copyToClipBoard = async (copyMe: string) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Copied!");
      successAlert("Copied!");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  if (!inviteCode) return;

  return (
    <div className="flex flex-col justify-center items-center px-4 py-8 md:py-14 w-full h-full">
      <div className="container">
        <div className="flex flex-col justify-center items-center gap-2 bg-gradient-to-tl from-[#2563EB] to-[#9333EA] shadow-[inset_8px_-8px_8px_#00000022,inset_-8px_8px_8px_#ffffff22] mx-auto px-4 md:px-7 rounded-[15px] w-full max-w-[546px] md:max-w-[768px] h-[248px]">
          <p className="flex flex-col justify-center items-center w-full text-[24px] text-white sm:text-[30px] text-center uppercase">
            INVITE FRIENDS & EARN
          </p>
          <div className="flex flex-row justify-center items-center gap-3 w-full">
            <div className="flex flex-col justify-center items-start bg-white/10 px-3 py-5 rounded-lg w-full max-w-[400px] h-[45px] md:h-[65px] object-cover overflow-hidden text-[#E5E7EB] md:text-[24px] text-lg playpen">
              https://soljackpot.com/ref/{inviteCode}
            </div>
            <div
              onClick={() =>
                copyToClipBoard(`https://soljackpot.com/ref/${inviteCode}`)
              }
              className="flex flex-row justify-center items-center gap-3 bg-gradient-to-t from-[#162D7B] to-[#2852E1] border-[#83D6F9] border-[5px] rounded-[15px] w-full max-w-[120px] md:max-w-[200px] h-[47px] md:h-[77px] text-white cursor-pointer"
            >
              <LuClipboardCopy className="text-xl md:text-3xl" />
              <p className="md:text-[24px] text-base uppercase playpen">copy</p>
            </div>
          </div>
          <span className="flex flex-col w-full text-[#D1D5DB] text-xs sm:text-sm text-center">
            Earn 5% of what your friends deposit!
          </span>
          <div className="flex flex-row justify-center items-center gap-2 w-full">
            <span className="flex flex-col text-[#D1D5DB] text-xs sm:text-sm text-center playpen">
              You have earned:
            </span>
            <span className="text-[#FDE047] text-base sm:text-xl">
              {referralEarnedAmount} SOL
            </span>
            <span className="flex flex-col text-[#D1D5DB] text-xs sm:text-sm text-center playpen">
              from referrals
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
