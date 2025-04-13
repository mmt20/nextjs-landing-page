import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import About from "./About";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <About />
    </div>
  );
};

export default Home;
