import { useState } from "react";
import walletIconSvg from "@/assets/walletIcon.svg";

interface ProfileAvatarProps {
  username: string;
  avatarUrl: string;
  walletAddress: string;
  walletIconUrl: string;
}

export function ProfileAvatar({
  username,
  avatarUrl,
  walletAddress,
}: // walletIconUrl,
ProfileAvatarProps) {
  const [doConnect, setDoConnect] = useState(true);
  return (
    <div className="flex gap-2 items-end">
      <img
        loading="lazy"
        src={avatarUrl}
        alt={`${username}'s profile avatar`}
        className="object-contain shrink-0 w-11 aspect-square rounded-[56px]"
      />
      <div className="flex gap-[3px] flex-col w-[92px]">
        <div className="text-lg font-medium">{username}</div>
        {doConnect && (
          <button
            onClick={() => setDoConnect(false)}
            className="w-[88px] h-[24px] bg-[#7c3aed] flex items-center justify-center gap-2
            py-2 rounded-full text-white text-[14px] font-medium leading-[20px] font-display"
          >
            <img
              loading="lazy"
              src={walletIconSvg}
              alt="wallet icon"
              className="object-contain shrink-0 w-[14px] h-[14px] "
            />
            Connect
          </button>
        )}
        {!doConnect && (
          <div className="flex gap-1 items-end mt-1 w-full text-sm text-center">
            <img
              loading="lazy"
              src={walletIconSvg}
              alt="wallet icon"
              className="object-contain shrink-0 w-4 aspect-[0.94]"
            />
            <div>{walletAddress}</div>
          </div>
        )}
      </div>
    </div>
  );
}
