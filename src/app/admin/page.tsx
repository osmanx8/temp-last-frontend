/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function Admin() {
    return (
        <>
            <Link href="/" className="font-bold text-lg md:text-xl">
                Back Home
            </Link>
            <div className="flex justify-center items-center gap-5">
                <div className="flex justify-center items-center p-1 border border-[#2878C8] border-solid rounded-lg text-[10px] hover:scale-105 transition-all duration-300 hover:cursor-pointer">Create Game room
                    <div className="flex flex-row justify-center items-center">
                        <div className="text-[#03F5A5">Set time : </div>
                    </div>
                    <input
                        type="number"
                        className="self-stretch bg-transparent outline-none overflow-hidden font-['Inconsolata'] font-medium text-white text-base leading-normal grow shrink basis-0 placeholder-[#2f3132]"
                        placeholder="Enter game time"
                    />
                    <div className="flex justify-center items-center p-1 border border-[#2878C8] border-solid rounded-lg text-[10px] hover:scale-105 transition-all duration-300 hover:cursor-pointer">ok</div>
                </div>
                <div className="flex justify-center items-center p-1 border border-[#2878C8] border-solid rounded-lg text-[10px] hover:scale-105 transition-all duration-300 hover:cursor-pointer">Initialize</div>
                <div className="flex justify-center items-center p-1 border border-[#2878C8] border-solid rounded-lg text-[10px] hover:scale-105 transition-all duration-300 hover:cursor-pointer">Claim</div>
            </div>
        </>
    );
}