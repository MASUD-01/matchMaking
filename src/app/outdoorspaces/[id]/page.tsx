"use client";
import { OutdoorspacesList } from "@/components/Outdoorspaces/Outdoorspaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const page = ({ params }: { params: { id: number } }) => {
  const item = OutdoorspacesList[params.id - 1];

  return (
    <div>
      <div className="flex justify-center">
        <Link
          className="text-center p-3 border rounded-lg mt-10"
          href="/outdoorspaces"
        >
          Back
        </Link>
      </div>
      <div className="sm:flex gap-x-5 justify-center">
        <div className="mx-auto mt-6 w-[865px] sm:mt-0 p-2 border hover:shadow-lg">
          <Image
            src={item.src}
            className="rounded-md"
            height={300}
            width={865}
            alt="images"
          />
          <p className="flex justify-between py-1">
            <span></span>
            <span className="flex">
              <AiFillStar className="text-amber-400 text-bold" />{" "}
              <span className="text-xs">{item.rating}</span>
            </span>
          </p>
          <p className="text-2xl font-bold">{item.title}</p>
          <p>{item.price}</p>
          <div className="border-b-2 border my-5"></div>
          <p className="text-2xl font-bold underline">About this Vanues :</p>
          <p className="text-xl font-bold">Your Moments. Forever.</p>
          <p>{item.des}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
