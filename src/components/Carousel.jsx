import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { testimonialData } from "../../config/global";
import classNames from "classnames";

export function Carousel() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Swiper
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 15 },
          650: { slidesPerView: 2, spaceBetween: 15 },
          980: { slidesPerView: 3, spaceBetween: 15 },
          1300: { slidesPerView: 4, spaceBetween: 15 },
        }}
        loop={true}
        pagination={{ clickable: false }}
        modules={[Pagination]}
        className="w-full"
        grabCursor={true}
      >
        {testimonialData.map((card, i) => (
          <SwiperSlide key={i} className="flex justify-center">
            <div className="mb-12 flex h-[400px] w-[310px] flex-col rounded-2xl bg-lightGrey px-4 py-8 text-primary">
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={`/images/${card.picture}`}
                    alt=""
                    className={classNames("h-14 w-14", {
                      "rounded-full": card.isRounded,
                    })}
                  />
                  <div className="mt-2 text-xl font-bold">{card.name}</div>
                </div>
                <img src="icons/stars.svg" alt="" className="my-2 h-6" />
              </div>

              <div className="flex h-full flex-col">
                <div className="mt-2 flex grow text-sm">{card.content}</div>
                <div className="flex justify-center">
                  <img
                    src={`/icons/google-color.svg`}
                    alt=""
                    className="h-10"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
