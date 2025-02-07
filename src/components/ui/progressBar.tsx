import * as React from "react";

interface ProgressBarProps {
  current: number;
  total: number;
  //   onHelpClick: () => void;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div className="flex flex-col justify-center max-w-[361px] w-full">
      <div className="flex gap-10 justify-between items-center w-full text-sm leading-snug text-white">
        <div className="flex gap-2 items-center self-stretch my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a60be10277761ee214fa8737b48efdab92c9d4402d034d50a4ac3b404386e53d?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.1] w-[23px]"
          />
          <div
            className="self-stretch my-auto"
            role="status"
            aria-live="polite"
          >
            {current} / {total}
          </div>
        </div>
        <button
          //   onClick={onHelpClick}
          className="gap-1 self-stretch my-auto hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="How to play"
        >
          How to play?
        </button>
      </div>
      <div className="flex flex-col mt-2.5 w-full rounded-[200px]">
        <div
          className="flex w-full min-h-[8px] rounded-[200px] bg-white"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
