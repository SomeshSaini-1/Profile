"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import Tabbutton from "./Tabbutton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>Jquery</li>
        <li>React js</li>
        <li>Next Js</li>
        <li>Figma</li>
        <li>Spline</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Bachelor of Science (B.Sc.)</li>
        <li>LBS college, jaipur</li>
      </ul>
    )
  },
  {
    title: 'Work History',
    id: 'experience',
    content: (
      <ul>
        <li>Oxymora Technology Pvt. Ltd. (11/2022-current)</li>
      </ul>
    )
  }
]

const Aboutme = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className='w-[90%] m-auto'>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image alt="img" src={"/images-about.png"} width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I have 1.5 years of experience as a web developer, specializing in front-end technologies. Proficient in HTML,
            CSS, JavaScript, React, and Node.js, I create dynamic web applications. Currently, I’m developing an IoT dashboard
            with real-time data display,data storage, and Excel report generation,
            implementing role-based access for super admins, admins, and users.
          </p>
          <div className="flex flex-row justify-start  mt-8">
            <Tabbutton
              selectTab={() => handleTabChange("skills")}
              id="skills"
              active={tab === "skills"}
            >
              Skills
            </Tabbutton>

            <Tabbutton
              selectTab={() => handleTabChange("education")}
              id="education"
              active={tab === "education"}
            >
              Education
            </Tabbutton>

            <Tabbutton
              selectTab={() => handleTabChange("experience")}
              id="experience"
              active={tab === "experience"}
            >
              Experience
            </Tabbutton>
          </div>
          <div className="mt-4 md:mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;