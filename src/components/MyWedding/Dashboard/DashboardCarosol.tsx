"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
// import required modules
import { Grid, Pagination } from "swiper/modules";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const recentVisitors = [
  {
    image: <Avatar shape="square" size={64} icon={<UserOutlined />} />,
    name: "Sohana khatun",
    des: "20 yrs, 5, Bengali Dhaka",
    connect: "Connect Now",
  },
  {
    image: <Avatar shape="square" size={64} icon={<UserOutlined />} />,
    name: "Sohana khatun",
    des: "20 yrs, 5, Bengali Dhaka",
    connect: "Connect Now",
  },
  {
    image: <Avatar shape="square" size={64} icon={<UserOutlined />} />,
    name: "Sohana khatun",
    des: "20 yrs, 5, Bengali Dhaka",
    connect: "Connect Now",
  },
  {
    image: <Avatar shape="square" size={64} icon={<UserOutlined />} />,
    name: "Sohana khatun",
    des: "20 yrs, 5, Bengali Dhaka",
    connect: "Connect Now",
  },
  {
    image: <Avatar shape="square" size={64} icon={<UserOutlined />} />,
    name: "Sohana khatun",
    des: "20 yrs, 5, Bengali Dhaka",
    connect: "Connect Now",
  },
];
const DashboardCarosol = () => {
  return (
    <div className="h-[320px] my-10 rounded-md">
      <div>
        <Swiper
          // slidesPerView={3}
          grid={{
            rows: 1,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className="mySwiper w-385 sm:w-[885px]"
          breakpoints={{
            400: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 4,
            },
            1920: {
              slidesPerView: 4,
            },
          }}
        >
          {recentVisitors.map((item, index) => (
            <SwiperSlide key={index} className=" hover:shadow-2xl">
              <div className="mt-5 flex flex-col gap-y-3 justify-center items-center">
                <Avatar size={100} icon={<UserOutlined />} />
                <p className="font-bold">{item.name}</p>
                <p>{item.des}</p>
                <button className="border text-[#FF45CC] font-bold border-[#FF45CC] p-2 rounded-full shadow-lg text-xs">
                  Connect Now
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DashboardCarosol;
