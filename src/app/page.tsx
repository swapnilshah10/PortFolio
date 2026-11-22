import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Arcade from '@/components/Arcade';
import Konami from '@/components/Konami';
import Education from '@/components/Education';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Arcade />
      <Education />
      <Faq />
      <Contact />
      <Footer />
      <Konami />
    </main>
  );
}
