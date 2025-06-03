// src/components/ScrollRevealWrapper.jsx
import { useEffect } from "react";

export default function ScrollRevealWrapper({ children }) {
  useEffect(() => {
    // Only load scrollreveal on the client
    import("scrollreveal").then((module) => {
      const ScrollReveal = module.default;
      ScrollReveal().reveal("section", {
        distance: "20px",
        duration: 800,
        easing: "ease-out",
        origin: "bottom",
        interval: 100,
      });
    });
  }, []);

  return <>{children}</>;
}
