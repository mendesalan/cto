import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProblemsSolutions from "@/components/ProblemsSolutions";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <ProblemsSolutions />
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
