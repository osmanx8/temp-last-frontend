/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { getLastWinnerData, getTime } from "@/api";
import { useRouter } from "next/navigation";
import {
  ContextType,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import io, { Socket } from "socket.io-client";

const socket = io(process.env.NEXT_PUBLIC_BACKEND_URL!, {
  transports: ["websocket"],
});

interface Context {
  socket?: Socket;
  counter?: number;
  stakeSolSocket?: React.Dispatch<React.SetStateAction<any | undefined>>;
}
const SocketContext = createContext<Context>({});
export const useSocket = () => useContext(SocketContext);

const SocketProvider = (props: { children: any }) => {
  const [socket, setSocket] = useState<Socket>();
  const [counter, setCounter] = useState<number>(1);
  const router = useRouter();

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
    const stakeSolSocket = async (data: any) => {
      console.log("socket...stake sol", data);
      await getLastWinnerData();
      await getTime();
    };
    const claimSolSocket = async (data: any) => {
      console.log("socket...claim", data);
    };
    const createGameSocket = async (data: any) => {
      console.log("socket...create game", data);
    };

    socket.on("newGameCreated", createGameSocket);
    socket.on("stakeSol", stakeSolSocket);
    socket.on("claim", claimSolSocket);

    return () => {
      socket.off("stakeSol", stakeSolSocket);
      socket.off("claim", claimSolSocket);

      console.log("here cock");
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

// export const useSocket = () => useContext(SocketContext);

// const SocketProvider = (props: { children: any }) => {
//   const [socket, setSocket] = useState<Socket>();
//   const [counter, setCounter] = useState<number>(1);

//   useEffect(() => {
//     const socketInstance = io(process.env.NEXT_PUBLIC_BACKEND_URL!, {
//       transports: ["websocket"],
//     });

//     socketInstance.on("connect", () => {
//       console.log("✅ Connected to backend:", socketInstance.id);
//     });

//     socketInstance.on("disconnect", () => {
//       console.log("❌ Disconnected from backend:", socketInstance.id);
//     });

//     setSocket(socketInstance);

//     return () => {
//       socketInstance.off("connect");
//       socketInstance.off("disconnect");
//       //socketInstance.disconnect();
//       setSocket(undefined);
//     };
//   }, []);

//   return (
//     <SocketContext.Provider
//       value={{
//         socket,
//         counter,
//       }}
//     >
//       {props.children}
//     </SocketContext.Provider>
//   );
// };

// export default SocketProvider;
