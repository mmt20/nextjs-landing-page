import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";

interface IProps {
  imageOrder: string;
  textOrder: string;
  title: string;
  linkText: string;
}

const About = ({ imageOrder, textOrder, linkText, title }: IProps) => {
  const features = [
    "High-Resolution Audio compatible",
    "High quality wireless audio with BLUETOOTH® and LDAC technology",
    "Smart listening experience by Adaptive Sound Control",
    "Ergonomic, enfolding design earpads",
  ];

  return (
    <section className="pt-16 pb-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Text Content */}
        <div className={`${textOrder}`}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white">
            {title}
          </h1>

          {/* Feature List */}
          <div className="mt-8 space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-pink-600 text-white mt-1 shrink-0">
                  <FaCheck className="text-sm" />
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">{feature}</p>
              </div>
            ))}

            {/* Link */}
            <p className="font-semibold text-pink-600 dark:text-pink-400 cursor-pointer hover:underline w-fit">
              {linkText}
            </p>
          </div>
        </div>

        {/* Image */}
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center" className={`${imageOrder}`}>
          <Image src="/images/h1.png" alt="About Image" width={380} height={380} />
        </div>
      </div>
    </section>
  );
};

export default About;
