import Carousel from "./Carousel";
import { googleMapsLink } from "../../config/global";

function Testimonial() {
  return (
    <div>
      <div className="mb-10 flex items-center justify-center rounded-2xl bg-lightGrey px-6 py-12 text-xl font-bold text-primary xs:text-2xl sm:text-4xl lg:text-5xl">
        Elles{" "}
        <img
          src="/icons/heart.svg"
          alt="heart icon"
          className="h-8 px-2 xs:h-9 sm:h-12 lg:h-14 lg:px-4"
        />{" "}
        Aux Yeux d&lsquo;Iris
      </div>

      <Carousel />

      <div className="mt-5 flex items-center justify-center rounded-2xl bg-accent py-10">
        <a href={googleMapsLink} target="_blank" rel="noopener">
          <div className="flex items-center gap-2 whitespace-nowrap rounded-full bg-white px-4 py-1 text-lg font-bold text-primary transition-colors hover:bg-lightGrey xs:px-6 xs:text-xl">
            <span className="align-text-bottom text-4xl font-medium text-accent xs:text-5xl">
              +
            </span>
            d&lsquo;avis sur Maps{" "}
            <img src="/icons/maps-logo.svg" alt="" className="ml-2" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Testimonial;
