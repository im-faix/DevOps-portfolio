import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function ScrollRevealWrapper({ children }) {
  useEffect(() => {
    ScrollReveal().reveal("section", {
      distance: "20px",
      duration: 800,
      easing: "ease-out",
      origin: "bottom",
      interval: 100,
    });
  }, []);

  return <>{children}</>;
}
