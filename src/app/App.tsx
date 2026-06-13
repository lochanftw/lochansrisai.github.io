import { CustomCursor } from "./components/CustomCursor";
import { GlowCursor } from "./components/GlowCursor";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Journey } from "./components/Journey";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: "#FAFAF7" }}>
      <CustomCursor />
      <GlowCursor />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
