import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const useScrollToHash = () => {
  const location = useLocation();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    if (!location.hash) return;

    const elementId = location.hash.slice(1);

    const handleScroll = () => {
      const el = document.getElementById(elementId);
      if (!el) return;
      el.scrollIntoView({
        behavior: isMobile ? "instant" : "smooth",
        block: "start",
        inline: "nearest",
      });
    };

    requestAnimationFrame(handleScroll);
  }, [location, isMobile]);
};

export default useScrollToHash;
