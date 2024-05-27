"use client";
import React, { useState } from "react";
import { certificateDetails, journey } from "./constants/Constant";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const Experience = () => {
  const [show, setShow] = useState(1);
  return (
    <section
      id="Certification"
      className="container mx-auto h-full flex flex-col items-center justify-center max-w-3xl px-5"
    >
      <div className="text-base font-sans w-full mb-4 sm:mb-10 flex items-center">
        <h1 className="text-green text-xl md:text-2xl font-mono grid place-self-end">
          02.
        </h1>
        <h2 className="mx-2 text-2xl md:text-3xl text-lightest-slate sm:text-nowrap font-bold">
          Work Experience
        </h2>
        <h3 className="ml-5 border border-lightest-navy  w-[10%] md:w-[40%]"> </h3>
      </div>

      <div className=" sm:grid sm:grid-cols-4 ">
        <div className="col-span-1 pb-7">
          <ul className="border-l-1 flex justify-evenly gap-5 sm:gap-0 mx-5 sm:mx-0 sm:flex-col">
            {journey?.map((item) => {
              return (
                <li
                  key={item.id}
                  className={` ${
                    show === item.id
                      ? "text-green border-b-2 sm:border-b-0 sm:border-l-2 duration-300 border-green ease-in"
                      : "text-slate "
                  } sm:px-5 border-b sm:border-b-0 sm:border-l w-full font-mono text-sm text-center sm:text-left h-14 flex items-center justify-center sm:justify-start sm:cursor-pointer `}
                  onClick={() => setShow(item.id)}
                >
                  <span className="sm:hover:translate-x-1 sm:duration-150">
                    {item.title}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-3 ">
          <div className="text-blue h-full w-full md:px-5">
            {certificateDetails?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={` pt-4 ${
                    show === index + 1
                      ? "opacity-100 duration-500 delay-150 ease-in"
                      : "hidden"
                  }`}
                  id="RWD"
                >
                  <span className="flex flex-wrap text-xl font-medium leading-snug mb-2 space-x-2 font-sans ">
                    <h1 className="text-lightest-slate">{item.title}</h1>
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex gap-1 text-green decoration-from-font "
                    >
                      @ {item.company}{" "}
                      <span className="">
                        <MdArrowOutward />
                      </span>
                    </Link>
                  </span>

                  <h2 className="mb-6 text-lightest-slate font-mono text-sm">
                    {item.time}
                  </h2>
                  <ul className="relative list-disc pl-7 leading-snug font-sans antialiased ">
                    {item?.points?.map((point, index) => {
                      return (
                        <li key={index} className="mb-4 text-green">
                          <span className="text-slate">{point}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
