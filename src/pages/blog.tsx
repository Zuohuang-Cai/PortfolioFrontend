import DefaultLayout from "@/layouts/default";
import AnimatedText from "@/components/AnimatedText.tsx";

export default function DocsPage() {

  const texts = [
    <span key={1}>Hello, World!</span>,
    <div key={2}>Welcome <span className={"text-lime-300"}>to</span> Framer Motion</div>,
    <p key={3}>Enjoy Animations!</p>
  ];

  return (
    <DefaultLayout>
      <AnimatedText texts={texts} />
    </DefaultLayout>
  );
}
