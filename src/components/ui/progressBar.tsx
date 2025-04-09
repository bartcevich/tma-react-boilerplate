import * as React from "react";

interface ProgressBarProps {
  current: number;
  total: number;
  //   onHelpClick: () => void;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div className="flex flex-row w-full">
      <div
        className="flex w-full min-h-[8px] bg-white"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ width: `${progress}%`, borderRadius: "1px 1px 1px 30px" }}
      />
      <div
        className="flex w-full min-h-[8px] bg-white"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{
          width: `${100 - progress}%`,
          backgroundColor: "rgba(1,23,45, 1)",
          borderRadius: "1px 1px 30px 1px",
        }}
      />
    </div>
  );
};
