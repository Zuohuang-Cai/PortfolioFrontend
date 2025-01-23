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

export default function IndexPage() {
  const [textColor, setTextColor] = useState("text-fuchsia-600");

  return (
    <DefaultLayout>
      <div className={"flex flex-wrap h-dvh my-10 relative"}>
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

        <div className={"w-1/2 table:w-full flex justify-center items-center"}>
          <div>
            <h1 className={"font-bold text-3xl my-1"}>Hello, it's me</h1>
            <h1 className={"font-bold text-5xl my-1"}>Call me Zuohuang</h1>
            <h1 className={"font-bold text-3xl my-1"}>
              And i'm a{" "}
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
              Explore freely—everything you need to know about me is right here!
            </p>
            <div className={"flex justify-center flex-col my-3"}>
              <div className={"flex"}>
                <Link className={"mx-1"} href="https://github.com/Zuohuang-Cai">
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
        <div className={"w-1/2 table:w-full flex justify-center items-center"}>
          <motion.div
            animate={{ y: 20, opacity: 1 }}
            initial={{ y: -10, opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <Image
              alt="AI Avatar"
              className={"h-[500px] w-[400px] table:w-[300px] table:h-[400px]"}
              isZoomed={true}
              src="../public/aiAvatar.png"
            />
          </motion.div>
        </div>
      </div>
      <div className={"h-dvh w-dvw bg-purple-500 flex"}>
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
        <div className={"w-[70%] bg-red-700 rounded-[10%]"} />
        <div className={"w-[15%] bg-black"} />
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
    </DefaultLayout>
  );
}
