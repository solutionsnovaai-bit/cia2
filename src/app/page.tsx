import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Carousel from "@/components/sections/Carousel";
import Pain from "@/components/sections/Pain";
import Product from "@/components/sections/Product";
import Mechanism from "@/components/sections/Mechanism";
import HowItWorks from "@/components/sections/HowItWorks";
import Niches from "@/components/sections/Niches";
import { Reposition, BeliefBreak, Opportunity, FreeAI } from "@/components/sections/MiddleSections";
import FAQ from "@/components/sections/FAQ";
import Bonuses from "@/components/sections/Bonuses";
import Guarantee from "@/components/sections/Guarantee";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Carousel />
      <Pain />
      <Product />
      <Mechanism />
      <HowItWorks />
      <Niches />
      <Reposition />
      <BeliefBreak />
      <Opportunity />
      <FreeAI />
      <FAQ />
      <Bonuses />
      <Guarantee />
      <FinalCTA />
      <Footer />
    </main>
  );
}
