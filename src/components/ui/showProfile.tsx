"use client";

import { UserProfile } from "./userProfile";
import { useState } from "react";
import { X } from "lucide-react";
import walletIconSvg from "@/assets/walletIcon.svg";
// import Image from "next/image"

export default function ShowProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let background = "";
  if (!isModalOpen) {
    background = "rgba(118, 78, 207, 1)";
  } else {
    background = "rgba(118, 78, 207, 0.5)";
  }

  return (
    <div className="w-full max-w-[393px]  min-h-screen text-white font-sans p-4">
      <UserProfile
        username={"Roger32"}
        avatarUrl={
          "https://cdn.builder.io/api/v1/image/assets/TEMP/23c102c55d98715241148643a53f79f8e6269189ff5caffd0e3759c932d71eb0?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f"
        }
        walletAddress={"QTdA..fg3N"}
        walletIconUrl={
          "https://cdn.builder.io/api/v1/image/assets/TEMP/16b35c40417e4f27e22008baf03c4a708aa1fbfedc872dfd5a58bf317e06287e?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f"
        }
        balance={"321,976"}
        level={25}
      />

      {/* Inventory Section */}
      {/* <div className="mt-8">
        <h2 className="text-2xl text-gray-400">Inventory</h2>
        <div className="h-40 bg-[#1a1a2e] rounded-3xl mt-4"></div>
      </div> */}

      {/* Connect Wallet Modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full my-[25px] text-white py-4 rounded-2xl text-xl flex items-center justify-center gap-2"
        style={{
          backgroundColor: `${background}`,
        }}
      >
        Connect Wallet
        <img
          loading="lazy"
          src={walletIconSvg}
          alt="wallet icon"
          className="object-contain shrink-0 w-[14px] h-[14px] "
        />
      </button>
      {isModalOpen && (
        <div className="inset-0 bg-black/50 flex items-end">
          <div className=" max-w-[393px] w-full h-[400px] bg-[#1a1a2e] w-full rounded-t-[2rem] p-4">
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 bg-[#2a2a3e] rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="text-center ">
              {/* space-y-4 */}
              <h2 className="mb-[15px] text-white text-[24px] font-medium leading-[32px] tracking-[1px] font-display">
                Connect your wallet
              </h2>
              <p className="mb-[10px] text-white text-[14px] font-regular leading-[17px] font-display">
                Open Wallet in Telegram or select
              </p>
              <p className="mb-[10px] text-white text-[14px] font-regular leading-[17px] font-display">
                your wallet to connect
              </p>
            </div>

            <button className="w-full bg-[#7c3aed] text-white py-4 rounded-2xl text-xl flex items-center justify-center gap-2">
              Open Wallet in Telegram
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-5l6 2.5-6 2.5z" />
              </svg>
            </button>

            <div className="grid grid-cols-5 gap-4 pt-4">
              {[
                { name: "Tonkeeper", icon: "📦" },
                { name: "MyTonWallet", icon: "⭕" },
                { name: "Tonhub", icon: "💎" },
                { name: "Open Link", icon: "↗️" },
                { name: "Copy", icon: "📄" },
              ].map((wallet) => (
                <button
                  key={wallet.name}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-16 h-16 bg-[#2a2a3e] rounded-xl flex items-center justify-center text-2xl">
                    {wallet.icon}
                  </div>
                  <span className="text-xs text-gray-400">{wallet.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
