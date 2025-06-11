import { FC } from "react";
import Link from "next/link";
import ConnectButton from "@/components/buttons/ConnectButton";
import Logo from "@/../public/assets/images/logo.webp"
import Image from "next/image";
import SocialList from "../others/SocialList";

const Header: FC = () => {
  

  return (
    <header className="absolute w-full flex flex-row items-center justify-between z-10 harlow">
      <div className="container">
        <div className="flex items-center justify-between px-5">
          <Link href={"/"} className="">
            <Image src={Logo} alt="logo" width={180} height={180} className="w-[180px] h-[180px]" />
          </Link>
          <div className="flex items-center gap-6 justify-center">
            <SocialList />
            <ConnectButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
