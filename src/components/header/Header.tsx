import { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";
import ConnectButton from "@/components/buttons/ConnectButton";
import Logo from "@/../public/assets/images/logo.webp"
import Image from "next/image";
import SocialList from "../others/SocialList";
import { IoMenu } from "react-icons/io5";

const Header: FC = () => {
  const menuDropdown = useRef<HTMLDivElement | null>(null);
  const [menuModal, setMenuModal] = useState<boolean>(false)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuDropdown.current && !menuDropdown.current.contains(event.target as Node)) {
        setMenuModal(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuDropdown]);

  return (
    <header className="absolute w-full flex flex-row items-center justify-between z-40 harlow">
      <div className="container">
        <div className="flex items-center justify-between px-5">
          <Link href={"/"} className="">
            <Image src={Logo} alt="logo" width={180} height={180} className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[180px] md:h-[180px]" />
          </Link>
          <div ref={menuDropdown} className="flex items-center gap-6 justify-end w-full relative">
            <div className="hidden sm:flex items-center flex-row gap-6 justify-center">
              <SocialList />
              <ConnectButton />
            </div>
            <div className="flex sm:hidden items-center flex-row gap-6 justify-center">
              <div onClick={() => setMenuModal(true)} className="flex flex-col relative justify-center items-center cursor-pointer w-[45px] h-[45px]">
                <div className='border-[2px] p-1 rounded-[8px] border-[#60A5FA] text-white bg-gradient-to-b from-[#234ACB] to-[#112565] w-[45px] h-[45px] justify-center items-center flex flex-col text-2xl cursor-pointer z-10'>
                  <IoMenu />
                </div>
              </div>
            </div>
            <div className={`${menuModal ? "h-[120px] py-4 border-white/70 border-[1px] opacity-100" : "h-0 opacity-0"} flex flex-col w-full max-w-[166px] backdrop-blur-lg absolute right-0 bg-black/50 rounded-[15px] px-3 z-40 top-12 justify-start items-center gap-3 object-cover overflow-hidden duration-300 `}>
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
