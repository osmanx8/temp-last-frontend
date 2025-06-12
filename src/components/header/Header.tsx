import { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";
import ConnectButton from "@/components/buttons/ConnectButton";
import Logo from "@/../public/assets/images/logo.webp";
import Image from "next/image";
import SocialList from "../others/SocialList";
import { IoMenu } from "react-icons/io5";

const Header: FC = () => {
  const menuDropdown = useRef<HTMLDivElement | null>(null);
  const [menuModal, setMenuModal] = useState<boolean>(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuDropdown.current &&
        !menuDropdown.current.contains(event.target as Node)
      ) {
        setMenuModal(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuDropdown]);

  return (
    <header className="z-40 absolute flex flex-row justify-between items-center w-full harlow">
      <div className="container">
        <div className="flex justify-between items-center px-5">
          <Link href={"/"} className="">
            <Image
              src={Logo}
              alt="logo"
              width={180}
              height={180}
              className="w-[80px] sm:w-[120px] md:w-[180px] h-[80px] sm:h-[120px] md:h-[180px]"
            />
          </Link>
          <div
            ref={menuDropdown}
            className="relative flex justify-end items-center gap-6 w-full"
          >
            <div className="hidden sm:flex flex-row justify-center items-center gap-6">
              <SocialList />
              <ConnectButton />
            </div>
            <div className="sm:hidden flex flex-row justify-center items-center gap-6">
              <div
                onClick={() => setMenuModal(true)}
                className="relative flex flex-col justify-center items-center w-[45px] h-[45px] cursor-pointer"
              >
                <div className="z-10 flex flex-col justify-center items-center bg-gradient-to-b from-[#234ACB] to-[#112565] p-1 border-[#60A5FA] border-[2px] rounded-[8px] w-[45px] h-[45px] text-white text-2xl cursor-pointer">
                  <IoMenu />
                </div>
              </div>
            </div>
            <div
              className={`${
                menuModal
                  ? "h-[120px] py-4 border-white/70 border-[1px] opacity-100"
                  : "h-0 opacity-0"
              } flex flex-col w-full max-w-[166px] backdrop-blur-lg absolute right-0 bg-black/50 rounded-[15px] px-3 z-40 top-12 justify-start items-center gap-3 object-cover overflow-hidden duration-300 `}
            >
              <SocialList />
              <ConnectButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
