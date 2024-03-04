"use client";

import Link from "next/link";
import { navLinks } from "@/constants";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import SimpleButton from "../button/button";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="py-5 bg-transparent fixed top-0 z-10 w-full">
      <div className="max-w-[1450px] w-[90%] mx-auto items-center h-20 shadow-md border-2 bg-white rounded-md">
        <div className="flex justify-between text-black items-center">
          <Link href={"/"}>
            <div id="hero" className="">
              <Image
                src={"/logo-gbu-2.svg"}
                width={250}
                height={50}
                alt="logo-gbu-2.svg"
                className="-my-12 mx-2"
              />
            </div>
          </Link>
          <ul className="flex gap-5 items-end max-md:hidden mb-5 my-5 mx-4">
            {navLinks.map((link, index) => (
              <Link href={link.route} key={index}>
                <li>{link.title}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="max-md:flex flex-col items-end -my-12 mx-5">
          <div
            className="md:hidden text-2xl cursor-pointer text-black"
            onClick={handleClick}
          >
            {isOpen ? <MdClose /> : <FiMenu />}
          </div>
          {isOpen && (
            <ul
              className="md:hidden bg-neutral-600 absolute top-16 mt-1 right-2 
                px-4 py-6 text-center text-white rounded-md flex flex-col gap-3 
                shadow-md"
            >
              {navLinks.map((link, index) => (
                <Link
                  href={link.route}
                  key={index}
                  onClick={() => setIsOpen(false)}
                >
                  <li>{link.title}</li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
