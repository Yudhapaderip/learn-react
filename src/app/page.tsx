"use client";

import Hero from "./components/layout/hero";
import AboutUs from "./components/layout/about-us";
import { motion } from "framer-motion";
import ServicesPage from "./components/layout/our-services";
export default function Home() {
  return (
    <>
      <div className="relative">
        <Hero />
        <AboutUs />
        <ServicesPage />
      </div>
    </>
  );
}
