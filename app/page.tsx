"use client";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import Experience from "@/components/Experience";
import { Name } from "@/components/Name";
import { Social } from "@/components/Social";
import FeaturedProjects from "@/components/project/FeaturedProjects";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Projects from "@/components/project/Projects";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Name />
      {/* <TracingBeam className=""> */}
        <section className="space-y-40 ">
          <About />
          <Experience />
          <FeaturedProjects />
          {/* <Sxp /> */}
          <Projects />
          <Contact />
          <Social />
        </section>
      {/* </TracingBeam> */}
    </main>
  );
}
