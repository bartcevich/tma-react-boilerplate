import { useState, useEffect } from "react";
import Image from "@/assets/ForFriends.webp";
import { LOCALES } from "@/i18n/locales";
import { messages } from "../../i18n/messages";

const cardsData = [
  {
    number: 1,
    textTop: "Share your invite link",
    textBottom: "Get x2 for each fren who accepts",
  },
  {
    number: 2,
    textTop: "Your frens join Zopaton",
    textBottom: "And start farming points",
  },
];

const getBrowserLocale = () => {
  // const language = navigator.language;
  const language = "en-US";
  console.log(language, Object.values(LOCALES).includes(language));
  return Object.values(LOCALES).includes(language) ? language : LOCALES.ENGLISH;
};

export default function ShowFriends() {
  const [currentLocaleState, setCurrentLocaleState] = useState(LOCALES.ENGLISH);

  useEffect(() => {
    const browserLocale = getBrowserLocale();
    setCurrentLocaleState(browserLocale);
  }, []);

  return (
    <div className="flex flex-col items-center py-1 w-full aspect-[0.547]">
      <img
        src={Image}
        alt="image page friends"
        className="w-[361px] h-[200px]"
      />
      <div
        className="max-w-[361px] w-full mt-6 text-white text-[17px] font-medium 
        leading-[20.29px] text-left font-display"
      >
        {messages[currentLocaleState].Friends_invite}
      </div>
      <div
        className="mt-2 max-w-[361px] w-full h-[64px] flex justify-between px-[16px] py-6 text-white rounded-2xl"
        style={{
          backgroundColor: "rgba(16,26,51, 0.7)",
          backdropFilter: "blur(92px)",
          boxShadow: "inset 0 0 40px rgba(255, 255, 255, 0.23)",
        }}
      >
        <p
          className="text-white text-[14px] font-regular 
          leading-[16.71px] text-left font-display"
        >
          https://t.me/zopaton/missions?startapp
        </p>
        <svg
          width="19"
          height="17"
          viewBox="0 0 19 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 15.7604C0 8.39375 7.1028 4.42708 10.1215 4.42708V0L19 8.85417L10.1215 17V11.9872C6.14393 11.9872 1.71651 14.5027 0 15.7604Z"
            fill="white"
          />
        </svg>
      </div>
      <div
        className="max-w-[360px] w-full mt-6 text-white text-[17px] font-medium 
        leading-[20.29px] text-left font-display"
      >
        How it works
      </div>
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="mt-2 max-w-[361px] w-full h-[64px] flex items-center text-white rounded-2xl"
          style={{
            backgroundColor: "rgba(16,26,51, 0.7)",
            backdropFilter: "blur(92px)",
            boxShadow: "inset 0 0 40px rgba(255, 255, 255, 0.23)",
          }}
        >
          <p
            className="w-10 h-10 flex justify-center items-center bg-[#7C47CF] rounded-full
           ml-2.5 mr-3 my-0 text-white text-[17px] font-bold font-display"
          >
            {card.number}
          </p>
          <div className="flex flex-col">
            <h3
              className="mb-[4px] text-white text-[14px] font-regular leading-[16.71px] 
            text-left font-display"
            >
              {card.textTop}
            </h3>
            <p
              className="opacity-50 text-white text-[14px] font-regular leading-[16.71px] 
            text-left font-display"
            >
              {card.textBottom}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
