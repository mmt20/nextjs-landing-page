import React from "react";
import { FaFingerprint } from "react-icons/fa";
import { HiOutlineChat } from "react-icons/hi";
import { IoAppsOutline, IoWifiOutline } from "react-icons/io5";
import { MdNotifications, MdOutlineTouchApp } from "react-icons/md";

const FeaturesData = [
  {
    title: "Touch to buy",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.",
    icon: <MdOutlineTouchApp className="w-12 h-12 text-pink-600 dark:text-pink-400 mx-auto" />,
  },
  {
    title: "Secure Data",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.",
    icon: <FaFingerprint className="w-12 h-12 text-pink-600 dark:text-pink-400 mx-auto" />,
  },
  {
    title: "Instant Chat",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.",
    icon: <HiOutlineChat className="w-12 h-12 text-pink-600 dark:text-pink-400 mx-auto" />,
  },
  {
    title: "Live Notification",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.",
    icon: <MdNotifications className="w-12 h-12 text-pink-600 dark:text-pink-400 mx-auto" />,
  },
  {
    title: "Wifi Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.",
    icon: <IoWifiOutline className="w-12 h-12 text-pink-600 dark:text-pink-400 mx-auto" />,
  },
  {
    title: "App Watch",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.",
    icon: <IoAppsOutline className="w-12 h-12 text-pink-600 dark:text-pink-400 mx-auto" />,
  },
];

const Features = () => {
  return (
    <section className="pt-16 pb-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {FeaturesData.map((feature, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-anchor-placement="top-center"
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700/30 rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl dark:hover:shadow-gray-700/50"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mt-4 text-gray-900 dark:text-white">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
