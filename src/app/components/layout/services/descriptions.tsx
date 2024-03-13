import { Projects } from "@/constants/projects";
import { motion } from "framer-motion";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";

type DescriptionProps = {
  activeImage: any;
  clickNext: any;
  clickPrev: any;
};

export default function Descriptions({
  activeImage,
  clickNext,
  clickPrev,
}: DescriptionProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="">Hello</div>
      {Projects.map((desc, id) => (
        <div
          key={id}
          className={`${
            id === activeImage
              ? "block w-full h-full md:h-[80vh] py-20 md:px-20 px-10 text-left"
              : "hidden"
          }`}
        >
          <motion.div
            initial={{
              opacity: id === activeImage ? 0 : 0,
              scale: id === activeImage ? 0 : 1,
            }}
            animate={{
              opacity: id === activeImage ? 1 : 0.5,
              scale: id === activeImage ? 1 : 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="w-full"
          >
            <div className="py-16 text-5xl font-extrabold">{desc.title}</div>
            <div className="leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic text-gray-600">
              {desc.desc}
            </div>
          </motion.div>
          <button className="text-white">Click for more</button>
          <div className="absolute md:bottom-1 bottom-10 right-10 md:right-0 w-full flex justify-center items-center">
            <div
              className="absolute bottom-2 right-10 cursor-pointer mx-20 text-5xl"
              onClick={clickPrev}
            >
              <FaRegArrowAltCircleLeft />
            </div>
            <div
              className="absolute bottom-2 right-10 cursor-pointer text-5xl"
              onClick={clickNext}
            >
              <FaRegArrowAltCircleRight />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
