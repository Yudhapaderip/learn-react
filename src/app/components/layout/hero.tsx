export default function Hero() {
  return (
    <div
      className="bg-[url('/background3.png')] h-screen relative
  w-full bg-cover"
    >
      <div className="flex flex-col h-full justify-center gap-20 w-[90%] mx-auto max-w-[1450px] py-28">
        <div className="flex flex-row gap-3 brightness-110 justify-between">
          <h1 className="text-8xl text-start font-extrabold text-gray-700">
            Realizing <br />
            Innovation <br />
            Through
            <br />
          </h1>
          <div className="flex flex-col items-center">
            <h1 className="text-8xl text-end font-extrabold text-blue-300">
              Weight <br />
              <p className="text-center">In</p>
              Motion
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
