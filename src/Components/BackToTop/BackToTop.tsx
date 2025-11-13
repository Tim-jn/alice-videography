import { useState, useEffect } from "react";
import "./BackToTop.scss";

export default function BackToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="top-to-btm">
      {showTopBtn && (
        <button 
          className="icon-position icon-style" 
          onClick={goToTop}
          aria-label="Scroll back to top of page"
          title="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}
