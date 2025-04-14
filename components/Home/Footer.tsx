import React from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="pt-16 pb-16 bg-gray-950 text-sm">
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 text-gray-300">
        {/* Logo & Description */}
        <div>
          <div className="text-white font-bold text-3xl">LOGO</div>
          <p className="mt-5 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quibusdam. Dolorum nam ad repellendus
            consequatur!
          </p>
          <div className="flex items-center space-x-4 mt-6 text-white">
            <a
              className="w-8 h-8 bg-blue-600 flex items-center justify-center rounded-full hover:bg-blue-700 transition"
              href="#"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              className="w-8 h-8 bg-black flex items-center justify-center rounded-full hover:bg-gray-800 transition"
              href="#"
            >
              <FaXTwitter size={14} />
            </a>
            <a
              className="w-8 h-8 bg-red-600 flex items-center justify-center rounded-full hover:bg-red-700 transition"
              href="#"
            >
              <FaYoutube size={14} />
            </a>
            <a
              className="w-8 h-8 bg-blue-500 flex items-center justify-center rounded-full hover:bg-blue-600 transition"
              href="#"
            >
              <FaLinkedinIn size={14} />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div className="space-y-3">
          <h2 className="text-white font-bold text-lg">Company</h2>
          {["About Us", "Services", "Our Customer", "Portfolio", "Blogs"].map(text => (
            <a key={text} className="block hover:text-white cursor-pointer">
              {text}
            </a>
          ))}
        </div>

        {/* Legal Links */}
        <div className="space-y-3">
          <h2 className="text-white font-bold text-lg">Legal</h2>
          {["Support", "Terms & Conditions", "Report Abuse", "Privacy Policy"].map(text => (
            <a key={text} className="block hover:text-white cursor-pointer">
              {text}
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h2 className="text-white font-bold text-lg">Get In Touch</h2>
          <div className="mt-6">
            <h2 className="text-sm text-white">Our Mobile Number</h2>
            <p className="text-base font-bold text-white mt-1  ">+128902 203812</p>
          </div>
          <div className="mt-6">
            <h2 className="text-sm text-white">Our Address</h2>
            <p className="text-base font-bold text-white mt-1  ">Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
      {/* Bottom Part */}
      <div className="w-[80%] mx-auto mt-16 border-t border-gray-700 pt-6 flex items-center justify-between text-gray-400">
        <p className="text-center md:text-left">
          © 2025 All rights reserved by <span className="text-white font-bold">MMTaha</span>
        </p>
      </div>
    </section>
  );
};

export default Footer;
