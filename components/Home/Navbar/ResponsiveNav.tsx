"use client";

import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNavToggle = () => {
    setShowNav(!showNav);
  };

  return (
    <div>
      <Nav openNav={handleNavToggle} />
      <MobileNav showNav={showNav} closeNav={handleNavToggle} />
    </div>
  );
};

export default ResponsiveNav;
