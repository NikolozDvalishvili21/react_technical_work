import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSlider() {
  const sliders = [
    {
      id: 1,
      title: "Explore React!",
      subtitle: "React/Tailwind/Swiper",
      bg: "bg-yellow-300",
    },
    {
      id: 2,
      title: "Build Clean Component-Based UI",
      subtitle: "Reusable Components with shadcn/ui",
      bg: "bg-red-500",
    },
    {
      id: 3,
      title: "Add Motion with anime.js",
      subtitle: "Create smooth, subtle animations",
      bg: "bg-green-500",
    },
  ];

  return (
    <section className="w-full h-[90vh]">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        slidesPerView={1}
        loop={true}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1500,
        }}
        className="h-full"
      >
        {sliders.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`h-full flex flex-col items-center justify-center text-center text-white ${slide.bg}`}
            >
              <h2 className="text-5xl font-bold mb-3 drop-shadow-md">
                {slide.title}
              </h2>
              <p className="text-xl opacity-90">{slide.subtitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
