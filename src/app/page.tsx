import Hero from "./components/hero/hero";
import WimLayout from "./components/layout/wim-layout";
import Navbar from "./components/navbar/navbar";

export default function Home() {
  return (
    <main className="flex h-screen w-screen">
      <div className="grid grid-cols-6 grid-rows-5 h-full w-full">
        <Hero />
        <div className="col-start-2 col-end-6">
          <Navbar />
        </div>
      </div>
    </main>
  );
}
