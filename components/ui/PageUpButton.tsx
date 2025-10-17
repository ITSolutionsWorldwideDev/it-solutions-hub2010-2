"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function PageUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`z-50 transition-opacity duration-300 cursor-pointer ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "20px",
        backgroundColor: "#236b7a",
        color: "white",
        border: "none",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        cursor: "pointer",
        fontSize: "1.2rem",
        lineHeight: "1.2rem",
        textAlign: "center",
      }}
    ><ArrowUp className="mx-auto" size={20} /></button>
  );
}