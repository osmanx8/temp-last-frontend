import { FC } from "react";
import { FooterLinks } from "@/config/ConfigData";

const Footer: FC = () => {
  return (
    <footer className="w-full h-full flex flex-row items-center border-t-[1px] border-t-[#6B7280]/40">
      <div className="container">
        <div className="flex flex-col w-full h-full px-6 pt-12 md:pt-20 pb-8 md:pb-12 items-center justify-center gap-3">
          <div className="flex flex-col md:flex-row w-full h-full justify-between gap-4 items-center pb-6 harlow">
            <div className="text-[38px] flex flex-row font-extrabold">
              <p className="text-[#FACC15]">SOL</p>
              <p className="text-[#60A5FA]">JACKPOT</p>
            </div>
            <div className="flex flex-row justify-between md:justify-end gap-3 md:gap-6 items-start w-full">
              {FooterLinks.map((item, index) => (
                <div key={index} className="flex flex-col gap-2 md:gap-5 justify-between md:justify-end items-center md:items-end">
                  <p className="text-sm sm:text-base md:text-lg text-white uppercase">{item.title}</p>
                  <div className="flex flex-col gap-2 justify-end items-end text-[#9CA3AF] playpen text-[10px] sm:text-sm md:text-base">
                    {item.links.map((_item, _index) => (
                      <a key={_index} href={_item.link} className="">
                        {_item.text}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full pt-5 border-t-[#1F2937]/50 border-t-[1px] flex flex-col justify-center items-center text-center text-[#6B7280] text-xs sm:text-sm">
            © 2025 SOL Jackpot. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
