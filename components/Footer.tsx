import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-[#242424] mx-auto px-4 sm:px-6  ">
      <div className=" p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-gray-300">
          © 2023 Fahd Roussafi<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a
            href="https://github.com/Fahdroussafi"
            rel="noreferrer"
            target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-gray-300"
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/fahd-roussafi/"
            rel="noreferrer"
            target="_blank">
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-gray-300"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
