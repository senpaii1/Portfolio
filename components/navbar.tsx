import React from "react";
import Image from "next/image";
import { Socials } from "@/constants";
const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          <Image
            src="/profile.jpg"
            width={50}
            height={50}
            alt="logo"
            className="w-full h-full object-contain rounded-full"
          />
        </div>
        <h1 className="text-white text-[25px] font-semibold">
          Abhinav{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            Negi{" "}
          </span>
        </h1>
      </div>
      <div className="felx flex-row gap-5 mb-2">
        {Socials.map((social) => (
          <Image
            key={social.name}
            src={social.src}
            alt={social.name}
            width={28}
            height={28}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
