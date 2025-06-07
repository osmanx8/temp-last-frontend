"use client";
import React, { ReactNode, useState } from "react";
import UserContext from "@/context/usercontext";
import { SolanaWalletProvider } from "@/context/SolanaWalletProvider";

export default function Providers({ children }: { children: ReactNode }) {
  const [lastSender, setLastSender] = useState<string>("");
  const [secondSender, setSecondSender] = useState<string>("");
  const [thirdSender, setThirdsender] = useState<string>("");
  const [gameIndex, setGameIndex] = useState<number>(0);
  const [solAmount, setSolAmount] = useState<number>(0);
  const [leftTime, setLeftTime] = useState<number>(0);

  return (
    <SolanaWalletProvider>
      <UserContext.Provider
        value={{
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
        }}
      ></UserContext.Provider>
      {children}
    </SolanaWalletProvider>
  );
}
