"use client";
import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Features from "./Features";
import About from "./About";
import Review from "./Review/Review";
import Contact from "./Contact";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const initAos = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAos();
  }, []);

  return (
    <div className="overflow-hidden">
      {isClient ? (
        <>
          <Hero />
          <Features />
          <About
            textOrder="lg:order-1"
            imageOrder="lg:order-2"
            linkText="Learn More"
            title="Pure sound, no added noise"
          />
          <About
            textOrder="lg:order-2"
            imageOrder="lg:order-1"
            linkText="Shop Now"
            title="Capture pure sound with the 70mm HD Driver"
          />
          <Review />
          <Contact />
        </>
      ) : (
        <div className="min-h-screen bg-gradient-to-br from-pink-800 to-gray-900 flex flex-col items-center justify-center">
          <div className="relative w-24 h-24 mb-6">
            {/* Outer spinning circle */}
            <div className="absolute inset-0 border-4 border-t-blue-500 border-r-transparent border-b-green-400 border-l-transparent rounded-full animate-spin"></div>

            {/* Inner pulsing circle */}
            <div className="absolute inset-4 bg-white/10 rounded-full animate-pulse"></div>

            {/* Center dot */}
            <div className="absolute inset-10 bg-white rounded-full"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
