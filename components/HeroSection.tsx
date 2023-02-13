"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

const HeroSection = () => {
  const [text, count] = useTypewriter({
    words: [`Hi, The Name's Fahd Roussafi`, "I'm a Full Stack Developer"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <section id="home">
      <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />

        <Image
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
          src="/avatar.jpeg"
          alt=""
          width={128}
          height={128}
        />

        <div className="z-20">
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
            Software Engineer
          </h2>
          <h1 className="text-5xl lg:text-6xl text-gray-100 font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#fff" />
          </h1>

          <div className="pt-48 flex flex-row items-center text-center justify-center ">
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
              <HiArrowDown
                size={35}
                className="animate-bounce bg-[#F7AB0A] rounded-full"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
