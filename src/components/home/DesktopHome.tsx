"use client";

import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

import { GithubIcon } from "@/components/icons";
import { LinkedinIcon } from "@/components/icons";
import { GmailLogo } from "@/components/icons";
import Cv from "@/components/cv";
import DefaultLayout from "@/components/layouts/default";
import BackgroundLight from "@/components/backgroundLight";
import RotatedCross from "@/components/RotatedCross";
import LightLine from "@/components/LightLine";
import { Slippery } from "@/components/icons";
import Photography from "@/components/photography";
import SmoothScroll from "@/components/smoothScroll";
import HorizontalScroll from "@/components/horizontalScroll";
import Quations from "@/components/svgs/quations";

export default function DesktopHome() {
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
                        100
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
                <motion.div
                  className="relative inline-block my-3 max-w-fit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 rounded-xl blur-md opacity-70"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut" as const
                    }}
                  />
                  <Button
                    className="relative px-6 py-3 bg-gradient-to-r from-purple-800 via-pink-700 to-cyan-700 text-white font-semibold rounded-xl border-none shadow-lg"
                    endContent={<Cv />}
                  >
                    Download CV
                  </Button>
                </motion.div>
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
                src="/AiAvatar.png"
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
          <div className={"w-[70%] bg-black z-10"}>
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

        {/* Skills Section */}
        <div className={"h-screen w-full"}>
          <HorizontalScroll />
        </div>

        <div
          className={"h-[100vh] w-full bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-center"}>
          <Quations />
        </div>
      </SmoothScroll>
    </DefaultLayout>
  );
}

