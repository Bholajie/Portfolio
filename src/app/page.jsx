"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full overflow-x-hidden"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="min-h-screen flex flex-col lg:flex-row px-2 xs:px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 overflow-x-hidden">
        {/* IMAGE CONTAINER */}
        <div className="w-full h-64 xs:h-72 sm:h-80 relative flex justify-center items-center lg:h-full lg:w-1/2">
          {/* <Image src="/hero.png" alt="" fill className="object-contain" /> */}
          <Image src="/BJ2.jpg" alt="" fill className="object-contain" priority />
        </div>
        {/* TEXT CONTAINER */}
        <div className="w-full flex flex-col gap-4 sm:gap-6 md:gap-8 items-center justify-center py-4 lg:h-full lg:w-1/2">
          {/* TITLE */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
            Building Digital Solutions, Driving Innovation.
          </h1>
          {/* DESC */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center">
            Full Stack Developer specializing in C#, Javascript, and Machine
            Learning. Building scalable solutions for Fin-tech, Ed-tech, and
            Health-tech, with a focus on clean architecture and team mentorship
          </p>
          {/* BUTTONS */}
          <div className="w-full flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
            <Link href="/portfolio" className="w-full sm:w-auto">
              <button className="w-full p-3 sm:p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-gray-800 transition-colors text-sm sm:text-base">
                View My Work
              </button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full p-3 sm:p-4 rounded-lg ring-1 ring-black hover:bg-gray-50 transition-colors text-sm sm:text-base">
                Contact Me
              </button>
            </Link>
            <a href="/cv.pdf" download className="w-full sm:w-auto">
              <button className="w-full p-3 sm:p-4 rounded-lg ring-1 ring-black hover:bg-gray-50 transition-colors text-sm sm:text-base">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
