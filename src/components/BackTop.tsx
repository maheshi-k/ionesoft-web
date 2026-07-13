"use client";

import { useEffect, useState } from "react";
import { ChevronsUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed bottom-8 right-8 z-50
        flex h-12 w-12 items-center justify-center
        rounded-full bg-[var(--primary)] text-white
        shadow-lg transition-all duration-300
        hover:-translate-y-1 hover:bg-green-700
        ${
          visible
            ? "opacity-100 translate-y-0 animate-bounce"
            : "pointer-events-none opacity-0 translate-y-4"
        }
      `}
    >
      <ChevronsUp size={24} strokeWidth={2.5} />
    </button>
  );
}
