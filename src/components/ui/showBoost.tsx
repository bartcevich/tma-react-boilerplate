// import React from "react";
import BoosterHeader from "./boosterHeader";
import BoosterProfileSummary from "./boosterProfileSummary";
import BoosterCard from "./boosterCard";

function ShowBoost() {
  const boosters = [
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b7eea216636afab10ee3bff5e0e4ab29713294d8eba2768c8b9ac1b30697c97c?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f",
      title: "Full Energy",
      description: "6/6 available",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0071d39bce0fe097a47bbbfc7153bb2b5c411d400ad97c0ea97cbfa1bacc9112?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f",
      title: "Multitap",
      description: "Level 13",
      value: 300,
      unit: "points",
      progress:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2a6e198c0b9ca74e551bc8e9507313b2079b9b8dee2af4440b650a9f906fc0e5?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d9de4487f002851e0cd9aacf50b7e6b6b3f373ca7b6372fc364650a0ded80dfc?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f",
      title: "Energy limit",
      description: "Level 13",
      value: 500,
      unit: "points",
      progress:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2a6e198c0b9ca74e551bc8e9507313b2079b9b8dee2af4440b650a9f906fc0e5?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f",
    },
  ];

  return (
    <div className="flex overflow-hidden flex-col mx-auto w-full text-white bg-black max-w-[480px]">
      <BoosterHeader
        time="9:41"
        menuSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/4427eef6d6d6af49bf6ad918d43f09e5fc1efd8a0a4575f0d3f7fc840307eff1?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f"
        profileSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/546982ad317e3aa816fd8a86b44eaa0c4fc2158e50cc484346475e6014eaa0cb?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f"
      />
      <div className="flex flex-col px-4 pt-4 pb-2 -mt-1.5 w-full bg-slate-900">
        <BoosterProfileSummary
          avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/23c102c55d98715241148643a53f79f8e6269189ff5caffd0e3759c932d71eb0?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f"
          username="Roger32"
          scoreSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/16b35c40417e4f27e22008baf03c4a708aa1fbfedc872dfd5a58bf317e06287e?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f"
          score={321976}
        />
        <div className="self-stretch mt-5 text-lg font-medium leading-tight">
          Tapping boosters
        </div>
        {boosters.map((booster, index) => (
          <BoosterCard key={index} {...booster} />
        ))}
        <div className="flex shrink-0 self-center mt-96 bg-white h-[5px] rounded-[100px] w-[139px]" />
      </div>
    </div>
  );
}

export default ShowBoost;
