import { fonts } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import styles from "./service.module.css";
import Link from "next/link";
import { Tooltip } from "antd";
const Service = () => {
  return (
    <div className="mt-10">
      <div className="text-center text-5xl tracking-widest mb-5">
        <h1 className={fonts.roboto.className}>
          <span className={`${fonts.roboto.className} text-[#EC445A]`}>S</span>
          ervices
        </h1>
      </div>
      <div className="h-full mx-auto gap-5 my-14 grid w-[300px] sm:w-[967px] grid-cols-1 sm:grid-cols-3">
        {/* ---------photographers------------------ */}
        <div className="flex flex-col overflow-hidden mt-7 justify-center items-center gap-y-5 rounded-2xl w-[309px] px-[32] py-[48] h-[370px] bg-[#a1cdf5]">
          <p className="text-2xl font-bold">Photographers</p>
          <p>Browse galleries to find your look</p>
          <div className={`flex`}>
            <Image
              src="/xdf.jpg"
              width={100}
              height={400}
              alt=""
              className="-rotate-12 rounded-md"
            />
            <Image
              src="/dim.jpg"
              width={100}
              height={400}
              alt=""
              className="rotate-12 rounded-md"
            />
          </div>
          <Link href="/photographers">
            <button className="font-bold border border-black py-2 px-4 rounded-full">
              See photographers
            </button>
          </Link>
        </div>

        {/* ---------outdoor spaces------------------ */}
        <div className={styles.imageanimation}>
          <div className="absolute text-center">
            <p className="text-2xl text-white text-center">Outdoor Spaces</p>
            <Link href={"/outdoorspaces"}>
              <button className=" text-white border-b-[2px] z-50">
                See outdoor spaces
              </button>
            </Link>
          </div>
        </div>
        {/* --------Cakes------------------ */}
        <div className="flex flex-col mt-7 justify-center items-center gap-y-5 rounded-2xl w-[309px] px-[32] py-[48] h-[370px] bg-[#fbbb03]">
          <p className="text-2xl font-bold">Cakes</p>
          <p>Meet bakers and set up tastings.</p>
          <div className={`${styles} flex`}>
            <Image
              src="/cake1.jpg"
              width={100}
              height={400}
              alt=""
              className="-rotate-12 rounded-md"
            />
            <Image
              src="/cake2.jpg"
              width={100}
              height={400}
              alt=""
              className="rotate-12 rounded-md"
            />
          </div>
          <Link href={"/cakes"}>
            <button className="font-bold border border-black py-2 px-4 rounded-full">
              Browse Cakes
            </button>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-5 rounded-2xl w-[309px] px-[32] py-[48] h-[370px] bg-[#a1cdf5]">
          <p className="text-2xl font-bold">Music/Band</p>
          <p>Keep your dance floor moving.</p>
          <div className="flex">
            <Image
              src="/music1.jpg"
              width={100}
              height={400}
              alt=""
              className="-rotate-12 rounded-md"
            />
            <Image
              src="/music2.jpg"
              width={100}
              height={400}
              alt=""
              className="rotate-12 rounded-md"
            />
          </div>
          <Tooltip placement="topLeft" title={"coming soon this feature"}>
            <button className="font-bold border border-black py-2 px-4 rounded-full">
              See More Music/Band
            </button>
          </Tooltip>
        </div>
        <div className="flex flex-col sm:mt-[-30px] justify-center items-center gap-y-5 rounded-2xl w-[309px] px-[32] py-[48] h-[370px] bg-[#ff6e00]">
          <p className="text-2xl font-bold">Beauty & Makeup</p>
          <p>Browse galleries to find your look</p>
          <div className="flex">
            <Image
              src="/makeup1.jpg"
              width={100}
              height={400}
              alt=""
              className="-rotate-12 rounded-md"
            />
            <Image
              src="/makeup2.jpg"
              width={100}
              height={400}
              alt=""
              className="rotate-12 rounded-md"
            />
          </div>
          <Tooltip placement="topLeft" title={"coming soon this feature"}>
            <button className="font-bold border border-black py-2 px-4 rounded-full">
              See Beauty&Makeup
            </button>
          </Tooltip>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-5 rounded-2xl w-[309px] px-[32] py-[48] h-[370px] bg-[#a1cdf5]">
          <p className="text-2xl font-bold">Catering</p>
          <p>Explore more to discover your catering.</p>
          <div className="flex">
            <Image
              src="/catering1.jpg"
              width={100}
              height={400}
              alt=""
              className="-rotate-12 rounded-md"
            />
            <Image
              src="/catering2.jpg"
              width={100}
              height={400}
              alt=""
              className="rotate-12 rounded-md"
            />
          </div>
          <Tooltip placement="topLeft" title={"coming soon this feature"}>
            <button className="font-bold border border-black py-2 px-4 rounded-full">
              Views Catering
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Service;
