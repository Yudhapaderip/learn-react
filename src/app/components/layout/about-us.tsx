import SimpleCard from "../card/simple-card";

export default function AboutUs() {
  return (
    <div id="About Us" className="bg-white h-full w-full">
      <div className="flex flex-col mt-72">
        <div className="items-center text-center text-3xl font-semibold">
          About us content goes here
        </div>
        <div className="flex flex-row justify-between mt-20">
          <SimpleCard className="bg-black text-white">this is card</SimpleCard>
          <SimpleCard className="bg-black text-white">this is card</SimpleCard>
          <SimpleCard className="bg-black text-white">this is card</SimpleCard>
        </div>
      </div>
    </div>
  );
}
