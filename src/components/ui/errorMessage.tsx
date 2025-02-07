export function ErrorMessage() {
  return (
    <div
      className="max-w-[361px] w-full h-[180px] flex flex-col px-2 py-6 text-white rounded-2xl"
      style={{
        backgroundColor: "rgba(16,26,51, 0.7)",
        backdropFilter: "blur(92px)",
        boxShadow: "inset 0 0 40px rgba(255, 255, 255, 0.23)",
      }}
    >
      <div className="flex flex-col items-center">
        <div className="text-2xl font-medium tracking-tight leading-none">
          Sorry, something went wrong
        </div>
        <div className="mt-3 text-lg">We already on the issue</div>
      </div>
      <div
        className="w-[79px] h-[54px] self-center mt-4 text-lg leading-none 
        text-center whitespace-nowrap bg-violet-600 rounded-xl font-[600]"
      >
        O
      </div>
    </div>
  );
}
