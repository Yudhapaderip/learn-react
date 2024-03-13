"use client";

import { Projects } from "@/constants/projects";
import Image from "next/image";
import { useState, useEffect } from "react";
import Descriptions from "./descriptions";
import { motion } from "framer-motion";
import { act } from "react-dom/test-utils";

export default function ServicesPage() {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === Projects.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(Projects.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <div className="w-full h-screen my-20 items-center flex">
      <div className="w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 p-6 md:p-0">
        {Projects.map((img, id) => (
          <motion.div
            key={id}
            className={`${
              id === activeImage
                ? "block w-full h-[100vh] object-cover transition-all duration-500 ease-in-out"
                : "hidden"
            }`}
          >
            <Image
              key={id}
              src={img.src}
              alt={img.alt}
              width={800}
              height={800}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
      <div className="w-full h-full flex justify-center transition-transform ease-in-out duration-500 border-2 border-black">
        <Descriptions
          activeImage={activeImage}
          clickNext={clickNext}
          clickPrev={clickPrev}
        />
      </div>
    </div>
  );
}
