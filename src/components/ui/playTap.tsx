import React, { useState, useEffect } from "react";
import Image from "@/assets/backgroundGame.png";

const PlayTap: React.FC = () => {
  const [manyUser, setManyUser] = useState(321.976);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;
    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(timer!);
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [timeLeft]);

  function gameStart() {
    if (timeLeft > 0) {
      setManyUser(manyUser + 1);
    } else {
      setTimeLeft(100);
    }
  }

  return (
    <div className="flex overflow-hidden flex-col mx-auto w-full max-w-[393px]">
      <div className="flex relative flex-col items-center px-4 pb-2 mt-6 w-full aspect-[0.615] rounded-[32px]">
        <img src={Image} alt="image" className="w-[393px] h-[640px]" />
        <div
          className="flex absolute gap-5 justify-between self-center w-full text-sm leading-snug 
                text-white whitespace-nowrap max-w-[361px] p-4 pt-[8px] mb-2"
        >
          <div className="flex gap-2 items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc74db8bf8348178e5df71027a354e29c2e22983224ef49d6706aa3d2850693d?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f"
              alt="many user"
              className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square rounded-[56px]"
            />
            <div className="self-stretch my-auto">{manyUser}</div>
          </div>
          <div className="flex gap-2 items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e33b1a312876942517c1f19c9c93b75ceb5958188c29f6dbf14998fd3340159?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f"
              alt="time game"
              className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square rounded-[56px]"
            />
            <div className="self-stretch my-auto">
              {timeLeft > 0
                ? `${Math.floor(timeLeft / 60)
                    .toString()
                    .padStart(2, "0")}:${(timeLeft % 60)
                    .toString()
                    .padStart(2, "0")}`
                : "1:30"}
            </div>
          </div>
        </div>
        <button
          onClick={() => gameStart()}
          className="flex absolute left-[20px] top-[60px] flex-col gap-5 justify-between items-start px-4 pt-4 
          max-w-[300px] w-full aspect-[0.728] rounded-[32px_32px_0px_0px]"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfa3801a241863a898ca77b6bb1223b01c6cea4e3ecf1aff42f5ed5361a76b06?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f"
            alt=""
            className="object-cover absolute inset-0 size-full"
          />
        </button>
      </div>
    </div>
  );
};

export default PlayTap;
