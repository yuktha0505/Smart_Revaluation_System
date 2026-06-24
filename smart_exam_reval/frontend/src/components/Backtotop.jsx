import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="
        fixed
        bottom-6
        left-6
        z-50
        flex
        items-center
        justify-center
        w-12
        h-12
        rounded-full
        bg-violet-600
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:bg-violet-500
        hover:scale-110
        hover:shadow-xl
        active:scale-95
      "
    >
      <ChevronUp size={22} />
    </button>
  );
}
