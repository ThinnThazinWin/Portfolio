import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
const resume = () => {
  return (
    <>
      <Head>
        <title>Thinn Thazin Win | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web and mobile developer specializing in building  exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Thinn Thazin Win</h2>
          <div className="flex">
            <Link
              href="https://www.linkedin.com/in/thinn-thazin-win-82b2b023a"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </Link>
            <Link
              href="https://github.com/ThinnThazinWin"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </Link>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Mobile Development <span className="px-1">|</span> Web Development
              <span className="px-1">|</span> Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Idea Generation</p>
            <p className="py-2">Web Development</p>
            <p> Problem Solving</p>
          </div>
        </div>
        <p>
           Diverse analytical skills, team
          collaboration, and relationship building with solid interpersonal
          abilities and problem-solving skills. Effective and proven track
          record of critical thinking, idea generation, and optimizing
          efficiencies.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Bootstrap
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>React Native
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>MySQL
            <span className="px-2">|</span>MongoDB
            <span className="px-2">|</span>Node JS
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> Firebase
            <span className="px-2">|</span> RESTAPI
          </p>
        </div>

        {/*Education */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Education</h5>
          <p className="py-2">
            <span className="font-bold">Computer Science </span>
            <span className="px-2">|</span>University of Computer Studies (final
            year)
            <span className="px-2">|</span>December 2015 – April 2019 / Pathein
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">Experience</h5>
        {/* Experience */}
        <div className="py-6">
          <p>
            <span className="font-bold ">
              Front-End Developer (On Job Training)
            </span>
            <span className="px-2">|</span>Yoon Han Thar Private Co., Ltd.
          </p>
          <p className="py-1 italic">
            November 2022 – May 2023 / Bahan township
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              UI development and build app with Expo cli for project
              demonstration to make presentation.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Requirement specification, data analyst and function roadmap
              planning.
            </li>
            <li>Backend development with express</li>
            <li>Writing user manual guide.</li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">IT Support (Internship)</span>
            <span className="px-2">|</span>Galaxy Software Co., Ltd
          </p>
          <p className="py-1 italic">August 2020 – September 2020 / Pathein</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Testing POS software for every new feature to identify bugs and
              give any suggestion for version update.
            </li>
            <li>C#, SQL learnig</li>
            <li>Customer Caring</li>
          </ul>
        </div>

        {/* Objective */}
        <h5 className="text-center underline text-[18px] py-4">
          What can I offer for company and what I expect from it
        </h5>

       
        <div className="py-6">
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>I can work till project will complete.</li>
            <li>I’m flexible extra hours as required.</li>
            <li>I’m willing to work with challenging behaviours.</li>
          
            <li>
            I would like to
              get inspiration and motivatation from work, especially my seniors.
              </li>
            <li>I have desire to learn new technologies and tools.</li>
            <li>
              I have good communication skills since I have kept in touch with
              customers and other people.
            </li>
          </ul>
        </div>
{/* CONTACT*/}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">CONTACT</h5>
          <p className="py-2 ">
            <span className="font-bold">Gmail: thinnthazinwin528@gmail.com </span>
            <span className="px-2">|</span>Phone: 09 – 979 479 901 ၊ 09 – 763 073 902 
            <span className="px-2">|</span>Address: Sanchaung township, Yangon
          </p>
        </div>
      </div>
    </>
  );
};

export default resume;
