"use client";
import React, { ReactNode, useState } from "react";
import UserContext from "@/context/UserContext";
import { SolanaWalletProvider } from "@/context/SolanaWalletProvider";
import { AuthProvider } from "@/context/AuthContext";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function Providers({ children }: { children: ReactNode }) {
  const [lastSender, setLastSender] = useState<string>("");
  const [secondSender, setSecondSender] = useState<string>("");
  const [thirdSender, setThirdsender] = useState<string>("");
  const [gameIndex, setGameIndex] = useState<number>(0);
  const [solAmount, setSolAmount] = useState<number>(0);
  const [leftTime, setLeftTime] = useState<number>(0);
  const [atStartTime, setAtStartTime] = useState<string>("");
  const [timeDuration, setTimeDuration] = useState<number>(0);
  const [adminModal, setAdminModal] = useState<boolean>(false)

  return (
    <SolanaWalletProvider>
      <AuthProvider>
        <UserContext.Provider
          value={{
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
          }}
        >
          <Header />
          {children}
          <Footer />
        </UserContext.Provider>
      </AuthProvider>
    </SolanaWalletProvider>
  );
}
