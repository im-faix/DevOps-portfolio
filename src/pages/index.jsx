// src/pages/index.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import ScrollRevealWrapper from "../components/ScrollRevealWrapper";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 py-8">
      <Navbar />
      <ScrollRevealWrapper>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Resume />
        <Contact />
      </ScrollRevealWrapper>
    </main>
  );
}
