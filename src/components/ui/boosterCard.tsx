import React from "react";

interface BoosterCardProps {
  iconSrc: string;
  title: string;
  description: string;
  value?: number;
  unit?: string;
  progress?: string;
}

const BoosterCard: React.FC<BoosterCardProps> = ({
  iconSrc,
  title,
  description,
  value,
  unit,
  progress,
}) => (
  <div className="flex overflow-hidden gap-5 justify-between px-3.5 py-3 mt-2 w-full rounded-2xl bg-slate-900 bg-opacity-70">
    <div className="flex gap-2 items-start text-sm">
      <img
        loading="lazy"
        src={iconSrc}
        alt=""
        className="object-contain shrink-0 w-10 aspect-square"
      />
      <div className="flex flex-col">
        <div className="font-semibold">{title}</div>
        <div className="mt-1.5">{description}</div>
      </div>
    </div>
    {value !== undefined && unit !== undefined && (
      <div className="flex gap-2 my-auto text-lg font-medium whitespace-nowrap">
        <img
          loading="lazy"
          src={progress}
          alt=""
          className="object-contain shrink-0 w-6 aspect-square rounded-[132px]"
        />
        <div>{value}</div>
      </div>
    )}
  </div>
);

export default BoosterCard;
