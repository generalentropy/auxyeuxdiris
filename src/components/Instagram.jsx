import { useEffect } from "react";

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
    <div className="relative flex w-full">
      <div
        className="elfsight-app-ef718ee8-4160-49c7-9cd7-e0be49550d64"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}

export default Instagram;
