import { ProfileAvatar } from "./userProfileAvatar";
import { Settings } from "lucide-react";
import { ProgressBar } from "./progressBar";

interface UserProfileProps {
  username: string;
  avatarUrl: string;
  walletAddress: string;
  walletIconUrl: string;
  balance: string;
  level: number;
  // progressBarUrl: string;
}

export function UserProfile({
  username,
  avatarUrl,
  walletAddress,
  walletIconUrl,
  balance,
  level,
}: //   progressBarUrl
UserProfileProps) {
  return (
    <div
      className="px-[15px] max-w-[361px] w-full h-[140px] flex overflow-hidden flex-col items-center justify-center rounded-2xl"
      style={{
        backgroundColor: "rgba(16,26,51, 0.7)",
        backdropFilter: "blur(92px)",
        boxShadow: "inset 0 0 40px rgba(255, 255, 255, 0.23)",
      }}
    >
      <div className="flex gap-5 justify-between w-full leading-tight text-white whitespace-nowrap max-w-[329px]">
        <ProfileAvatar
          username={username}
          avatarUrl={avatarUrl}
          walletAddress={walletAddress}
          walletIconUrl={walletIconUrl}
        />
        <button className="p-2 bg-[#2a2a3e] w-[40px] h-[40px] rounded-full">
          <Settings className="w-6 h-6" />
        </button>
      </div>
      <div className="flex gap-10 justify-between items-center mt-4 w-full text-white max-w-[329px]">
        <div className="flex flex-col self-stretch my-auto w-[89px]">
          <p className="opacity-50 text-white text-[14px] font-regular leading-[12px] font-display">
            Balance
          </p>
          <div className="w-[130px] mt-1.5 text-lg leading-snug">
            {balance} Opa
          </div>
        </div>
        <div className="flex flex-col justify-center items-end self-stretch my-auto text-right whitespace-nowrap">
          <div className="text-sm leading-none">Level</div>
          <div className="mt-1.5 text-lg font-semibold leading-snug">
            {level}
          </div>
        </div>
      </div>
      <div className="flex absolute bottom-[-1px] left-[-1px] flex-col items-end self-stretch mt-4 max-w-[361px] w-full ">
        <ProgressBar current={level} total={100} />
      </div>
    </div>
  );
}
