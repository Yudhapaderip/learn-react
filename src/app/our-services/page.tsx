"use client";

import { useState } from "react";

export default function OurServices() {
  const [count, setCount] = useState(0);

  const CountHandler = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="relative w-full h-screen">
      <div className="flex h-full justify-center w-[90%] mx-auto max-w-[1450px] py-14 md:py-28">
        <div>
          <h1>This is our services page</h1>
        </div>
      </div>
    </div>
  );
}
