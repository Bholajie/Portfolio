"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import PortfolioPage from "@/app/(pages)/portfolio/page";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">BolajiX</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link
          href="https://github.com/Bholajie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/github.png" alt="GitHub" width={24} height={24} />
        </Link>
        <Link
          href="https://linkedin.com/in/victor-johnson-69679a225/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
        </Link>
      </div>

      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {/* <motion.div
              variants={listItemVariants}
              className="flex gap-10 flex-col items-center justify-center h-full"
              whileHover={{ cursor: "pointer" }}
            >
              <motion.div variants={listItemVariants}>
                <Link href="/" className="w-full block">
                  Home
                </Link>
              </motion.div>
              <motion.div variants={listItemVariants}>
                <Link href="/about" className="w-full block">
                  About
                </Link>
              </motion.div>
              <motion.div variants={listItemVariants}>
                <Link href="/portfolio" className="w-full block">
                  Portfolio
                </Link>
              </motion.div>
              <motion.div variants={listItemVariants}>
                <Link href="/contact" className="w-full block">
                  Contact
                </Link>
              </motion.div>
            </motion.div> */}
            <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex items-center justify-center z-40">
              <nav className="flex flex-col items-center justify-center gap-10 text-4xl">
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
                <Link href="/about" className="hover:text-gray-300">
                  About
                </Link>
                <Link href="/portfolio" className="hover:text-gray-300">
                  Portfolio
                </Link>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
