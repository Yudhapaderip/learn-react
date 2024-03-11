import { Images } from "@/constants/images";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="w-full h-screen">
      <div className="flex flex-col">
        <h1 className="items-start text-center">Our projects</h1>
        <div className="w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 rounded 2xl">
          {Images.map((img, id) => (
            <div key={id}>
              <Image
                src={img.src}
                key={id}
                alt={img.title}
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-tl-3xl rounded-bl-3xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
