import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Testimonial() {
  return (
    <div>
      <div className="mb-10 flex items-center justify-center rounded-2xl bg-lightGrey px-6 py-12 text-6xl font-bold text-primary">
        Elles <img src="/icons/heart.svg" alt="heart icon" className="px-4" />{" "}
        Aux Yeux d&lsquo;Iris
      </div>

      <div>
        <Swiper
          spaceBetween={50}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },

            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide className="flex h-full bg-accent">Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonial;
