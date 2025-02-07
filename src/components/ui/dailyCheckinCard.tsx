import * as React from "react";
// import { RewardCardProps } from "./types";
interface RewardCardProps {
  imageSrc: string;
  amount?: string;
  label: string;
}

export const RewardCard: React.FC<RewardCardProps> = ({
  imageSrc,
  amount,
  label,
}) => {
  return (
    <div className="flex flex-col self-stretch px-4 py-6 my-auto rounded-xl bg-violet-600 bg-opacity-10">
      <img
        loading="lazy"
        src={imageSrc}
        alt={amount ? `${amount} reward icon` : `${label} icon`}
        className={`object-contain self-center ${
          amount ? "w-12" : "w-10"
        } aspect-square`}
      />
      <div className={`${amount ? "mt-3" : "mt-5"}`}>{amount || label}</div>
    </div>
  );
};
