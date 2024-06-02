import Image from "next/image";
import { Skills } from "./constants/Constant";
import Link from "next/link";

export const About = () => {
  return (
    <>
      <section
        id="About"
        className="container mx-auto  md:h-full flex flex-col items-center justify-center w-full  md:max-w-5xl px-5  "
      >
        <div className="flex flex-col">
          <div className="text-base font-sans mb-10 flex items-center">
            <h1 className="text-green text-xl md:text-2xl font-mono grid place-self-end">
              01.
            </h1>
            <h2 className="mx-2 text-2xl md:text-3xl text-lightest-slate font-bold">
              About Me
            </h2>
            <h3 className="mx-5 border border-lightest-navy w-[30%] md:w-[40%]">
              {" "}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 md:gap-4 ">
            <div className="col-span-4 md:me-5">
              {/* <p className="  font-sans text-slate mb-2 text-justify">
                As a front-end engineer, I craft visually appealing and highly
                functional web applications. Proficient in HTML, CSS, and
                JavaScript, I build responsive user interfaces that combine
                aesthetics and performance. Certified by freeCodeCamp.com, I
                utilize the latest frameworks and technologies to deliver
                cutting-edge solutions.
              </p> */}
              <p className="  font-sans text-slate mb-2 text-justify">
                Hi there, I&apos;m Ashwin, a front-end engineer, I craft
                visually appealing and highly functional web applications.
                Proficient in HTML, CSS, and JavaScript, I build responsive user
                interfaces that combine aesthetics and performance. Holding
                prestigious certifications from freeCodeCamp.com in
                <Link
                  href={
                    "https://www.freecodecamp.org/certification/Ashwin_Angadi/responsive-web-design"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green"
                >
                  {" "}
                  Responsive Web Design
                </Link>
                ,
                <Link
                  href={
                    "https://www.freecodecamp.org/certification/Ashwin_Angadi/javascript-algorithms-and-data-structures"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green"
                >
                  {" "}
                  JavaScript Algorithms and Data Structures
                </Link>{" "}
                , and
                <Link
                  href={
                    "https://www.freecodecamp.org/certification/Ashwin_Angadi/front-end-libraries"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green"
                >
                  {" "}
                  Front End Development Libraries.{" "}
                </Link>
                I utilize the latest frameworks and technologies to deliver
                cutting-edge solutions.
              </p>
              <p className="  font-sans text-slate mb-2 text-justify">
                With a keen eye for detail and strong problem-solving skills, I
                excel at translating designs into pixel-perfect representations
                through cross-functional collaboration. My portfolio
                demonstrates a blend of technical expertise and creative vision,
                consistently exceeding expectations. I am a valuable asset to
                web development projects, committed to enhancing user
                experiences.
              </p>
              {/* <p className="  font-sans text-slate mb-2 text-justify">
                Equipped with a keen eye for detail and strong problem-solving
                skills, I excel at collaborating with cross-functional teams to
                translate designs into pixel-perfect representations. Committed
                to continuous learning, my portfolio showcases a unique blend of
                technical expertise and creative vision. I consistently deliver
                exceptional results that exceed expectations, making me a
                valuable asset to web development projects.
              </p> */}
              {/* <p className="  font-sans text-slate mb-2 text-justify">When I&apos;m not coding, you can find me swimming, hiking, playing video games or travelling to beautiful destinations. </p> */}

              {/* <p className=" font-sans text-slate mb-2 text-justify">I&apos;m always looking for opportunities to work with those who are willing to share their knowledge as much as I want to learn. At the end of the day, my primary goal is to create something beautiful with people that bring out the best in me.</p> */}
              <p className=" font-sans text-slate text-justify">
                Here are a few technologies I&apos;ve been working with
                recently:
              </p>
              <ul className="list-inside list-inline list-disc list-green grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-mono text-sm mt-5 ">
                {Skills.map((skill, index) => {
                  return (
                    <li key={index} className="text-green">
                      <span className="text-light-slate">{skill}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="grid place-self-center md:place-self-start relative col-span-2 border-2 border-green hover:translate-y-1 hover:translate-x-1 duration-150 rounded-md mt-10 md:mt-2">
              <div className="bg-[#8ed5c4] -translate-y-2 -translate-x-2 hover:-translate-y-4 hover:-translate-x-4 duration-150 rounded-md ">
                <Image
                  src={"/images/dp.jpg"}
                  width={200}
                  height={200}
                  alt="Recipe project window"
                  className="  mix-blend-luminosity hover:mix-blend-normal rounded-md h-60 w-56 md:h-fit md:w-fit"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
