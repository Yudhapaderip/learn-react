import Hero from "./components/hero/hero";
import WimLayout from "./components/layout/about-us";

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-x-hidden">
      <div className="relative h-full w-full">
        <Hero />
        <WimLayout />
      </div>
    </main>
  );
}
