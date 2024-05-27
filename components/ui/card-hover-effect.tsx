import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { it } from "node:test";
import { useState } from "react";
import { CiFolderOn } from "react-icons/ci";
import { FaRegFolder } from "react-icons/fa6";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { PiFolderSimpleThin } from "react-icons/pi";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    id: number;
    title: string;
    description: string;
    demo?: string;
    github?: string;
    technologies: string[];
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [viewAll, setViewAll] = useState(3);

  const handleViewAll = () => {
    if (viewAll < items.length) {
      setViewAll(items.length);
    } else {
      setViewAll(3);
    }
  };

  return (
    <>
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 relative lg:grid-cols-3 py-10",
          className
        )}
      >
        {items.slice(0, viewAll).map((item, idx) => (
          <div
            // href={item?.link}
            key={item?.title}
            className="relative group  block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-green/20 block  rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card className="">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <PiFolderSimpleThin className="h-10 w-10 fill-green" />
                  <span className="flex gap-4">
                    {item?.github && (
                      <Link
                        href={item?.github}
                        aria-label="GitHub Link"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="h-5 w-5 hover:text-green"
                      >
                        <FiGithub className="h-5 w-5 text-lightest-slate cursor-pointer hover:text-green" />
                      </Link>
                    )}
                    {item?.demo && (
                      <Link
                        href={item?.demo}
                        aria-label="External Link"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="h-5 w-5 hover:text-green"
                      >
                        <FiExternalLink className="h-5 w-5 text-lightest-slate cursor-pointer hover:text-green" />
                      </Link>
                    )}
                  </span>
                </div>
                <CardTitle
                  className={cn({ "text-green": hoveredIndex === idx })}
                >
                  {item.title}
                </CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </div>

              <div className="text-slate text-xs space-x-2">
                {item.technologies.map((tech, idx) => (
                  <span
                    // className="inline-block h-3 w-3 bg-light-slate rounded-full"
                    key={idx}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* ViewAll button */}
      <div className="flex flex-col items-center justify-center space-y-10">
        <div
          className="relative h-14 w-36 bg-green rounded-md hover:cursor-pointer"
          onClick={handleViewAll}
        >
          <span className="alsolute z-10 bg-[#0a192f] text-sm h-14 w-36 border border-green text-green grid place-content-center font-mono rounded-md transition-all hover:-translate-x-1 hover:-translate-y-1 duration-150">
            {viewAll > 3 ? "View Less" : "View All"}
          </span>
        </div>
      </div>
    </>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-light-navy border border-lightest-navy/60 group-hover:border-lightest-navy relative z-20",
        className
      )}
    >
      <div className="relative z-50 h-full">
        <div className="p-4 flex flex-col justify-between h-full gap-4">
          {children}
        </div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn("text-lightest-slate font-bold tracking-wide ", className)}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        " text-light-slate tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
