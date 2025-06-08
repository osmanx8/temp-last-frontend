import { createContext, useContext, useEffect, useState } from "react";

// Define the context type
interface AuthContextType {
  gameIndex: any;
  setGameIndexs: (value: number) => void;
  lastSender: string;
  setLastSenders: (value: string) => void;
  secondSender: string;
  setSecondSenders: (value: string) => void;
  thirdSender: string;
  setThirdsenders: (value: string) => void;
  solAmount: any;
  setSolAmounts: (value: number) => void;
  atStartTime: string;
  setAtStartTimes: (value: string) => void;
  timeDuration: number;
  setTimeDurations: (value: number) => void;
  progress: boolean;
  setProgresss: (value: boolean) => void;
}
// Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [gameIndex, setGameIndex] = useState(0);
  const [lastSender, setLastSender] = useState("");
  const [secondSender, setSecondSender] = useState("");
  const [thirdSender, setThirdsender] = useState("");
  const [solAmount, setSolAmount] = useState(0);
  const [atStartTime, setAtStartTime] = useState("");
  const [timeDuration, setTimeDuration] = useState(0);
  const [progress, setProgress] = useState(false);

  // Load login state from localStorage when the app starts
  useEffect(() => {
    setGameIndex(0);
  }, []);

  const setGameIndexs = (value: number) => {
    setGameIndex(value);
  };

  const setLastSenders = (value: string) => {
    setLastSender(value);
  };

  const setSecondSenders = (value: string) => {
    setSecondSender(value);
  };

  const setThirdsenders = (value: string) => {
    setThirdsender(value);
  };

  const setSolAmounts = (value: number) => {
    setSolAmount(value);
  };

  const setAtStartTimes = (value: string) => {
    setAtStartTime(value);
  };

  const setTimeDurations = (value: number) => {
    setTimeDuration(value);
  };
  const setProgresss = (value: boolean) => {
    setProgress(value);
  };

  return (
    <AuthContext.Provider
      value={{
        gameIndex,
        lastSender,
        secondSender,
        thirdSender,
        solAmount,
        atStartTime,
        timeDuration,
        progress,
        setGameIndexs,
        setLastSenders,
        setSecondSenders,
        setThirdsenders,
        setSolAmounts,
        setAtStartTimes,
        setTimeDurations,
        setProgresss,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
// Custom hook to use AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
