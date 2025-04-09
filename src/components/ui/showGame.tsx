import { UserBadge } from "./gameUserBadge";
// import { Card, CardContent } from "@/components/ui/card";
import PlayTap from "./playTap";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import ShowBoost from "../../components/ui/showBoost";

export default function ShowGame() {
  return (
    <div className="flex flex-col w-full max-w-[393px]">
      <div
        className="flex relative gap-5 justify-between self-center w-full text-sm leading-snug 
        text-white whitespace-nowrap max-w-[361px] p-4 pt-[8px] mb-2"
      >
        <UserBadge
          username="Roger32"
          avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/23c102c55d98715241148643a53f79f8e6269189ff5caffd0e3759c932d71eb0?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f"
        />
        <button className="flex justify-center items-center px-4 py-2.5 bg-violet-600 min-h-[40px] rounded-[300px]">
          <div className="gap-1 self-stretch my-auto">Boost</div>
        </button>
      </div>
      <PlayTap />
      <div
        className="flex gap-10 justify-between items-center mb-[100px] w-full max-w-[393px] 
      text-sm leading-snug text-white"
      >
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
            {/* {current} / {total} */}
            25 / 100
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
      {/* <div className="flex overflow-hidden flex-col mx-auto w-full bg-black max-w-[480px]">
        <div className="flex relative flex-col px-4 pb-2 mt-6 w-full aspect-[0.615] pt-[475px] rounded-[32px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dc6d3581f7bf3b119926b3d492f070fb00f8fa9dd68d9a958379bf544feb78c?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f"
            alt="Game content"
            className="object-cover absolute inset-0 size-full"
          />
          <Carousel className="max-w-[150px] ml-[100px] pl-[50px]">
            <CarouselContent>
              <CarouselItem>1</CarouselItem>
              <CarouselItem>2</CarouselItem>
              <CarouselItem>3</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className="flex relative flex-col justify-center w-full">
            <div className="flex gap-10 justify-between items-center w-full text-sm leading-snug text-white max-w-[361px]">
              <div className="flex gap-2 items-center self-stretch my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a60be10277761ee214fa8737b48efdab92c9d4402d034d50a4ac3b404386e53d?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f"
                  alt="Progress indicator"
                  className="object-contain shrink-0 self-stretch my-auto aspect-[1.1] w-[23px]"
                />
                <div className="self-stretch my-auto">1,500 / 1,500</div>
              </div>
              <button className="gap-1 self-stretch my-auto">
                How to play?
              </button>
            </div>
            <div className="flex flex-col mt-2.5 max-w-full rounded-[200px] w-[361px]">
              <div className="flex shrink-0 h-2 rounded-[200px]" />
            </div>
          </div>
          <div className="flex relative shrink-0 self-center mt-6 bg-white h-[5px] rounded-[100px] w-[139px]" />
        </div>
        <div className="flex flex-col w-full text-white bg-black min-h-[140px]">
          <div className="flex flex-col w-full text-lg leading-none text-center whitespace-nowrap font-[590]"></div>
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center w-full min-h-[52px]">
              <button className="flex-1 shrink gap-1 self-stretch px-2 py-3 my-auto text-lg tracking-tight leading-none whitespace-nowrap">
                Close
              </button>
              <div className="flex flex-col flex-1 shrink self-stretch my-auto text-center basis-4">
                <div className="flex gap-1 justify-center items-start self-center text-lg leading-none whitespace-nowrap font-[590]">
                  <div>Opaton</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4fcdf47afd8f148d376d4c56c7526da114dcddc68714cfef7896bd4c79aa73e?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f"
                    alt="Opaton icon"
                    className="object-contain shrink-0 aspect-[0.95] w-[21px]"
                  />
                </div>
                <div className="text-sm leading-none">mini app</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <ShowBoost /> */}
    </div>
  );
}
