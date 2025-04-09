import { RefreshCcw } from "lucide-react";

export function ErrorMessage() {
  return (
    <div
      className="max-w-[361px] w-full h-[180px] flex flex-col justify-between items-center
      px-2 py-6 text-white rounded-2xl"
      style={{
        backgroundColor: "rgba(16,26,51, 0.7)",
        backdropFilter: "blur(92px)",
        boxShadow: "inset 0 0 40px rgba(255, 255, 255, 0.23)",
      }}
    >
      <h2 className="text-white text-[25px] font-medium leading-[32px] tracking-[-2px] font-display">
        Sorry, something went wrong
      </h2>
      <p className="opacity-50 text-white text-[17px] font-regular leading-[20px] font-display">
        We already on the issue
      </p>
      <button className="w-[79px] h-[54px] bg-[#7c3aed] rounded-2xl flex items-center justify-center mx-auto">
        <RefreshCcw className="w-8 h-8" />
      </button>
    </div>
  );
}
