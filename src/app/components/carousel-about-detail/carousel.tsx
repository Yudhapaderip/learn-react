"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import SimpleCard from "../card/simple-card";
import Image from "next/image";
import { Images } from "@/constants/images";

export default function Carousel() {
  return (
    <div className="carousel flex items-center text-center w-full h-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="flex flex-col w-full gap-10">
          <div>
            <h1>Meet The Team</h1>
            <button className="border-4 border-bg-black">
              <h1> kamu meng-klik kali</h1>
            </button>
          </div>
          <div className="flex flex-row justify-center w-full gap-1 md:gap-10 px-44 md:px-0">
            {Images.slice(0, 5).map((img, id) => (
              <Image
                src={img.src}
                key={id}
                alt={img.title}
                width={300}
                height={300}
                className="object-cover object-top w-32 md:w-52 h-32 md:h-52 rounded-full border-2 border-black"
              />
            ))}
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <Link href="#slide2" className="btn btn-circle">
            ❮
          </Link>
          <Link href="#slide2" className="btn btn-circle">
            ❯
          </Link>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="flex flex-row justify-center w-full gap-1 md:gap-10 px-44 md:px-0">
          {Images.slice(5, 10).map((img, id) => (
            <Image
              src={img.src}
              key={id}
              alt={img.title}
              width={300}
              height={300}
              className="object-cover object-top w-32 md:w-52 h-32 md:h-52 rounded-full border-2 border-black"
            />
          ))}
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <Link href="#slide1" className="btn btn-circle">
            ❮
          </Link>
          <Link href="#slide1" className="btn btn-circle">
            ❯
          </Link>
        </div>
      </div>
    </div>
  );
}
