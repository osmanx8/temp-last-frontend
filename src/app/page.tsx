import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";
import Mainpage from "@/components/Mainpage";

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center bg-black w-full min-h-screen harlow">
      <Header />
      <Mainpage />
      <ToastContainer style={{ fontSize: 14 }} />
    </main>
  );
}
