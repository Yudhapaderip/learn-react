"use client";

import Hero from "./components/layout/hero";
import AboutUs from "./components/layout/about-us";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <>
      <motion.div className="relative">
        <Hero />
        <AboutUs />
      </motion.div>
    </>
  );
}
