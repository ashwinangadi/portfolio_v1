import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

type FeaturedProjectType = {
  id: number;
  demo: string;
  photo: string;
  name: string;
  description: string;
  github: string;
  technologies: string[];
};

const FProjectCard = ({
  id,
  demo,
  photo,
  name,
  description,
  github,
  technologies,
}: FeaturedProjectType) => {
  return (
    <>
      <div
        className={cn(
          `${id % 2 === 0 ? "md:col-start-1 md:col-span-7" : "md:col-start-6 md:col-span-7"} md:relative max-h-[290px] bg-green-tint md:bg-[#8ed5c4] rounded-md md:hover:translate-x-6 md:hover:scale-100 md:duration-300`
        )}
      >
        <Link
          href={demo}
          aria-label="External Link"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            src={photo}
            alt="Recipe project window"
            width={1000}
            height={1000}
            className="mix-blend-multiply max-h-[290px] md:hover:mix-blend-normal rounded-md"
          />
        </Link>
      </div>
      <div
        className={`${id % 2 === 0 ? "md:col-start-7 md:col-span-6" : "md:col-start-1 md:col-span-6"}  absolute space-y-5 md:grid md:place-self-center px-2 md:px-0 -mt-20 md:mt-0 `}
      >
        <span className="space-y-1">
          <p className="font-mono text-green text-sm">Featured Project</p>
          <h2 className="text-lightest-slate font-sans text-2xl font-semibold">
            <Link
              href={demo}
              aria-label="External Link"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-green"
            >
              {name}
            </Link>
          </h2>
        </span>

        <div className="md:bg-light-navy md:p-6 text-base text-light-slate md:drop-shadow-xl md:rounded-md ">
          {description}
        </div>
        <ul
          className={`flex ${id % 2 === 0 ? "md:justify-end text-end" : "w-[80%]"} gap-2 font-mono  text-sm text-light-slate flex-wrap`}
        >
          {technologies.map((tech: string) => (
            <li key={tech} className=" mb-1">
              {tech}
            </li>
          ))}
        </ul>
        <div
          className={`flex ${id % 2 === 0 ? "md:justify-end " : null} text-lightest-slate`}
        >
          <Link
            href={github}
            aria-label="GitHub Link"
            rel="noopener noreferrer"
            target="_blank"
            className="h-5 w-5 me-5 hover:text-green"
          >
            <FiGithub />
          </Link>
          <Link
            href={demo}
            aria-label="External Link"
            rel="noopener noreferrer"
            target="_blank"
            className="h-5 w-5 hover:text-green"
          >
            <FiExternalLink />
          </Link>
        </div>
      </div>
    </>
  );
};

export default FProjectCard;
