import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Button } from "@nextui-org/button";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { Image } from "@nextui-org/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

import { GithubIcon } from "@/components/icons";
import { LinkedinIcon } from "@/components/icons";
import { GmailLogo } from "@/components/icons";
import Cv from "@/components/cv";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import BackgroundLight from "@/components/backgroundLight.tsx";

import "@devnomic/marquee/dist/index.css";
import RotatedCross from "@/components/RotatedCross.tsx";
import LightLine from "@/components/LightLine.tsx";
import { Slippery } from "@/components/icons";
import Photography from "@/components/photography.tsx";
import SmoothScroll from "@/components/smoothScroll.tsx";
import Quations from "@/components/svgs/quations.tsx";
import { useSmoothScroll } from "@/context/smoothScrollContext.tsx";

export default function IndexPage() {
  const [textColor, setTextColor] = useState("text-fuchsia-600");

  return (
    <DefaultLayout>
      <SmoothScroll>
        <div className={"flex flex-wrap min-h-[120vh] relative"}>
          <div className={"h-full w-full overflow-hidden absolute"}>
            <LightLine left={10} rotate={"rotate-[115deg]"} top={287} />
            <LightLine left={10} rotate={"rotate-[15deg]"} top={587} />
            <LightLine left={10} rotate={"rotate-[150deg]"} top={0} />
            <LightLine left={10} rotate={"rotate-[-40deg]"} top={700} />
            <LightLine left={10} rotate={"rotate-[40deg]"} top={100} />
          </div>
          <BackgroundLight
            colorInner={"hsl(282, 100%, 50%)"}
            colorMiddle={"hsl(282, 51%, 50%)"}
            colorOuter={"rgb(252, 0, 0)"}
            defaultPosition={{ top: 90, left: 90 }}
            positionFormula={(n) => n * -1 + 100}
          />
          <BackgroundLight
            colorInner={"hsl(282, 100%, 50%)"}
            colorMiddle={"hsl(282, 51%, 50%)"}
            colorOuter={"rgb(252, 0, 0)"}
            defaultPosition={{ top: 0, left: 0 }}
            // positionFormula={(n) => n * -1 + 100}
          />

          <div
            className={
              "w-1/2 table:w-full flex justify-center items-center z-10"
            }
          >
            <div>
              <div>
                <h1 className={"font-bold text-3xl my-1"}>
                  Hello, it&#39;s me
                </h1>
                <h1 className={"font-bold text-5xl my-1"}>Call me Zuohuang</h1>
                <h1 className={"font-bold text-3xl my-1"}>
                  And i&#39;m a{" "}
                  <span className={`${textColor} text-2xl`}>
                    <TypeAnimation
                      repeat={Infinity}
                      sequence={[
                        "Full Stack Developer",
                        800,
                        () => setTextColor("text-pink-700"),
                        "Database Designer",
                        1000,
                        () => setTextColor("text-indigo-500"),
                        "League of Legends Player",
                        100,
                      ]}
                    />
                  </span>
                </h1>
                <p className={"text-gray-400"}>
                  Explore freely—everything you need to know about me is right
                  here!
                </p>
              </div>
              <div className={"flex justify-center flex-col my-3"}>
                <div className={"flex"}>
                  <Link
                    className={"mx-1"}
                    href="https://github.com/Zuohuang-Cai"
                  >
                    <GithubIcon />
                  </Link>
                  <Link
                    className={"mx-1"}
                    href="https://www.linkedin.com/in/zuohuang-cai/"
                  >
                    <LinkedinIcon />
                  </Link>
                  <Link
                    className={"mx-1"}
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=zc26226@gmail.com"
                  >
                    <GmailLogo />
                  </Link>
                </div>
                <Button
                  className={"max-w-40 my-2"}
                  color="primary"
                  endContent={Cv()}
                >
                  Download CV
                </Button>
              </div>
            </div>
          </div>
          <div
            className={"w-1/2 table:w-full flex justify-center items-center"}
          >
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              className={"z-10"}
              initial={{ y: -20, opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <Image
                alt="AI Avatar"
                className={
                  "h-[500px] w-[400px] table:w-[300px] table:h-[400px]"
                }
                isZoomed={true}
                src="../../public/AiAvatar.png"
              />
            </motion.div>
          </div>

          <div className={"h-[20vh] w-full justify-items-center self-end"}>
            <Slippery className={"w-[100px] h-[100px]"} />
            <p className={"text-red-600 font-bold text-center"}>
              - Scroll carefully, it&#39;s smooth -{" "}
            </p>
          </div>
        </div>
        <div className={"h-dvh w-full bg-purple-500 flex"}>
          <div
            className={
              "w-[15%] bg-black flex flex-col justify-around items-center"
            }
          >
            <RotatedCross classNameInner={"w-[7px] h-[35px]"} />
            <h1>PORTRAIT</h1>
            <RotatedCross />
            <h1>PORTRAIT</h1>
            <RotatedCross classNameInner={"w-[7px] h-[35px]"} />
          </div>
          <div className={"w-[70%] bg-black rounded-[10%] z-10"}>
            <Photography />
          </div>
          <div
            className={
              "w-[15%] bg-black flex flex-col justify-around items-center"
            }
          >
            <RotatedCross classNameInner={"w-[7px] h-[35px]"} />
            <h1>PORTRAIT</h1>
            <RotatedCross />
            <h1>PORTRAIT</h1>
            <RotatedCross classNameInner={"w-[7px] h-[35px]"} />
          </div>
        </div>

        <div className={"h-[100vh] mt-28"}>
          <div className={"flex flex-col"}>
            <h1 className={"text-7xl font-black"}>what skills</h1>
            <div className={"flex justify-start"}>
              <h1 className={"text-7xl font-black"}>can i have</h1>
              <Quations />
            </div>
          </div>
        </div>

        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="inline-block max-w-lg text-center justify-center">
            <span className={title()}> Make&nbsp;</span>
            <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
            <br />
            <span className={title()}>
              websites regardless of your design experience.
            </span>
            <div className={subtitle({ class: "mt-4" })}>
              Beautiful, fast and modern React UI library.
            </div>
          </div>
          <div className="flex gap-3">
            <Link
              isExternal
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
              href={siteConfig.links.docs}
            >
              Documentation
            </Link>
            <Link
              isExternal
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.github}
            >
              <GithubIcon size={20} />
              GitHub
            </Link>
          </div>
          ;
          <div className="mt-8">
            <Snippet hideCopyButton hideSymbol variant="bordered">
              <span>
                Get started by editing{" "}
                <Code color="primary">pages/index.tsx</Code>
              </span>
            </Snippet>
          </div>
          ;
        </section>
      </SmoothScroll>
    </DefaultLayout>
  );
}
