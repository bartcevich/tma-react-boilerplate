"use client";

import { useState } from "react";
import { Settings, X } from "lucide-react";
// import Image from "next/image"

export default function ShowProfile() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white font-sans p-4">
      {/* Profile Card */}
      <div className="bg-[#1a1a2e] rounded-3xl p-6 relative">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            {/* <Image src="/placeholder.svg" alt="Profile avatar" width={64} height={64} className="rounded-full" /> */}
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold">Roger32</h1>
              <button className="bg-[#7c3aed] text-white px-4 py-2 rounded-full flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"
                    fill="currentColor"
                  />
                </svg>
                Connect
              </button>
            </div>
          </div>
          <button className="p-2 bg-[#2a2a3e] rounded-full">
            <Settings className="w-6 h-6" />
          </button>
        </div>

        {/* Balance and Level */}
        <div className="flex justify-between mt-6">
          <div>
            <p className="text-gray-400">Balance</p>
            <p className="text-2xl font-bold">0 Opa</p>
          </div>
          <div className="text-right">
            <p className="text-gray-400">Level</p>
            <p className="text-2xl font-bold">0</p>
          </div>
        </div>
      </div>

      {/* Inventory Section */}
      <div className="mt-8">
        <h2 className="text-2xl text-gray-400">Inventory</h2>
        <div className="h-40 bg-[#1a1a2e] rounded-3xl mt-4"></div>
      </div>

      {/* Connect Wallet Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-end">
          <div className="bg-[#1a1a2e] w-full rounded-t-[2rem] p-6 space-y-6">
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 bg-[#2a2a3e] rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="text-center space-y-4">
              <h2 className="text-3xl font-semibold">Connect your wallet</h2>
              <p className="text-gray-400 text-lg">
                Open Wallet in Telegram or select your wallet to connect
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
