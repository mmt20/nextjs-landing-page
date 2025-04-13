import { navLinks } from "@/constant/content";
import React from "react";
import { CgClose } from "react-icons/cg";

interface IProps {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: IProps) => {
  const navOpen = showNav ? "translate-x-0" : "-translate-x-full";

  return (
    <div>
      {/* overlay */}
      <div
        className={` fixed  ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full`}
      >
        {/* navLinks */}
        <div
          className={`text-white fixed ${navOpen}  top-0 left-0 justify-center flex flex-col h-full transform transition-all duration-500 delay-500 w-[80%] sm:w-[60%] opacity-100 bg-pink-600 space-y-6 z-[1050]`}
        >
          {navLinks.map(link => (
            <a
              key={link.id}
              href={link.url}
              className="text-white font-semibold hover:text-green-300 transition-all duration-200"
            >
              <p className="text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
                {link.label}
              </p>
            </a>
          ))}
          {/* close button */}
          <CgClose onClick={closeNav} className="absolute text-white top-4 right-4 sm:w-8 sm:h-8 w-6 h-6 z-[1070]" />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
