import React from "react";
import { FeaturedProjectsData } from "../constants/Constant";
import FProjectCard from "./FProjectCard";

const FeaturedProjects = () => {
  return (
    <section
      id="Project"
      className="container mx-auto h-full w-full max-w-5xl px-2"
    >
      <div className="text-base font-sans mb-16 flex items-center w-full ">
        <h1 className="text-green text-xl md:text-2xl font-mono grid place-self-end">
          03.
        </h1>
        <h2 className="mx-2 text-2xl md:text-3xl text-lightest-slate font-bold">
          Some Things I’ve Built
        </h2>
        <h3 className="border border-lightest-navy w-[10%] md:w-[40%]"> </h3>
      </div>
      <ul className="flex flex-col [&>*:last-child]:mb-0 md:mt-24 lg:mt-0">
        {FeaturedProjectsData.map((item) => (
          <li
            key={item.id}
            className={`relative md:grid md:grid-cols-12 w-full h-full mb-80 sm:mb-56 md:mb-32 xl:mb-20 ${item.id % 2 === 0 ? "md:text-end  " : null}`}
          >
            <FProjectCard
              id={item.id}
              name={item.name}
              photo={item.photo}
              demo={item.demo}
              github={item.github}
              technologies={item.technologies}
              description={item.description}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeaturedProjects;
