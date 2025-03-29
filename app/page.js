import Hero from "@/app/components/Hero";
import CountdownTimer from "@/app/components/CountdownTimer";
import ValueProposition from "@/app/components/ValueProposition";
import PainSolution from "@/app/components/PainSolution";
import Testimonials from "@/app/components/Testimonials";
import VideoSalesLetter from "@/app/components/VideoSalesLetter";
import Pricing from "@/app/components/Pricing";
import FAQ from "@/app/components/FAQ";
import Message from "./components/Message";

export default function Home() {
  return (
      <main>
        <Message />
        <Hero />
        <CountdownTimer />
        <ValueProposition />
        <PainSolution />
        <VideoSalesLetter />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
  );
}
