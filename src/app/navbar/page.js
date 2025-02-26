"use client";
import React from "react";
import Switch from "../switch/page";
import { SiFoodpanda } from "react-icons/si";



const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <header
      className={`py-4 glass ${
        darkMode ? "bg-blue-800 text-white" : "bg-blue-600 text-white"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="flex justify-start gap-4 text-3xl font-bold">
          Mahe Alif&apos;s Portfolio{" "}
          <SiFoodpanda className="mr-4 mt-5 lg:mt-1" />
        </h1>

        {/* Darkmode and lightmode toggle */}
        <Switch darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </header>
  );
};

export default Navbar;
