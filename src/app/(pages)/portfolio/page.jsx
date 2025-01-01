"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Taojaa",
    desc: "Taojaa is a software development company that empowers small businesses to connect with customers anytime, simplify digital commerce for Africans worldwide, and provide tools for growth and operational management.",
    img: "/taojaa.png",
    link: "https://www.taojaa.com/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "HRMB",
    desc: "It is a Multi-Level Marketing (MLM), also known as network marketing. It  is a business model where individuals sell products or services directly to consumers, often through personal connections, while also recruiting others to join their sales network. Participants earn money not only from their own sales but also from a percentage of the sales made by the people they recruit (known as their 'downline').",
    img: "/hrmb.png",
    link: "https://hrmb-app.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "CRM for TLCS",
    desc: "It is a system or strategy used  to manage interactions with current and potential customers. It helps companies streamline processes, improve customer relationships, and increase profitability",
    img: "/tlcs.png",
    link: "https://tlcs-xi.vercel.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "e-commerce-inventory-and-order-microservices",
    desc: "E-commerce inventory and order microservices are modular systems designed to manage product stock levels and order processing independently. They ensure scalability, real-time updates, and seamless integration within e-commerce platforms.",
    img: "/inventory.png",
    link: "https://github.com/Bholajie/e-commerce-inventory-and-order-microservices.git",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div> */}

      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-full h-[calc(100vh-6rem)] flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl text-center font-bold">
            My Works
          </h1>
        </div>

        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {/* <div className="h-[120%] w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" /> */}
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-4 text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                    {item.title}
                  </h1>

                  <div className="relative aspect-video w-full max-w-[600px] mx-auto">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover rounded-lg"
                      priority
                    />
                  </div>

                  <p className="text-base sm:text-lg md:text-xl max-w-prose">
                    {item.desc}
                  </p>

                  <div className="flex justify-end w-full">
                    <Link href={item.link} className="inline-block">
                      <button className="px-6 py-3 text-sm sm:text-base md:text-lg bg-white text-gray-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                        See Demo
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end and Backend Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
