import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Metrics from "@/components/Metrics";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Metrics />
        <Portfolio />
        <Skills />
        <Services />
        <Process />
        <Testimonial />
        <Contact />
      </main>
      <FloatingCta />
      <Footer />
    </>
  );
}
