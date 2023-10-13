import { fonts } from "@/app/fonts";
import Image from "next/image";
import React from "react";

const Venues = [
  {
    logo: "/venue-1.jpg",
    name: "khalisRampur",
  },
  {
    logo: "/venue-2.jpg",
    name: "DinajpurMitaPara",
  },
  {
    logo: "/venue-3.jpg",
    name: "NeyajamePatkel",
  },
  {
    logo: "/venue-4.jpg",
    name: "Alisan Manjil",
  },
  {
    logo: "/venue-5.jpg",
    name: "VemorghatBuilding",
  },
  {
    logo: "/venue-6.jpg",
    name: "WisnstanBuidPara",
  },
];
const Venue = () => {
  return (
    <div className="h-full">
      <div className="text-center text-5xl tracking-widest mb-5">
        <h1 className={fonts.roboto.className}>
          <span className="text-[#EC445A]">V</span>enue
        </h1>
      </div>

      <div className="flex flex-wrap gap-4 justify-center items-center">
        {Venues.map((item, index) => (
          <div
            key={index}
            className="relative w-[300px] h-[180px] sm:w-[350px] overflow-hidden bg-[#d3d3d3] border border-gray-200 rounded-lg shadow group"
          >
            <Image
              width={500}
              height={180}
              src={item.logo}
              alt=""
              className="transition-transform transform scale-100 group-hover:scale-110"
            />
            <h1 className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 bg-opacity-75 bg-black transition-opacity duration-300 text-2xl font-bold">
              {item.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Venue;
