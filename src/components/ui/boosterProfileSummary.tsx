import React from "react";

interface ProfileSummaryProps {
  avatarSrc: string;
  username: string;
  scoreSrc: string;
  score: number;
}

const ProfileSummary: React.FC<ProfileSummaryProps> = ({
  avatarSrc,
  username,
  scoreSrc,
  score,
}) => (
  <div className="flex gap-5 justify-between w-full whitespace-nowrap">
    <div className="flex items-start py-1 pr-3.5 pl-1 text-sm font-medium leading-snug text-center bg-slate-900 bg-opacity-70 min-h-[40px] rounded-[48px]">
      <div className="flex gap-2 items-center">
        <img
          loading="lazy"
          src={avatarSrc}
          alt={`Avatar of ${username}`}
          className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square rounded-[56px]"
        />
        <div className="self-stretch my-auto">{username}</div>
      </div>
    </div>
    <div className="flex gap-2 items-center my-auto text-2xl font-semibold leading-none uppercase">
      <img
        loading="lazy"
        src={scoreSrc}
        alt={`${username}'s score icon`}
        className="object-contain shrink-0 self-stretch my-auto w-8 aspect-[1.07] rounded-[132px]"
      />
      <div className="gap-3 self-stretch my-auto min-h-[32px] w-[92px]">
        {score.toLocaleString()}
      </div>
    </div>
  </div>
);

export default ProfileSummary;
