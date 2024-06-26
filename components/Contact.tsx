export const Contact = () => {
  return (
    <>
      <section
        id="Contact"
        className="container mx-auto xl:pb-40 h-full flex flex-col items-center justify-center max-w-4xl "
      >
        <div className="text-base mb-10 flex items-center justify-center text-green font-mono font-normal mt-2.5 w-full">
          <h1 className="">04.</h1>
          <h2 className="mx-2">What&apos;s Next?</h2>
        </div>
        <h2 className="font-bold text-lightest-slate mb-10 text-5xl font-sans">
          Get In Touch
        </h2>
        <p className="flex flex-col font-sans text-center text-slate text-lg antialiased ">
          Ah, you&apos;ve made it this far! I commend your curiosity and
          perseverance. Now that you&apos;ve had a glimpse into my world, let&apos;s take
          the next step and open the door to potential collaborations or
          exciting opportunities.
          <span className="font-mono text-blue">
            Let&apos;s make something extraordinary! 🚀
          </span>
          .
        </p>
        <div className="relative h-14 w-36  bg-green mt-20 rounded-md">
          <a
            className="alsolute z-10 bg-[#0a192f] h-14 w-36 border border-green text-green grid place-content-center font-mono rounded-md transition-all hover:-translate-x-1 hover:-translate-y-1 duration-150"
            href="mailto:ashwin.angadi1@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Say Hello
          </a>
        </div>
      </section>
    </>
  );
};
