"use client";

import {
  Home,
  ListTodo,
  GamepadIcon,
  Users,
  User,
  RefreshCcw,
} from "lucide-react";
// import Image from "next/image"

export default function StorePage() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white font-sans">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-2 bg-[#1a1a2e] rounded-full py-2 px-3">
          {/* <Image src="/placeholder.svg" alt="Profile avatar" width={32} height={32} className="rounded-full" /> */}
          <span className="font-semibold">Roger32</span>
        </div>
        <div className="flex items-center gap-2 bg-[#1a1a2e] rounded-full py-2 px-4">
          {/* <Image src="/placeholder.svg" alt="SOPA coin" width={24} height={24} className="rounded-full" /> */}
          <span className="font-semibold text-lg">321,976</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 mt-20">
        <div className="w-full max-w-md bg-[#1a1a2e]/50 backdrop-blur-sm rounded-3xl p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Coming soon...</h1>
          <p className="text-gray-400 text-xl mb-8">
            We are working on an update.
          </p>
          <div className="w-16 h-16 bg-[#7c3aed] rounded-2xl flex items-center justify-center mx-auto">
            <RefreshCcw className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 p-4">
        <div className="flex justify-between items-center bg-[#1a1a2e]/80 backdrop-blur-sm rounded-full p-4">
          <button className="flex flex-col items-center gap-1 text-white">
            <Home className="w-6 h-6" />
            <span className="text-xs">Shop</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <ListTodo className="w-6 h-6" />
            <span className="text-xs">Tasks</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <GamepadIcon className="w-6 h-6" />
            <span className="text-xs">Game</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <Users className="w-6 h-6" />
            <span className="text-xs">Friends</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <User className="w-6 h-6" />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
