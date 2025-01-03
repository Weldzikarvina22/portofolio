import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className= "container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection/>
        <Skills/>
        <Footer/>
      </div>
    </main>
  );
}