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
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-48 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              // src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800"
              src="/BJ1.jpg"
              alt=""
              width={112}
              height={112}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-xl sm:text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-base sm:text-lg">
              Mid-Level Developer with 5+ years of experience designing and
              building Web applications. Adept at collaborating within
              development teams and contributing to projects that support
              business objectives. Eager to learn new technologies and stay
              current with industry best practices.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic text-sm sm:text-base">
              Specializing in crafting custom software solutions across
              Fin-tech, Ed-tech, and Health-tech industries with expertise in microservices and scalable architectures.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <svg
                width="185"
                height="77"
                viewBox="0 0 370 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-32 sm:w-40 md:w-48"
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
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
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
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-xl sm:text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-2 sm:gap-3 md:gap-4 flex-wrap"
            >
              {[
                "C#", "JavaScript", "TypeScript", "SQL", "ASP.NET", "MVC", "Web Forms", 
                "WPF", "Blazor", "Entity Framework Core", "ReactJS", "Redux", "NextJS", 
                "NestJS", "NodeJS", "HTML", "CSS", "Bootstrap", "Tailwind CSS", "Redis", 
                "Microservices", "gRPC", "Kafka", "SQL Server", "MongoDB", "NUnit", 
                "xUnit", "Jest", "GitHub Actions", "Docker", "Kubernetes", "ElasticSearch"
              ].map((skill, index) => (
                <div
                  key={index}
                  className="rounded p-2 text-xs sm:text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                >
                  {skill}
                </div>
              ))}
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
            className="flex flex-col gap-6 sm:gap-8 md:gap-12 justify-center pb-24 sm:pb-32 md:pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-xl sm:text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* BahojuTech */}
              <div className="flex justify-between min-h-[8rem] sm:min-h-[10rem] md:min-h-[12rem]">
                <div className="w-5/12">
                  <div className="bg-white p-3 sm:p-4 font-semibold rounded-lg shadow-sm text-sm sm:text-base">
                    Software Engineer
                  </div>
                  <div className="p-3 sm:p-4 text-xs sm:text-sm italic">
                    Led backend engineering for Bahojumart (e-commerce) and Bahojuride (ride-hailing) products. 
                    Implemented microservices architecture and mentored junior engineers.
                  </div>
                  <div className="px-3 sm:px-4 text-red-400 font-semibold text-xs sm:text-sm">
                    11/2024 - Present
                  </div>
                  <div className="m-3 sm:m-4 px-2 sm:px-3 py-1 sm:py-1.5 rounded bg-white text-xs sm:text-sm font-semibold w-fit shadow-sm">
                    BahojuTech
                  </div>
                </div>
                <div className="w-1/12 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full ring-2 sm:ring-3 md:ring-4 ring-red-400 bg-white -left-1 sm:-left-1.5 md:-left-2"></div>
                  </div>
                </div>
                <div className="w-5/12"></div>
              </div>

              {/* Griffintech */}
              <div className="flex justify-between min-h-[8rem] sm:min-h-[10rem] md:min-h-[12rem]">
                <div className="w-5/12"></div>
                <div className="w-1/12 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full ring-2 sm:ring-3 md:ring-4 ring-red-400 bg-white -left-1 sm:-left-1.5 md:-left-2"></div>
                  </div>
                </div>
                <div className="w-5/12">
                  <div className="bg-white p-3 sm:p-4 font-semibold rounded-lg shadow-sm text-sm sm:text-base">
                    Software Engineer
                  </div>
                  <div className="p-3 sm:p-4 text-xs sm:text-sm italic">
                    Designed scalable solutions across FinTech, EdTech, and HealthTech domains. 
                    Implemented distributed systems using microservices, gRPC, and Kafka.
                  </div>
                  <div className="px-3 sm:px-4 text-red-400 font-semibold text-xs sm:text-sm">
                    06/2022 - 08/2024
                  </div>
                  <div className="m-3 sm:m-4 px-2 sm:px-3 py-1 sm:py-1.5 rounded bg-white text-xs sm:text-sm font-semibold w-fit shadow-sm">
                    Griffintech
                  </div>
                </div>
              </div>

              {/* Taojaa */}
              <div className="flex justify-between min-h-[8rem] sm:min-h-[10rem] md:min-h-[12rem]">
                <div className="w-5/12">
                  <div className="bg-white p-3 sm:p-4 font-semibold rounded-lg shadow-sm text-sm sm:text-base">
                    Software Engineer
                  </div>
                  <div className="p-3 sm:p-4 text-xs sm:text-sm italic">
                    Built responsive frontend interfaces using ReactJS, TypeScript, and Tailwind CSS. 
                    Mentored junior developers and maintained high-performance UI/UX.
                  </div>
                  <div className="px-3 sm:px-4 text-red-400 font-semibold text-xs sm:text-sm">
                    03/2021 - 06/2022
                  </div>
                  <div className="m-3 sm:m-4 px-2 sm:px-3 py-1 sm:py-1.5 rounded bg-white text-xs sm:text-sm font-semibold w-fit shadow-sm">
                    Taojaa
                  </div>
                </div>
                <div className="w-1/12 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full ring-2 sm:ring-3 md:ring-4 ring-red-400 bg-white -left-1 sm:-left-1.5 md:-left-2"></div>
                  </div>
                </div>
                <div className="w-5/12"></div>
              </div>

              {/* Atom Technology */}
              <div className="flex justify-between min-h-[8rem] sm:min-h-[10rem] md:min-h-[12rem]">
                <div className="w-5/12"></div>
                <div className="w-1/12 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full ring-2 sm:ring-3 md:ring-4 ring-red-400 bg-white -left-1 sm:-left-1.5 md:-left-2"></div>
                  </div>
                </div>
                <div className="w-5/12">
                  <div className="bg-white p-3 sm:p-4 font-semibold rounded-lg shadow-sm text-sm sm:text-base">
                    Software Engineer
                  </div>
                  <div className="p-3 sm:p-4 text-xs sm:text-sm italic">
                    Developed FinTech platform for churches with geo-location features. 
                    Optimized backend services using Redis and Dapper.
                  </div>
                  <div className="px-3 sm:px-4 text-red-400 font-semibold text-xs sm:text-sm">
                    08/2020 - 03/2021
                  </div>
                  <div className="m-3 sm:m-4 px-2 sm:px-3 py-1 sm:py-1.5 rounded bg-white text-xs sm:text-sm font-semibold w-fit shadow-sm">
                    Atom Technology
                  </div>
                </div>
              </div>

              {/* Spydar */}
              <div className="flex justify-between min-h-[8rem] sm:min-h-[10rem] md:min-h-[12rem]">
                <div className="w-5/12">
                  <div className="bg-white p-3 sm:p-4 font-semibold rounded-lg shadow-sm text-sm sm:text-base">
                    Machine Learning Intern
                  </div>
                  <div className="p-3 sm:p-4 text-xs sm:text-sm italic">
                    Created ML applications for predictions and automation. 
                    Implemented AI algorithms and neural networks.
                  </div>
                  <div className="px-3 sm:px-4 text-red-400 font-semibold text-xs sm:text-sm">
                    01/2020 - 08/2020
                  </div>
                  <div className="m-3 sm:m-4 px-2 sm:px-3 py-1 sm:py-1.5 rounded bg-white text-xs sm:text-sm font-semibold w-fit shadow-sm">
                    Spydar
                  </div>
                </div>
                <div className="w-1/12 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full ring-2 sm:ring-3 md:ring-4 ring-red-400 bg-white -left-1 sm:-left-1.5 md:-left-2"></div>
                  </div>
                </div>
                <div className="w-5/12"></div>
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
        <div className="hidden lg:block lg:w-1/3 xl:w-1/2 sticky top-0 z-30">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
