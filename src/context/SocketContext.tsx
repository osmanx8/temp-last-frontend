/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { createContext, useState, useEffect, useContext } from "react";
import io, { Socket } from "socket.io-client";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import UserContext from "./UserContext";

interface Context {
  socket?: Socket;
  counter?: number;
  createPoolSocket?: any;
  setCreatePoolSocket?: React.Dispatch<React.SetStateAction<any | undefined>>;
  stakeSolSocket?: any;
  setStakeSolSocket?: React.Dispatch<React.SetStateAction<any | undefined>>;
  claimSocket?: any;
  setClaimSocket?: React.Dispatch<React.SetStateAction<any | undefined>>;
}

const SocketContext = createContext<Context>({});

export const useSocket = () => useContext(SocketContext);

const SocketProvider = (props: { children: any }) => {
  const [socket, setSocket] = useState<Socket>();
  const {
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
  } = useContext(UserContext);
  const [counter, setCounter] = useState<number>(1);

  const router = useRouter();

  //process for socket
  const setcreatePoolSocket = (data: any) => {
    console.log("socket event::successfully create pool ", data);
    setTimeDuration(data.timeDuration);
    setDailyRoundsPlayed(data.dailyroundsPlayed);
    setAllRoundsPlayed(data.allroundsPlayed);
    setDailyActivePlayers(data.dailyactivePlayers);
    setAllActivePlayers(data.allactivePlayers);
    setDailyTotalSolWon(data.dailytotalSolWon);
    setAllTotalSolWon(data.alltotalSolWon);
    setDailyBiggestPrice(data.dailybiggestPrice);
    setAllBiggestPrice(data.allbiggestPrice);
    setPotBalance(0);
    setProgress(false);
  };
  const setStakeSolSocket = (data: any) => {
    console.log("socket event::successfully staked sol", data);
    setAtStartTime(data.startTime);
    setTimeDuration(data.timeDuration);
    setDailyRoundsPlayed(data.dailyroundsPlayed);
    setAllRoundsPlayed(data.allroundsPlayed);
    setDailyActivePlayers(data.dailyactivePlayers);
    setAllActivePlayers(data.allactivePlayers);
    setDailyTotalSolWon(data.dailytotalSolWon);
    setAllTotalSolWon(data.alltotalSolWon);
    setDailyBiggestPrice(data.dailybiggestPrice);
    setAllBiggestPrice(data.allbiggestPrice);
    setPotBalance(data.currentPot);
    setLastWiner(data.lastWiner);
    setWinners(data.winners);
    setStakers(data.stakers);
  };
  const setClaimSocket = (data: any) => {
    console.log("socket event::successfully claimed", data);
    setTimeDuration(data.timeDuration);
    setDailyRoundsPlayed(data.dailyroundsPlayed);
    setAllRoundsPlayed(data.allroundsPlayed);
    setDailyActivePlayers(data.dailyactivePlayers);
    setAllActivePlayers(data.allactivePlayers);
    setDailyTotalSolWon(data.dailytotalSolWon);
    setAllTotalSolWon(data.alltotalSolWon);
    setDailyBiggestPrice(data.dailybiggestPrice);
    setAllBiggestPrice(data.allbiggestPrice);
    setPotBalance(0);
    setLastWiner(data.lastWiner);
    setWinners(data.winners);
    setStakers(data.stakers);
  };
  useEffect(() => {
    const socketInstance = io(process.env.NEXT_PUBLIC_BACKEND_URL!, {
      transports: ["websocket"],
    });

    socketInstance.on("connect", () => {
      console.log("✅ Connected to backend:", socketInstance.id);
    });

    socketInstance.on("disconnect", () => {
      console.log("❌ Disconnected from backend:", socketInstance.id);
    });

    setSocket(socketInstance);

    return () => {
      socketInstance.off("connect");
      socketInstance.off("disconnect");
      //socketInstance.disconnect();
      setSocket(undefined);
    };
  }, [router]);

  useEffect(() => {
    if (!socket) return;

    const handleConnectionUpdated = (data: number) => setCounter(data);
    const handleCreatePool = (data: any) => setcreatePoolSocket(data);
    const handleStakeSol = (data: any) => {
      setStakeSolSocket(data);
    };
    const handleClaim = (data: any) => setClaimSocket(data);

    socket.on("connectionUpdated", handleConnectionUpdated);
    socket.on("create pool", handleCreatePool);
    socket.on("stake sol", handleStakeSol);
    socket.on("claim", handleClaim);

    return () => {
      socket.off("connectionUpdated", handleConnectionUpdated);
      socket.off("create pool", handleCreatePool);
      socket.off("stake sol", handleStakeSol);
      socket.off("claim", handleClaim);

      socket?.disconnect();
    };
  }, [socket]);

  return (
    <SocketContext.Provider
      value={{
        socket,
        counter,
      }}
    >
      {props.children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
