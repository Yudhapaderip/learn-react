"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="bg-[url('/background3.png')] bg-cover bg-center h-screen relative w-full">
      <div className="flex flex-col h-full justify-center gap-9 md:gap-20 w-[90%] mx-auto max-w-[1450px] py-14 md:py-28">
        <motion.div
          className="flex flex-col md:flex-row gap-3 brightness-110 justify-between"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl text-center md:text-start font-extrabold text-white md:text-gray-700">
            Realizing <br />
            Innovation <br />
            Through
            <br />
          </h1>
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl lg:text-8xl text-center md:text-end font-extrabold text-blue-400 md:text-blue-300">
              Weight <br />
              <p className="text-center">In</p>
              Motion
            </h1>
          </div>
        </motion.div>
        <div className="flex justify-evenly">
          {/* <Link href={""} className="text-white">
            Learn More
          </Link> */}
        </div>
      </div>
    </div>
  );
}
