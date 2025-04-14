"use client";

import { navLinks } from "@/constant/content";
import React from "react";
import { IoMdClose } from "react-icons/io";

interface IMobileNavProps {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: IMobileNavProps) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-full bg-pink-700 dark:bg-gray-900 z-[200] transform transition-transform duration-300 ${
        showNav ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="relative h-full w-full flex flex-col items-center justify-center">
        <IoMdClose onClick={closeNav} className="absolute top-8 right-8 w-8 h-8 text-white cursor-pointer" />
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={link.url}
              onClick={closeNav}
              className="text-white text-2xl font-semibold hover:text-green-300 dark:hover:text-green-400 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
