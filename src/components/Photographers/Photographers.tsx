"use client";
import { Pagination } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const Photographers = () => {
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
        300 wedding Photographers in Bangladesh
      </p>
      <div className=" sm:flex gap-x-5 justify-center sm:mx-32">
        {photographersList.slice(0, page).map((item, index) => (
          <div
            key={index}
            className="w-[310px] mx-auto mt-6 sm:mt-0 p-2 border hover:shadow-lg"
          >
            <Link href={`/photographers/${item.id}`} className="">
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
          total={photographersList.length}
          onChange={pageChange}
        />
      </div>
    </div>
  );
};

export default Photographers;

export const photographersList = [
  {
    id: 1,
    title: "George Street Photo & Video",
    price: "BDT 20000-40000",
    des: "George Street Photo & Video’s professional wedding photographers and videographers in. With the award-winning Manhattan wedding photographers at George Street Photo & Video, you can be assured that your special day is in great hands! Your wedding day will go by in what feels like a blink of an eye, but the photojournalistic style used by their wedding photographers makes sure that those moments are kept alive for generations to come. From the tiny details that you put so much thought into, to the explosive emotional moments and bursts of energy on the dance floor, the professional wedding photographers and videographers at George Street are there to capture it all so you feel like you can revisit your wedding day at any time. Since 2004, they have been helping newly engaged couples get exactly what they want for their Manhattan wedding photography. You will get started with a unique style test to pinpoint your exact wedding style. George Street also offers a complimentary and obligation-free consultation with an experienced wedding consultant who will show you a selection of photographers that perfectly match your style! They offer a range of affordable wedding photography packages that will suit your wedding, whether you’re having an intimate elopement, or a grandiose multi-day event. Once you have selected your photographer and the best package for your day, you will gain access to their custom online planning portal to seamlessly plan your timeline and shot list for your talent team. Destination wedding packages are also available within theYour love story starts here–with stunning, timeless Manhattan wedding photography.",
    rating: 4.5,
    src: "/p1.jpg",
  },
  {
    id: 2,
    title: "Double Knot Pictures | Photo + Video",
    price: "BDT 23000-50000",
    des: "Our collective of award-winning photographers and videographers celebrate the candid, authentic With the award-winning Manhattan wedding photographers at George Street Photo & Video, you can be assured that your special day is in great hands! Your wedding day will go by in what feels like a blink of an eye, but the photojournalistic style used by their wedding photographers makes sure that those moments are kept alive for generations to come. From the tiny details that you put so much thought into, to the explosive emotional moments and bursts of energy on the dance floor, the professional wedding photographers and videographers at George Street are there to capture it all so you feel like you can revisit your wedding day at any time. Since 2004, they have been helping newly engaged couples get exactly what they want for their Manhattan wedding photography. You will get started with a unique style test to pinpoint your exact wedding style. George Street also offers a complimentary and obligation-free consultation with an experienced wedding consultant who will show you a selection of photographers that perfectly match your style! They offer a range of affordable wedding photography packages that will suit your wedding, whether you’re having an intimate elopement, or a grandiose multi-day event. Once you have selected your photographer and the best package for your day, you will gain access to their custom online planning portal to seamlessly plan your timeline and shot list for your talent team. Destination wedding packages are also available within the country.Your love story starts here–with stunning, timeless Manhattan wedding photography.",
    rating: 4.2,
    src: "/p2.jpg",
  },
  {
    id: 3,
    title: "DEivan's Photo & Video",
    price: "BDT 15000-50000",
    des: "We offer a personalized experience backed up by more than 30 years in business delivering With the award-winning Manhattan wedding photographers at George Street Photo & Video, you can be assured that your special day is in great hands! Your wedding day will go by in what feels like a blink of an eye, but the photojournalistic style used by their wedding photographers makes sure that those moments are kept alive for generations to come. From the tiny details that you put so much thought into, to the explosive emotional moments and bursts of energy on the dance floor, the professional wedding photographers and videographers at George Street are there to capture it all so you feel like you can revisit your wedding day at any time. Since 2004, they have been helping newly engaged couples get exactly what they want for their Manhattan wedding photography. You will get started with a unique style test to pinpoint your exact wedding style. George Street also offers a complimentary and obligation-free consultation with an experienced wedding consultant who will show you a selection of photographers that perfectly match your style! They offer a range of affordable wedding photography packages that will suit your wedding, whether you’re having an intimate elopement, or a grandiose multi-day event. Once you have selected your photographer and the best package for your day, you will gain access to their custom online planning portal to seamlessly plan your timeline and shot list for your talent team. Destination wedding packages are also available within the country.Your love story starts here–with stunning, timeless Manhattan wedding photography.   ",
    rating: 4.8,
    src: "/p3.jpg",
  },
];
