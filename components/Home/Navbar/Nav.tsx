"use client";

import { navLinks } from "@/constant/content";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import ThemeToggle from "../../Helper/ThemeToggle";

interface IProps {
  openNav: () => void;
}

const Nav = ({ openNav }: IProps) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY > 0);
    };

    window.addEventListener("scroll", handler);
    // Initial check
    handler();

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`transition-all duration-200 h-20 z-[100] fixed w-full ${
        navBg ? "bg-pink-700 dark:bg-gray-900 shadow-md dark:shadow-gray-800" : "bg-transparent"
      }`}
    >
      <div className="flex items-center h-full justify-between sm:w-[80%] w-[90%] mx-auto">
        {/* LOGO */}
        <div className="text-white font-bold text-2xl sm:text-3xl">LOGO</div>

        {/* NavLinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={link.url}
              className="text-white dark:text-gray-100 font-semibold hover:text-green-300 dark:hover:text-green-400 transition-all duration-200"
            >
              <p>{link.label}</p>
            </a>
          ))}
        </div>

        {/* Actions: Buy Button + Theme Toggle + Burger */}
        <div className="flex items-center space-x-4">
          <a
            href="#_"
            className="box-border relative z-30 inline-flex items-center justify-center w-auto px-5 py-2.5 overflow-hidden font-bold text-white transition-all duration-300 bg-green-500 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-green-300 ring-offset-green-200 hover:ring-offset-green-500 ease focus:outline-none"
          >
            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="relative z-20 flex items-center text-sm">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="mr-3 w-5 h-5"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"></path>
              </svg>
              Buy Now
            </span>
          </a>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Burger menu */}
          <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
