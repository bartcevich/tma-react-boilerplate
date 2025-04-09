"use client";
// import { ErrorMessage } from "./errorMessage";
import { RefreshCcw } from "lucide-react";
import { UserBadge } from "./gameUserBadge";
// import ShopApp from "./shopApp";

export default function StorePage() {
  return (
    <div className="flex flex-col w-full max-w-[393px] min-h-screen flex flex-col gap-[20px]">
      {/* <ErrorMessage /> */}
      <div
        className="flex relative gap-5 justify-between self-center w-full text-sm leading-snug 
              text-white whitespace-nowrap max-w-[361px] p-4 pt-[8px] mb-2"
      >
        <UserBadge
          username="Roger32"
          avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/23c102c55d98715241148643a53f79f8e6269189ff5caffd0e3759c932d71eb0?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f"
        />
        <button className="flex justify-center items-center px-4 py-2.5 bg-violet-600 min-h-[40px] rounded-[300px]">
          <div className="gap-1 self-stretch my-auto">Boost</div>
        </button>
      </div>

      <div
        className="max-w-[361px] w-full h-[180px] flex flex-col justify-between items-center
      px-2 py-6 text-white rounded-2xl"
        style={{
          backgroundColor: "rgba(16,26,51, 0.7)",
          backdropFilter: "blur(92px)",
          boxShadow: "inset 0 0 40px rgba(255, 255, 255, 0.23)",
        }}
      >
        <h2 className="text-white text-[25px] font-medium leading-[32px] tracking-[-2px] font-display">
          Coming soon...
        </h2>
        <p className="opacity-50 text-white text-[17px] font-regular leading-[20px] font-display">
          We are working on an update.
        </p>
        <button className="w-[79px] h-[54px] bg-[#7c3aed] rounded-2xl flex items-center justify-center mx-auto">
          <RefreshCcw className="w-8 h-8" />
        </button>
      </div>
      {/* <ShopApp /> */}
    </div>
  );
}
