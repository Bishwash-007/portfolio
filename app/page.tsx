import Navbar from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Testimony } from "@/components/Testimony";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <section id="home" className="min-h-screen">
        <Hero />
      </section>
      <section id="experience" className="min-h-screen">
        <Experience />
      <section id="tech-stack" className="min-h-screen">
        <TechStack />
      </section>
      </section>
      <section id="projects" className="min-h-screen">
        <Projects />
      </section>
      <section id="testimonials" className="min-h-screen">
        <Testimony />
      </section>
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
