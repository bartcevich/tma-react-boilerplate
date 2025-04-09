import * as React from "react";
// import { UserBadgeProps } from './types';
export interface UserBadgeProps {
  username: string;
  avatarSrc: string;
}

export const UserBadge: React.FC<UserBadgeProps> = ({
  username,
  avatarSrc,
}) => (
  // export const UserBadge = ({ username: str, avatarSrc }) => (
  <div
    className="flex items-start py-1 pr-3.5 pl-1 font-medium text-center  min-h-[40px] rounded-[48px]"
    style={{
      backgroundColor: "rgba(16,26,51, 0.7)",
      backdropFilter: "blur(92px)",
      boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.23)",
    }}
  >
    <div className="flex gap-2 items-center">
      <img
        loading="lazy"
        src={avatarSrc}
        alt={`${username}'s avatar`}
        className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square rounded-[56px]"
      />
      <div className="self-stretch my-auto">{username}</div>
    </div>
  </div>
);
