import React from "react";

const ShopHeader: React.FC = () => {
  return (
    <div className="flex z-10 flex-col w-full bg-black min-h-[140px]">
      <div className="flex flex-col w-full text-lg leading-none text-center whitespace-nowrap font-[590]">
        <div className="flex relative flex-col pb-3.5 pl-4 w-full aspect-[4.793]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/546982ad317e3aa816fd8a86b44eaa0c4fc2158e50cc484346475e6014eaa0cb?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f"
            alt=""
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative gap-5 justify-between self-end w-full max-w-[342px]">
            <div className="my-auto">9:41</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4427eef6d6d6af49bf6ad918d43f09e5fc1efd8a0a4575f0d3f7fc840307eff1?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f"
              alt=""
              className="object-contain shrink-0 max-w-full aspect-[2.65] w-[143px]"
            />
          </div>
          <div className="flex relative shrink-0 mt-1 max-w-full h-2.5 rounded-xl bg-neutral-700 w-[361px]" />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center w-full min-h-[52px]">
          <div className="flex gap-1 items-center self-stretch px-2 py-3 my-auto text-lg leading-none whitespace-nowrap w-[131px]">
            <div className="self-stretch my-auto text-center font-[590]"></div>
            <div className="self-stretch my-auto tracking-tight">Back</div>
          </div>
          <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto text-center basis-4">
            <div className="flex gap-1 justify-center items-start self-center text-lg leading-none whitespace-nowrap font-[590]">
              <div>Opaton</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4fcdf47afd8f148d376d4c56c7526da114dcddc68714cfef7896bd4c79aa73e?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f"
                alt=""
                className="object-contain shrink-0 aspect-[0.95] w-[21px]"
              />
            </div>
            <div className="text-sm leading-none">mini app</div>
          </div>
          <div className="flex flex-1 shrink gap-4 items-center self-stretch py-3 pr-4 my-auto text-lg leading-none text-right whitespace-nowrap basis-0">
            <div className="gap-2.5 self-stretch my-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopHeader;
