import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/Hero";
import { CareerTrace } from "@/components/CareerTrace";
import { Partners } from "@/components/Partners";
import { Education } from "@/components/Education";
import { BeyondCode } from "@/components/BeyondCode";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";

export default function Home() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <CareerTrace />
        <Partners />
        <Education />
        <BeyondCode />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
