import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FaFreeCodeCamp } from "react-icons/fa";
import Link from "next/link";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Social = () => {
  const socials = [
    {
      name: "Linkedin",
      icon: <FaLinkedinIn className="h-6 w-6" />,
      link: "https://www.linkedin.com/in/ashwin-angadi/",
    },
    {
      name: "Linkedin",
      icon: <FiGithub className="h-6 w-6" />,
      link: "https://github.com/ashwinangadi",
    },
    {
      name: "FreeCodeCamp",
      icon: <FaFreeCodeCamp className="h-6 w-6" />,
      link: "https://www.freecodecamp.org/Ashwin_Angadi",
    },
    {
      name: "Twitter",
      icon: <FiTwitter className="h-6 w-6" />,
      link: "https://twitter.com/iamashwinangadi",
    },
    {
      name: "Phone",
      icon: <FiPhone className="h-6 w-6" />,
      link: "tel:+917899599229",
    },
  ];
  return (
    <>
      <div
        id="Social"
        className="z-50 flex flex-col justify-center text-light-slate pb-5 lg:pb-20 xl:absolute "
      >
        <div className="mx-auto flex justify-between px-2 w-full min-w-[260px] max-w-[500px] xl:min-w-[20px] xl:max-w-[20px] font-bold  md:gap-16 lg:gap-20 xl:fixed xl:bottom-0 xl:left-20 xl:mb-0 xl:mt-0  xl:flex-col xl:items-center xl:justify-center xl:gap-0 xl:space-x-0 xl:space-y-8">
          {socials.map((item) => (
            <Link
              key={item.name}
              className="flex justify-center gap-3 duration-150 hover:-translate-y-1 hover:text-green"
              href={item.link}
              aria-label={item.name}
              target="_blank"
              rel="noreferrer"
            >
              {item.icon}
            </Link>
          ))}

          <span
            className="mt-48 hidden h-28 w-0 border border-light-slate text-center xl:block"
            style={{ writingMode: "vertical-rl" }}
          ></span>
        </div>

        <div className="bottom-0 right-20 hidden flex-col items-center justify-center space-y-8 font-mono text-sm tracking-widest md:fixed xl:inline-flex xl:w-[20px]">
          <div
            className="duration-150 hover:-translate-y-1 hover:text-green"
            style={{ writingMode: "vertical-rl" }}
          >
            <Link
              href="mailto:ashwin.angadi1@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              ashwin.angadi1@gmail.com
            </Link>
          </div>
          <div
            className="h-28 w-0 border border-light-slate "
            style={{ writingMode: "vertical-rl" }}
          ></div>
        </div>
      </div>
    </>
  );
};
