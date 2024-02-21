export default function Hero() {
  return (
    <div
      className="bg-[url('/background3.png')] h-screen relative
  w-screen bg-cover"
    >
      <div className="flex flex-col h-full items-center justify-center gap-20 w-[90%] mx-auto max-w-[1450px] py-28">
        <div className="flex flex-col gap-3 text-black">
          <p className="text-2xl font-bold">
            Your Smart Infrastructure Partner
          </p>
          <h1 className="text-6xl text-center font-extrabold text-gray-600">
            Realizing innovation through{" "}
            <span className="text-sky-500 font-extrabold">weigh In motion</span>
          </h1>
          <div className="h-full w-full "></div>
        </div>
      </div>
    </div>
  );
}
