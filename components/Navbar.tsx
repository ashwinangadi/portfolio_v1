"use client";
import { useState, useEffect, useContext } from "react";
// import resume from "./resume.pdf";
import { Link as RLink } from "react-scroll";
import Link from "next/link";
import { Social } from "./Social";

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(1);

  const [modal, setModal] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(true);
        setModal(false);
      } else {
        // if scroll up show the navbar
        setShow(false);
        setModal(false);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const navItems = [
    {
      to: "About",
      name: "About",
    },
    {
      to: "Certification",
      name: "Certificates",
    },
    {
      to: "Project",
      name: "Projects",
    },
    {
      to: "Contact",
      name: "Contact",
    },
  ];

  return (
    <>
      <section>
        {/* Desktop Navbar */}
        <div className="hidden md:block ">
          <div
            className={`fixed mx-auto flex justify-center ps-5 lg:ps-0 items-center font-mono gap-6 lg:gap-10 h-16 w-full z-50 tracking-widest backdrop-blur-md bg-navy/70 shadow-md shadow-navy-shadow transition-all duration-300  ${
              show && "-translate-y-full duration-300"
            } ${
              lastScrollY > 0 ? "shadow-md shadow-navy-shadow" : "shadow-none"
            }`}
          >
            <ol className="flex space-x-14 lg:space-x-16 list-decimal text-md ">
              {navItems.map((item) => (
                <li key={item.to} className="text-green text-sm cursor-pointer">
                  <RLink
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-lightest-slate hover:text-green "
                  >
                    {item.name}
                  </RLink>
                </li>
              ))}
            </ol>
            <div className="relative h-10 w-24 bg-green rounded-md ">
              <a
                className="alsolute  bg-[#0a192f] h-10 w-24 border border-green text-green grid place-content-center font-mono rounded-md transition-all hover:-translate-x-1 hover:-translate-y-1 duration-150"
                // href={resume}
                rel="noopener noreferrer"
                target="_blank"
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div
          className={`fixed h-16 flex items-center justify-end font-mono w-full md:hidden tracking-widest backdrop-blur-md bg-navy/70 z-10 transition-all duration-300 shadow-md shadow-navy-shadow ${
            show && "-translate-y-full duration-300"
          } ${
            lastScrollY > 0 ? "shadow-md shadow-navy-shadow" : "shadow-none"
          }`}
        >
          <div
            className="me-[5%] flex items-center h-16 w-16 justify-center z-50"
            onClick={() => {
              modal == true ? setModal(false) : setModal(true);
            }}
          >
            {!modal ? (
              <svg
                className="ham hamRotate ham1 "
                viewBox="0 0 100 100"
                width="80"
              >
                <path
                  className="line top"
                  d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -npm run dev13.637059,4.171617 -13.637059,16.368042 v 40"
                />
                <path className="line middle" d="m 30,50 h 40" />
                <path
                  className="line bottom"
                  d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
                />
              </svg>
            ) : (
              <svg
                className={`${modal && "active"} ham hamRotate ham1`}
                viewBox="0 0 100 100"
                width="80"
              >
                <path
                  className="line top"
                  d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
                />
                <path className="line middle" d="m 30,50 h 40" />
                <path
                  className="line bottom"
                  d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
                />
              </svg>
            )}
          </div>

          <div
            className={`absolute flex flex-col items-center justify-center bg-light-navy md:hidden h-screen w-[280px] right-0 top-0 shadow-2xl shadow-navy-shadow transition-all duration-300  ${
              !modal && "translate-x-80 duration-300"
            }`}
          >
            <div className="flex flex-col items-center justify-start space-y-12">
              {/* Menu */}
              <ul className="list-decimal flex flex-col justify-center items-center space-y-10 text-sm list-inside font-mono font-semibold">
                {navItems.map((item) => (
                  <li
                    key={item.to}
                    className="text-green text-sm text-center"
                    onClick={() =>
                      modal == true ? setModal(false) : setModal(true)
                    }
                  >
                    <RLink
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      className="text-lightest-slate hover:text-green block"
                    >
                      {item.name}
                    </RLink>
                  </li>
                ))}
              </ul>

              {/* Resume and Social */}
              <div className="flex flex-col items-center justify-center space-y-10">
                {/* Resume button */}
                <div className="relative h-14 w-36 bg-green rounded-md ">
                  <Link
                    className="alsolute z-10 bg-[#0a192f] text-sm h-14 w-36 border border-green text-green grid place-content-center font-mono rounded-md transition-all hover:-translate-x-1 hover:-translate-y-1 duration-150"
                    href={"resume"}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Resume
                  </Link>
                </div>

                {/* Social */}
                <Social />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
