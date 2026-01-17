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
import Cv from "@/components/svgs/cv";
import DefaultLayout from "@/components/layouts/default";
import BackgroundLight from "@/components/backgroundLight";
import LightLine from "@/components/LightLine";
import { Slippery } from "@/components/icons";
import Photography from "@/components/photography";
import Quations from "@/components/svgs/quations";
import MobileSkills from "@/components/design/mobile/MobileSkills";
import MobileDesignSection from "@/components/design/mobile/MobileDesignSection";
import Projects from "@/components/projects";
import ContactForm from "@/components/contactForm";
import Footer from "@/components/footer";

export default function MobileHome() {
  const [textColor, setTextColor] = useState("text-fuchsia-600");

  return (
    <DefaultLayout>
      <div className="flex flex-col min-h-screen relative overflow-x-hidden">
        <div className="min-h-screen relative flex flex-col justify-center px-6 py-12 items-center">
          <div className="h-full w-full overflow-hidden absolute inset-0">
            <LightLine left={5} rotate={"rotate-[115deg]"} top={200} />
            <LightLine left={5} rotate={"rotate-[15deg]"} top={400} />
          </div>
          <BackgroundLight
            colorInner={"hsl(282, 100%, 50%)"}
            colorMiddle={"hsl(282, 51%, 50%)"}
            colorOuter={"rgb(252, 0, 0)"}
            defaultPosition={{ top: 50, left: 50 }}
          />

          <motion.div
            animate={{ y: 0, opacity: 1 }}
            className="z-10 flex justify-center mb-8"
            initial={{ y: -20, opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <Image
              alt="AI Avatar"
              className="h-[280px] w-[220px]"
              isZoomed={true}
              src="/AiAvatar.png"
            />
          </motion.div>

          <div className="z-10 text-center">
            <h1 className="font-bold text-2xl my-1">Hello, it&#39;s me</h1>
            <h1 className="font-bold text-3xl my-1">Call me Zuohuang</h1>
            <h1 className="font-bold text-xl my-1">
              And i&#39;m a{" "}
              <span className={`${textColor} text-lg`}>
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
            <p className="text-gray-400 text-sm mt-2 px-4">
              Explore freely—everything you need to know about me is right here!
            </p>

            <div className="flex justify-center my-4 gap-4">
              <Link href="https://github.com/Zuohuang-Cai">
                <GithubIcon />
              </Link>
              <Link href="https://www.linkedin.com/in/zuohuang-cai/">
                <LinkedinIcon />
              </Link>
              <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=zc26226@gmail.com">
                <GmailLogo />
              </Link>
            </div>

            <motion.div
              className="relative inline-block my-4"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-purple-900 via-pink-800 to-cyan-800 rounded-xl blur-md opacity-50"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut" as const
                }}
              />
              <Button
                className="relative px-6 py-3 bg-gradient-to-r from-purple-800 via-pink-700 to-cyan-700 text-white/90 font-semibold rounded-xl border border-white/10 shadow-lg"
                endContent={<Cv />}
              >
                Download CV
              </Button>
            </motion.div>
          </div>

          <div className="flex flex-col items-center pb-8">
            <Slippery className="w-[60px] h-[60px]" />
            <p className="text-red-600 font-bold text-center text-xs">
              - Scroll carefully -
            </p>
            <p className="text-red-600 font-bold text-center text-xs">
              - It's Smooth -
            </p>
          </div>
        </div>

        <div className="h-screen w-full bg-black">
          <Photography />
        </div>

        <MobileSkills />

        <div
          className="min-h-screen w-full bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-center py-12">
          <Quations />
        </div>

        <MobileDesignSection />

        <div id="projects">
          <Projects />
        </div>

        <div id="contact">
          <ContactForm />
        </div>

        <Footer />
      </div>
    </DefaultLayout>
  );
}

