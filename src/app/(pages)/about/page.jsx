"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              // src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800"
              src="/BJ1.jpg"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Mid-Level Developer with 2+ years of experience designing and
              building Web applications. Adept at collaborating within
              development teams and contributing to projects that support
              business objectives. Eager to learn new technologies and stay
              current with industry best practices.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Specializing in crafting custom software solutions across
              Fin-tech, Ed-tech, and Health-tech industries.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <svg
                width="185"
                height="77"
                viewBox="0 0 370 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 50C45 30 60 20 85 45C100 60 90 65 95 55C100 45 105 40 110 45C115 50 120 55 125 50C130 45 135 40 140 45C145 50 150 52 155 48C160 44 165 42 170 44C175 46 180 48 185 46C190 44 195 42 200 44C205 46 208 47 210 45"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                C#
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                ASP.NET
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SQL Server
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                NoSQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Microservices
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                gRPC
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Kafka
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                NestJS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Bootstrap
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* Griffintech */}
              <div className="flex justify-between min-h-[12rem]">
                <div className="w-5/12">
                  <div className="bg-white p-4 font-semibold rounded-lg shadow-sm">
                    Software Engineer
                  </div>
                  <div className="p-4 text-sm italic">
                    Led development of secure, scalable solutions for Fin-tech
                    and Health-tech. Mentored engineering team and implemented
                    microservices architecture.
                  </div>
                  <div className="px-4 text-red-400 font-semibold">
                    08/2023 - Present
                  </div>
                  <div className="m-4 px-3 py-1.5 rounded bg-white text-sm font-semibold w-fit shadow-sm">
                    Griffintech
                  </div>
                </div>
                <div className="w-1/12 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-5/12"></div>
              </div>

              {/* Taojaa */}
              <div className="flex justify-between min-h-[12rem]">
                <div className="w-5/12"></div>
                <div className="w-1/12 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-5/12">
                  <div className="bg-white p-4 font-semibold rounded-lg shadow-sm">
                    Software Engineer
                  </div>
                  <div className="p-4 text-sm italic">
                    Built e-commerce platform enabling merchants to scale their
                    businesses. Led code reviews and mentored junior developers.
                  </div>
                  <div className="px-4 text-red-400 font-semibold">
                    2022 - 2023
                  </div>
                  <div className="m-4 px-3 py-1.5 rounded bg-white text-sm font-semibold w-fit shadow-sm">
                    Taojaa
                  </div>
                </div>
              </div>

              {/* Atom Technology */}
              <div className="flex justify-between min-h-[12rem]">
                <div className="w-5/12">
                  <div className="bg-white p-4 font-semibold rounded-lg shadow-sm">
                    Software Engineer
                  </div>
                  <div className="p-4 text-sm italic">
                    Developed innovative Fin-Tech platform with geo-location
                    features for religious organizations, streamlining financial
                    operations.
                  </div>
                  <div className="px-4 text-red-400 font-semibold">
                    2021 - 2022
                  </div>
                  <div className="m-4 px-3 py-1.5 rounded bg-white text-sm font-semibold w-fit shadow-sm">
                    Atom Technology
                  </div>
                </div>
                <div className="w-1/12 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-5/12"></div>
              </div>

              {/* Spydar */}
              <div className="flex justify-between min-h-[12rem]">
                <div className="w-5/12"></div>
                <div className="w-1/12 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-5/12">
                  <div className="bg-white p-4 font-semibold rounded-lg shadow-sm">
                    Machine Learning Intern
                  </div>
                  <div className="p-4 text-sm italic">
                    Implemented AI/ML solutions for predictive analytics and
                    automated decision-making systems using Python and
                    TensorFlow.
                  </div>
                  <div className="px-4 text-red-400 font-semibold">
                    02/2021 - 08/2021
                  </div>
                  <div className="m-4 px-3 py-1.5 rounded bg-white text-sm font-semibold w-fit shadow-sm">
                    Spydar
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="flex justify-between min-h-[12rem]">
                <div className="w-5/12">
                  <div className="bg-white p-4 font-semibold rounded-lg shadow-sm">
                    Bachelor of Engineering
                  </div>
                  <div className="p-4 text-sm italic">Computer Engineering</div>
                  <div className="m-4 px-3 py-1.5 rounded bg-white text-sm font-semibold w-fit shadow-sm">
                    Federal University Oye-Ekiti, Nigeria
                  </div>
                </div>
                <div className="w-1/12 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-5/12"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
