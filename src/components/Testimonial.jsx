import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

function Testimonial() {
  return (
    <div className="mb-10">
      <div className="mb-10 flex items-center justify-center rounded-2xl bg-lightGrey px-6 py-12 text-xl font-bold text-primary xs:text-2xl sm:text-4xl lg:text-5xl">
        Elles{" "}
        <img
          src="/icons/heart.svg"
          alt="heart icon"
          className="h-8 px-2 xs:h-9 sm:h-12 lg:h-14 lg:px-4"
        />{" "}
        Aux Yeux d&lsquo;Iris
      </div>
    </div>
  );
}

export default Testimonial;

function Carousel() {
  return (
    <div className="flex w-full items-center justify-center border border-red-500">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          type: "bullets",
        }}
        modules={[Pagination]}
        className="googleTestimonial"
        centeredSlides={true}
        centeredSlidesBounds={true}
        loop={true}
        grabCursor={true}
      >
        <SwiperSlide className="flex items-center justify-center">
          <div className="flex h-[300px] w-[300px] items-center justify-center rounded-2xl bg-lightGrey">
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <div className="flex h-[300px] w-[300px] items-center justify-center rounded-2xl bg-lightGrey">
            Slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <div className="flex h-[300px] w-[300px] items-center justify-center rounded-2xl bg-lightGrey">
            Slide 3
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <div className="flex h-[300px] w-[300px] items-center justify-center rounded-2xl bg-lightGrey">
            Slide 4
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
