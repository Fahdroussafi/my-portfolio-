import React from "react";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "MongoDB" },
  { skill: "React" },
  { skill: "React Native" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "MySQL" },
  { skill: "Node" },
  { skill: "Express" },
  { skill: "PHP" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48 text-gray-300">
        <h1 className="text-center font-bold uppercase tracking-[20px] text-gray-500 text-2xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-[#F7AB0A] border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left text-[#F7AB0A] italic">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Fahd and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Safi, MA.
            </p>
            <br />
            <p>
              I have hands-on experience in developing applications using React,
              React Native, MongoDB, Tailwind, Node, and Express. These
              technologies are my toolset for delivering high-quality and
              user-friendly web experiences. I am always eager to expand my
              knowledge and skills, and I continuously strive to improve my
              craft as a web developer.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-[#F7AB0A]">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6 text-[#F7AB0A] italic">
              My Skills
            </h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-700 font-semibold rounded-full">
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
