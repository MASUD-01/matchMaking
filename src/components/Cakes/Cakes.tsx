"use client";
import { Pagination } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const Cakes = () => {
  const [page, setPage] = useState(2);
  const pageChange = (value: any) => {
    console.log(value);
    if (value === 2) {
      setPage(3);
    } else {
      setPage(2);
    }
  };
  return (
    <div>
      <div className="flex justify-center">
        <Link className="text-center p-3 border rounded-lg mt-10" href="/">
          Back
        </Link>
      </div>
      <p className="text-center text-xl sm:text-2xl font-bold my-10">
        80 Wedding Cake Bakeries in Bangladesh
      </p>
      <div className=" sm:flex gap-x-5 justify-center sm:mx-32">
        {CakesList.slice(0, page).map((item, index) => (
          <div
            key={index}
            className="w-[310px] mx-auto mt-6 sm:mt-0 p-2 border hover:shadow-lg"
          >
            <Link href={`/cakes/${item.id}`} className="">
              <Image
                src={item.src}
                className="rounded-md"
                height={300}
                width={300}
                alt="images"
              />
              <p className="flex justify-between py-1">
                <span></span>
                <span className="flex">
                  <AiFillStar className="text-amber-400" />{" "}
                  <span className="text-xs">{item.rating}</span>
                </span>
              </p>
              <p>{item.title}</p>
              <p>{item.price}</p>
              <p>{item.des.slice(0, 100)} ....more</p>
            </Link>
          </div>
        ))}
      </div>

      <div className="mx-32 flex justify-end mt-5">
        <Pagination
          defaultCurrent={1}
          defaultPageSize={2}
          total={CakesList.length}
          onChange={pageChange}
        />
      </div>
    </div>
  );
};

export default Cakes;

export const CakesList = [
  {
    id: 1,
    title: "The Sweet Peace Specialty Cakes",
    price: "BDT 20000-40000",
    des: "Getting the cake of your dreams is easy...cutting is the hard part! We cater to any dietary requirements and a variety of allergies. If you are hosting an extravagant affair or just a few friends, allow us to cater your every wish.",
    rating: 4.5,
    src: "/c1.jpg",
  },
  {
    id: 2,
    title: "La Gran Via Bakery",
    price: "BDT 23000-50000",
    des: "Getting the cake of your dreams is easy...cutting is the hard part! We cater to any dietary requirements and a variety of allergies. If you are hosting an extravagant affair or just a few friends, allow us to cater your every wish.",
    rating: 4.2,
    src: "/c2.jpg",
  },
  {
    id: 3,
    title: "Purple Cow Cakery",
    price: "BDT 15000-50000",
    des: "Getting the cake of your dreams is easy...cutting is the hard part! We cater to any dietary requirements and a variety of allergies. If you are hosting an extravagant affair or just a few friends, allow us to cater your every wish.",
    rating: 4.8,
    src: "/c3.jpg",
  },
];
