import * as React from "react";
import { RewardCard } from "./dailyCheckinCard";

const rewards = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0f945e0dcf575f35d8b5854071d93b98da3c2e5fff2243a68447a4220c7a05bb?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f",
    amount: "500 Coins",
    label: "Coins reward",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b7eea216636afab10ee3bff5e0e4ab29713294d8eba2768c8b9ac1b30697c97c?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f",
    label: "Daily farm",
  },
];

export const DailyCheckin: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col px-6 py-12 text-white rounded-3xl bg-slate-900 bg-opacity-70 max-w-[361px]">
      <div className="flex flex-col items-start text-center">
        <div className="text-2xl font-medium tracking-tight leading-none text-center w-full">
          Daily check-in on TON
        </div>
        <div className="mt-3 text-base tracking-tight leading-5">
          Make a small daily TON transaction (just a few <br />
          centa) and receive massive rewards!
        </div>
      </div>
      <div className="flex gap-2 items-center mt-10 text-3xl font-medium tracking-tight leading-none text-center">
        {rewards.map((reward, index) => (
          <div
            key={index}
            className={index === 0 ? "w-[155px]" : "flex-1 shrink basis-0"}
          >
            <RewardCard {...reward} />
          </div>
        ))}
      </div>
      <button
        className="gap-2 self-stretch px-6 py-4 mt-6 text-lg font-semibold bg-violet-600 rounded-xl"
        onClick={() => {}}
        tabIndex={0}
        aria-label="Complete transaction"
      >
        Complete transaction
      </button>
    </div>
  );
};
