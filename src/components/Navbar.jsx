// src/components/Navbar.jsx
import { useState, useEffect } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(true);

  // Only toggle “dark” class on the client
  useEffect(() => {
    // This line runs only in the browser
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const scrollTo = (id) => {
    // scrollTo will only be called in the browser, e.g. when a button is clicked
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex justify-between items-center py-4 sticky top-0 z-50 bg-gray-900/80 backdrop-blur border-b border-gray-700 px-6">
      <h1
        className="text-xl font-bold cursor-pointer"
        onClick={() => scrollTo("hero")}
      >
        Faizan
      </h1>
      <div className="flex gap-6 text-sm">
        {["About", "Skills", "Projects", "Certifications", "Resume", "Contact"].map(
          (section) => (
            <button
              key={section}
              onClick={() => scrollTo(section.toLowerCase())}
              className="hover:text-blue-400"
            >
              {section}
            </button>
          )
        )}
        <button onClick={() => setDark(!dark)}>{dark ? "☀️" : "🌙"}</button>
      </div>
    </nav>
  );
}
