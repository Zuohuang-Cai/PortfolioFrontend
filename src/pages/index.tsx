import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import bgImage from "../../public/blue_smoke_bg.jpg";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import AnimatedText from "@/components/AnimatedText.tsx";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className={"flex h-dvh"} style={{ background: `url(${bgImage})` }}>
        <div className={"w-1/2 flex"}>
          <div className={"justify-items-end w-full"}>
            <div className={"overflow-hidden p-1 flex align-middle"}>
              <AnimatedText
                className={"text-7xl"}
                duration={6}
                texts={[
                  <p key={1}>hello</p>,
                  <p key={2}>how are you</p>,
                  <p key={3}>am good</p>,
                ]}
              />
            </div>
            <div className={"overflow-hidden p-1 flex align-middle"}>
              <AnimatedText
                className={"text-7xl"}
                duration={7}
                texts={[
                  <p key={1}>hello</p>,
                  <p key={2}>how are you</p>,
                  <p key={3}>am good</p>,
                ]}
              />
            </div>
          </div>
        </div>

        <div className={"w-1/2"} />
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
