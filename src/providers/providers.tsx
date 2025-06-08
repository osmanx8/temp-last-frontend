"use client";
import React, { ReactNode, useState } from "react";
import UserContext from "@/context/UserContext";
import { SolanaWalletProvider } from "@/context/SolanaWalletProvider";
import { AuthProvider } from "@/context/AuthContext";

export default function Providers({ children }: { children: ReactNode }) {
  const [lastSender, setLastSender] = useState<string>("");
  const [secondSender, setSecondSender] = useState<string>("");
  const [thirdSender, setThirdsender] = useState<string>("");
  const [gameIndex, setGameIndex] = useState<number>(0);
  const [solAmount, setSolAmount] = useState<number>(0);
  const [leftTime, setLeftTime] = useState<number>(0);
  const [atStartTime, setAtStartTime] = useState<string>("");
  const [timeDuration, setTimeDuration] = useState<number>(0);

  return (
    <SolanaWalletProvider>
      <AuthProvider>
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
            atStartTime,
            setAtStartTime,
            timeDuration,
            setTimeDuration,
          }}
        ></UserContext.Provider>
        {children}
      </AuthProvider>
    </SolanaWalletProvider>
  );
}
