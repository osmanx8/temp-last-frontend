"use client";
import { createContext } from "react";

const UserContext = createContext({
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
  setTimeDuration: (valud: number) => {},
});

export default UserContext;
