import React from "react";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub } from "react-icons/bs";

const projects = [
  {
    name: "Gab System App",
    description:
      "The described application is a simple banking platform using the MERN stack and Redux for state management. It allows users to create an account, manage their bank accounts, view transactions and account balance, and perform financial transactions such as depositing, withdrawing, and transferring funds.",
    github: "https://github.com/Fahdroussafi/BankApp-MERN",
  },
  {
    name: "Easy Booking",
    description:
      "The described project is an online bus reservation app using React and Redux on the frontend and Express and Node.js on the backend. It has separate user interfaces for users and administrators, and features include search availability before login, JWT authentication, seat availability checking, Stripe payment integration, handling negative payment scenarios, and admin management of tickets and users. The app uses MongoDB, Express, React, Node, Tailwind, Redux, Antd, and Stripe.",
    github: "https://github.com/Fahdroussafi/Easy-Booking",
  },
  {
    name: "Weather App",
    description:
      "The described app is a weather mobile app using the MERN stack (MongoDB, Express, Node.js, React Native). It provides weather information by location search and has a user-friendly interface. The frontend is built using React Native and the backend uses Node.js, Express, and MongoDB.",
    github: "https://git:hub.com/Fahdroussafi/weather-app-react-native",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-[#F7AB0A] border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28 ">
        {projects?.map((project, idx) => {
          return (
            <div key={idx} className="px-10 text-center">
              <SlideUp offset="-200px 0px -200px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-bold mb-6 text-[#F7AB0A]">
                      {project.name}
                    </h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>

                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                          style={{ color: "#F7AB0A" }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
