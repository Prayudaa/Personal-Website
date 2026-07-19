import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Testimonial from "@/components/Testimonial";
import Skills from "@/components/Skills";
import Metrics from "@/components/Metrics";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Portfolio />
        <Testimonial />
        <Skills />
        <Metrics />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
