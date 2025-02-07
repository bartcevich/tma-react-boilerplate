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
    <div className="flex overflow-hidden flex-col items-center pt-4 rounded-2xl bg-slate-900 bg-opacity-70 max-w-[361px] w-full">
      <div className="flex gap-5 justify-between w-full leading-tight text-white whitespace-nowrap max-w-[329px]">
        <ProfileAvatar
          username={username}
          avatarUrl={avatarUrl}
          walletAddress={walletAddress}
          walletIconUrl={walletIconUrl}
        />
        <button className="p-2 bg-[#2a2a3e] rounded-full">
          <Settings className="w-6 h-6" />
        </button>
      </div>
      <div className="flex gap-10 justify-between items-center mt-4 w-full text-white max-w-[329px]">
        <div className="flex flex-col self-stretch my-auto w-[89px]">
          <div className="text-sm leading-none">Balance</div>
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
      <div className="flex flex-col items-end self-stretch mt-4 w-full">
        <ProgressBar current={level} total={100} />
      </div>
    </div>
  );
}
