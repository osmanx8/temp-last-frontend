"use client";
import React, { ReactNode, useState } from "react";
import UserContext from "@/context/UserContext";
import { SolanaWalletProvider } from "@/context/SolanaWalletProvider";
import { AuthProvider } from "@/context/AuthContext";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import SocketProvider from "@/context/SocketContext";

type winner = {
  wallet: string;
  solAmount: number;
  gameIndex: number;
  stakeTime: Date;
};
type staker = {
  wallet: string;
  solAmount: number;
  gameIndex: number;
  stakeTime: Date;
};

export default function Providers({ children }: { children: ReactNode }) {
  const [lastSender, setLastSender] = useState<string>("");
  const [secondSender, setSecondSender] = useState<string>("");
  const [thirdSender, setThirdsender] = useState<string>("");
  const [gameIndex, setGameIndex] = useState<number>(0);
  const [solAmount, setSolAmount] = useState<number>(0);
  const [leftTime, setLeftTime] = useState<number>(0);
  const [atStartTime, setAtStartTime] = useState<string>("");
  const [timeDuration, setTimeDuration] = useState<number>(0);
  const [adminModal, setAdminModal] = useState<boolean>(false);
  const [firstPlayerSol, setFirstPlayerSol] = useState<number>(0);
  const [secondPlayerSol, setSecondPlayerSol] = useState<number>(0);
  const [thirdPlayerSol, setThirdPlayerSol] = useState<number>(0);
  const [lastWinerSol, setLastWinerSol] = useState<number>(0);
  const [dailytotalSolWon, setDailyTotalSolWon] = useState<number>(0);
  const [alltotalSolWon, setAllTotalSolWon] = useState<number>(0);
  const [dailyroundsPlayed, setDailyRoundsPlayed] = useState<number>(0);
  const [allroundsPlayed, setAllRoundsPlayed] = useState<number>(0);
  const [allbiggestPrice, setAllBiggestPrice] = useState<number>(0);
  const [dailybiggestPrice, setDailyBiggestPrice] = useState<number>(0);
  const [potBalance, setPotBalance] = useState<number>(0);
  const [dailyactivePlayers, setDailyActivePlayers] = useState<number>(0);
  const [firstPlayer, setFirstPlayer] = useState<string>("");
  const [secondPlayer, setSecondPlayer] = useState<string>("");
  const [thirdPlayer, setThirdPlayer] = useState<string>("");
  const [allactivePlayers, setAllActivePlayers] = useState<number>(0);
  const [lastWiner, setLastWiner] = useState<winner | null>(null);
  const [winners, setWinners] = useState<winner[]>([]);
  const [stakers, setStakers] = useState<staker[]>([]);
  const [progress, setProgress] = useState<boolean>(false);

  return (
    <SolanaWalletProvider>
      <AuthProvider>
        <SocketProvider>
          <UserContext.Provider
            value={{
              lastWiner,
              setLastWiner,
              winners,
              setWinners,
              stakers,
              setStakers,
              dailytotalSolWon,
              setDailyTotalSolWon,
              alltotalSolWon,
              setAllTotalSolWon,
              dailyroundsPlayed,
              setDailyRoundsPlayed,
              allroundsPlayed,
              setAllRoundsPlayed,
              allbiggestPrice,
              setAllBiggestPrice,
              dailybiggestPrice,
              setDailyBiggestPrice,
              potBalance,
              setPotBalance,
              dailyactivePlayers,
              setDailyActivePlayers,
              firstPlayer,
              setFirstPlayer,
              secondPlayer,
              setSecondPlayer,
              thirdPlayer,
              setThirdPlayer,

              progress,
              setProgress,
              allactivePlayers,
              setAllActivePlayers,
              firstPlayerSol,
              setFirstPlayerSol,
              secondPlayerSol,
              setSecondPlayerSol,
              thirdPlayerSol,
              setThirdPlayerSol,
              lastWinerSol,
              setLastWinerSol,

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
        </SocketProvider>
      </AuthProvider>
    </SolanaWalletProvider>
  );
}
