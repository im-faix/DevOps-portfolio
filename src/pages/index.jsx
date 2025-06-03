// pages/index.jsx
import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Resume from "../components/Resume";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 py-8">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Resume />
      <Contact />
    </main>
  );
}
