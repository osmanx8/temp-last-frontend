import Header from "@/components/header/Header";
import { ToastContainer } from "react-toastify";
import Mainpage from "@/components/home";

export default function Home() {
  return (
    <main className="flex flex-col relative justify-between items-center bg-[#083791] w-full min-h-screen harlow">
      <Mainpage />
      <ToastContainer style={{ fontSize: 14 }} />
    </main>
  );
}

