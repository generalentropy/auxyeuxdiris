import { useEffect } from "react";
import Anchor from "./Anchor";

function Instagram() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Anchor divId="realisations" />
      <div className="my-5 flex flex-col items-center justify-center rounded-2xl bg-lightGrey py-5 text-primary sm:py-8 lg:my-10 lg:flex-row lg:gap-6 lg:py-10">
        <span className="bg-gradient-to-r from-[#5B51D8] via-[#E1306C] to-[#FCAF45] bg-clip-text py-1 text-lg font-bold text-transparent xs:text-xl sm:text-3xl md:text-4xl lg:py-2 lg:text-5xl">
          Suivez-nous sur instagram !
        </span>

        <a href="https://www.instagram.com/lash_viking/">
          <div className="mb-2 mt-2 flex items-center justify-center rounded-full bg-gradient-to-r from-[#5B51D8] via-[#E1306C] to-[#FCAF45] px-8 py-2 text-lg font-bold text-white transition-colors hover:hue-rotate-30 lg:mb-0 lg:mt-0 lg:px-12 lg:py-3 lg:text-xl">
            @auxyeuxdiris
          </div>
        </a>
      </div>

      <div className="relative flex w-full">
        <div
          className="elfsight-app-ef718ee8-4160-49c7-9cd7-e0be49550d64"
          data-elfsight-app-lazy
        ></div>
      </div>
    </>
  );
}

export default Instagram;
