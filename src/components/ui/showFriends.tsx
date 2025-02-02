"use client";
import * as React from "react";

// import { ImageCardProps } from "./types";
interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, className }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={`object-contain rounded-none aspect-[5.65] w-[361px] ${className}`}
    />
  );
};

// import { ImageCard } from "./ImageCard";

const imageData = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3c0ac4563282190cfb1d2f6940885d4e572da9a6cdb7c45f379c2ad85acf4149?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f",
    alt: "How it works illustration step 1",
    className: "mt-2",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/300d0729b7973547270d6ead101f0449358c22a52d6f6c0fa2dc9b1f9802eb06?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f",
    alt: "How it works illustration step 2",
    className: "mt-2 -mb-10",
  },
];

export default function ShowFriends() {
  return (
    <div className="flex overflow-hidden flex-col mx-auto w-full max-w-[480px]">
      <div className="flex flex-col items-center py-56 w-full aspect-[0.547]">
        <div className="max-w-[360px] w-full mt-6 text-white">Invite link</div>
        <div className="max-w-[360px] w-full h-16 flex items-center bg-[RGB(16,26,51,0.7)] rounded-2xl border border-[#ffffff] shadow-inner shadow-[0_0_28px_rgba(255,255,255,0.23)]">
          <b className="w-10 h-10 flex justify-center items-center bg-[#7C47CF] rounded-full text-white ml-2.5 mr-3 my-0 ">
            1
          </b>
          <div className="flex flex-col">
            <h3 className="font-medium text-white">Share your invite link</h3>
            <p className="text-sm text-slate-400 text-white">
              Get x2 for each fren who accepts
            </p>
          </div>
        </div>
        <div
          className="flex relative shrink-0 mt-2 h-16 rounded-2xl"
          role="button"
          tabIndex={0}
        />
        <div className="max-w-[360px] w-full mt-6 text-white">How it works</div>
        {imageData.map((image, index) => (
          <ImageCard
            key={index}
            src={image.src}
            alt={image.alt}
            className={image.className}
          />
        ))}
      </div>
    </div>
  );
}
