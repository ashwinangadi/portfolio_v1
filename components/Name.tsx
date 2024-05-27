"use client";
import { motion } from "framer-motion";
import { SparklesCore } from "./ui/sparkles";
export const Name = () => {
  return (
    <>
      <section
        id="Name"
        className="relative mx-auto h-screen flex items-center justify-center w-screen"
      >
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={10}
          className="w-screen h-full"
          particleColor="#FFFFFF"
        />
        <div className="absolute px-3 flex flex-col ">
          <div className="text-sm md:text-base lg:text-[1vw] text-left font-mono text-green mb-4 ">
            <h1>Hi, my name is</h1>
          </div>
          <div>
            <h2 className=" text-[clamp(30px,10vw,72px)] lg:text-[5vw] leading-none flex flex-nowrap gap-4 font-sans text-lightest-slate font-bold ">
              <span>Ashwin</span>
              <span> Angadi.</span>
            </h2>
          </div>
          <div>
            <h3 className="text-[clamp(30px,10vw,72px)] lg:text-[5vw] leading-none  font-sans text-slate font-bold mt-2">
              I build things for the web.
            </h3>
          </div>
          {/* <div>
            <h3 className="text-sm md:text-base lg:text-[1.1vw] font-sans text-slate font-light mt-5">
              I’m a frontend engineer specializing in building exceptional digital experiences.
            </h3>
          </div> */}
        </div>
      </section>
    </>
  );
};
