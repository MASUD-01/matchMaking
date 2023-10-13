"use client";
import React from "react";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { fonts } from "@/app/fonts";

const successfulmarriages = [
  { pic: "/successful_marriage/marrigeCouple.jpg" },
  { pic: "/successful_marriage/marrigeCouple2.jpg" },
  { pic: "/successful_marriage/successfull_marraige (1).jpg" },
  { pic: "/successful_marriage/marrigeCouple.jpg" },
  { pic: "/successful_marriage/marrigeCouple.jpg" },
  { pic: "/successful_marriage/successfull_marraige (3).jpg" },
  { pic: "/successful_marriage/marrigeCouple.jpg" },
  { pic: "/successful_marriage/marrigeCouple.jpg" },
  { pic: "/successful_marriage/successfull_marraige (3).jpg" },
  { pic: "/successful_marriage/marrigeCouple.jpg" },
];

const SuccessfulMarriagesCarousel = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1500px] mb-4">
        <div className="text-center text-3xl sm:text-5xl tracking-widest mt-5 mb-10">
          <h1 className={`${fonts.roboto.className}`}>
            <span className={`${fonts.roboto.className} text-[#EC445A]`}>
              S
            </span>
            uccessful
            <span className={`${fonts.roboto.className} text-[#EC445A]`}>
              M
            </span>
            arriages
          </h1>
        </div>
        <div>
          <Swiper
            style={{ height: "480px" }}
            spaceBetween={200}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            // slidesPerView={3}
            coverflowEffect={{
              rotate: 0,
              stretch: 80,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              400: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 3,
              },
              1920: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, EffectCoverflow, Navigation]}
            className="mySwiper w-[300px] sm:w-[1300px]"
          >
            {successfulmarriages.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="border rounded-md">
                  <Image
                    src={item.pic}
                    width={300}
                    height={200}
                    alt=" "
                    className="rounded-md mb-2"
                    style={{ width: 300, height: 330 }}
                  />
                  <div className="p-2">
                    <p>Hena & Neeraj</p>
                    <p className="text-left text-sm">
                      It was a very good experince for me. We matched on
                      Match360.com and hit it off with first meeting itself.The
                      compatibility with the partner is very important and
                      finding...
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulMarriagesCarousel;
