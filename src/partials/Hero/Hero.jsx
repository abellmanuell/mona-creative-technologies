// import FunArrow from "@/images/undraw_fun-arrow.svg?react";
import HeroImage from "./../../images/realistic-virtual.webp?format=webp";
import clsx from "clsx";
import { Element } from "react-scroll";
import { ScrollToLink } from "../../components/ScrollToLink/ScrollToLink";
import { usePaths } from "../..//hooks/usePaths";
import { BsArrowRight } from "react-icons/bs";
import { CiLocationArrow1 } from "react-icons/ci";

export const Hero = () => {
  const { assetBaseURL } = usePaths();
  return (
    <Element
      name="hero"
      className={clsx(
        "min-h-dvh flex flex-col",
        "relative pt-20 pb-10",
        "bg-green-100",
        "before:absolute  before:inset-y-0 before:left-0",
        "before:w-full"
      )}
    >
      <div className="relative container grow min-w-0 min-h-0 flex flex-col px-4 mx-auto ">
        <div className="grid grow min-w-0 min-h-0 grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="lg:relative">
            <div className="lg:absolute inset-0 flex justify-center">
              <img src={assetBaseURL(HeroImage)} className="h-full" />
            </div>
          </div>

          <div className="flex flex-col items-start justify-center gap-4">
            <CiLocationArrow1 className="size-12 text-green-700" />
            <h1 className="text-4xl md:text-6xl font-Syne font-bold leading-16">
              Building <span className="text-green-700">software.</span>
              <br />
              Growing <span className="text-green-700">talent.</span>
              <br />
              Solving <span className="text-green-700">real problems.</span>
            </h1>
            {/* Paragraph */}
            <p>
              At Mona Creative Technologies, we don&apos;t just write code — we
              build solutions that matter. From software development to training
              and consulting, we help individuals, startups, and organizations
              turn ideas into scalable digital products.
            </p>

            <ScrollToLink
              to="about"
              role="button"
              className={clsx(
                "bg-[#00c951] text-white",
                "rounded-md font-bold",
                "px-4 py-2 relative",
                "flex items-center space-x-2 cursor-pointer",
                "group"
              )}
            >
              <span>Get started today!</span>
              <BsArrowRight className="group-hover:translate-x-0.5" />
            </ScrollToLink>
          </div>
        </div>
      </div>
    </Element>
  );
};
