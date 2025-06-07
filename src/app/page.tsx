"use client"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LoadingModal from "@/components/LoadingModal";
import { useContext } from "react";
import UserContext from "@/contexts/usercontext";
import { ToastContainer } from "react-toastify";
import Mainpage from "@/components/mainpage";

export default function Home() {
  const { loadingState } = useContext<any>(UserContext);

  return (
    <main className="flex flex-col justify-between items-center bg-black w-full min-h-screen harlow">
      <Header />
      <Mainpage />
      {loadingState && <LoadingModal />}
      <ToastContainer style={{ fontSize: 14 }} />
    </main>
  );
}
