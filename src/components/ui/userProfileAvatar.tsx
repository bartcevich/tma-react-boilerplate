// import * as React from "react";

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
  walletIconUrl,
}: ProfileAvatarProps) {
  return (
    <div className="flex gap-2 items-end">
      <img
        loading="lazy"
        src={avatarUrl}
        alt={`${username}'s profile avatar`}
        className="object-contain shrink-0 w-11 aspect-square rounded-[56px]"
      />
      <div className="flex flex-col w-[92px]">
        <div className="text-lg font-medium">{username}</div>
        <div className="flex gap-1 items-end mt-1 w-full text-sm text-center">
          <img
            loading="lazy"
            src={walletIconUrl}
            alt=""
            className="object-contain shrink-0 w-4 aspect-[0.94]"
          />
          <div>{walletAddress}</div>
        </div>
      </div>
    </div>
  );
}
