"use client";
import { createContext } from "react";

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

const UserContext = createContext({
  lastWiner: null as winner | null,
  setLastWiner: (value: winner | null) => {},
  winners: [] as winner[],
  setWinners: (value: winner[]) => {},
  stakers: [] as staker[],
  setStakers: (value: staker[]) => {},
  adminModal: false,
  setAdminModal: (value: boolean) => {},
  lastSender: "",
  setLastSender: (value: string) => {},
  secondSender: "",
  setSecondSender: (value: string) => {},
  thirdSender: "",
  setThirdsender: (value: string) => {},
  gameIndex: 0,
  setGameIndex: (value: number) => {},
  solAmount: 0,
  setSolAmount: (value: number) => {},
  leftTime: 0,
  setLeftTime: (value: number) => {},
  atStartTime: "",
  setAtStartTime: (value: string) => {},
  timeDuration: 0,
  setTimeDuration: (value: number) => {},
  allbiggestPrice: 0,
  setAllBiggestPrice: (value: number) => {},
  allroundsPlayed: 0,
  setAllRoundsPlayed: (value: number) => {},
  alltotalSolWon: 0,
  setAllTotalSolWon: (value: number) => {},
  allactivePlayers: 0,
  setAllActivePlayers: (value: number) => {},
  firstPlayer: "",
  setFirstPlayer: (value: string) => {},
  secondPlayer: "",
  setSecondPlayer: (value: string) => {},
  thirdPlayer: "",
  setThirdPlayer: (value: string) => {},
  potBalance: 0,
  setPotBalance: (value: number) => {},
  dailybiggestPrice: 0,
  setDailyBiggestPrice: (value: number) => {},
  dailyroundsPlayed: 0,
  setDailyRoundsPlayed: (value: number) => {},
  dailytotalSolWon: 0,
  setDailyTotalSolWon: (value: number) => {},
  dailyactivePlayers: 0,
  setDailyActivePlayers: (value: number) => {},
  progress: false,
  setProgress: (value: boolean) => {},

  lastWinerSol: 0,
  setLastWinerSol: (value: number) => {},
  firstPlayerSol: 0,
  setFirstPlayerSol: (value: number) => {},
  secondPlayerSol: 0,
  setSecondPlayerSol: (value: number) => {},
  thirdPlayerSol: 0,
  setThirdPlayerSol: (value: number) => {},
});

export default UserContext;
