import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Button } from "@nextui-org/button";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { Image } from "@nextui-org/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

import Cv from "@/components/cv";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  const [textColor, setTextColor] = useState("text-fuchsia-600");

  return (
    <DefaultLayout>
      <div className={"flex h-dvh bg-black"}>
        <div className={"w-1/2 flex justify-items-center items-center"}>
          <div className={"ml-60"}>
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
              loren ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            </p>
            <div className={"flex justify-center"}>
              <Button color="primary" endContent={Cv()}>
                Download CV
              </Button>
            </div>
          </div>
        </div>
        <div className={"w-1/2 flex justify-center items-center"}>
          <motion.div
            animate={{ y: 20, opacity: 1 }}
            initial={{ y: -10, opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <Image
              alt="NextUI hero Image with delay"
              height={500}
              isZoomed={true}
              src="../public/aiAvatar.png"
              width={400}
            />
          </motion.div>
        </div>
      </div>

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Make&nbsp;</span>
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

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing{" "}
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section>
    </DefaultLayout>
  );
}
