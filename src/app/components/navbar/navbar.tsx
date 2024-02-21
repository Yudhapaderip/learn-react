"use client";

import Link from "next/link";
import { navLinks } from "@/constants";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import SimpleButton from "../button/button";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="py-5 bg-transparent fixed top-0 z-10 w-full">
      <div className="max-w-[1450px] mx-auto items-center h-20 shadow-md border-2 bg-white rounded-md">
        <div className="flex flex-col">
          <div className="flex justify-between my-6 mx-4 text-black">
            <Link href={"/"}>
              <div className="flex">Image here</div>
            </Link>
            <ul className="flex gap-5 items-end max-md:hidden">
              {navLinks.map((link, index) => (
                <Link href={link.route} key={index}>
                  <li>{link.title}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="max-md:flex justify-end items-center mx-4 -my-12">
            <div
              className="md:hidden text-2xl cursor-pointer text-white"
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
      </div>
    </nav>
  );
}
