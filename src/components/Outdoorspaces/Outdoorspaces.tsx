"use client";
import { Pagination } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const Outdoorspaces = () => {
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
        94 Wedding Venues in Bangladesh
      </p>
      <div className=" sm:flex gap-x-5 justify-center sm:mx-32">
        {OutdoorspacesList.slice(0, page).map((item, index) => (
          <div
            key={index}
            className="w-[310px] mx-auto mt-6 sm:mt-0 p-2 border hover:shadow-lg"
          >
            <Link href={`/outdoorspaces/${item.id}`} className="">
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
          total={OutdoorspacesList.length}
          onChange={pageChange}
        />
      </div>
    </div>
  );
};

export default Outdoorspaces;

export const OutdoorspacesList = [
  {
    id: 1,
    title: "Midtown Loft and Terrace",
    price: "BDT 20000-40000",
    des: "Located in New York City, NY, Sixty Pine Street is the newest location by Masterpiece Caterers. It replaced One Hanover Square after loosing the property during the pandemic. Sixty Pine Street is a historic estate and ballroom venue for weddings and other milestone occasions. This venue's team invites you to select the renovated elegance of this facility as the setting of your special celebration. You and your loved ones may savor a truly remarkable event in this exquisite local Sixty Pine has a history of more than 160 years, a landmark building situated in NYC's Financial District. With four levels and 11 event spaces, this facility is ready for intimate gatherings and gala extravaganzas alike. To-be-weds may relax and prepare in a get-ready room, and wedding parties may enjoy a beverage at the bar and lounge. The convenience and comfort of all guests are important to this venue's team. This building includes air-conditioning, wheelchair-accessible features, an elevator, and wireless internet. The Masterpiece Caterers team has experience in providing full-service catering and other event services for wedding celebrations. These professionals will happily prepare a ceremony and reception for groups of between 20 and 300 guests. The venue team offers all-inclusive packages and on-site catering, bartending, planning, service staff, and cake. You and your guests may tuck into hors d'oeuvres and meals from buffets, family-style platters, chef stations, plated dinners, and more. This team can provide trained bartenders to pour your beverages, with options for a limited or open bar. Additionally, Sixty Pine Street hosts elopements, civil unions, commitment ceremonies, vow renewals, and second weddings. This is a venue where your special celebration can come to life.",
    rating: 4.5,
    src: "/o1.jpg",
  },
  {
    id: 2,
    title: "Ravel Hotel/The Penthouse",
    price: "BDT 23000-50000",
    des: "Located in New York City, Midtown Loft & Terrace is a wedding venue where couples can swap vows against the backdrop of the Empire State Building. This elegant locale in Manhattan is an urban retreat offering two spaces for celebrations. With an elevated ambience, the venue’s design easily complements a variety of wedding themes, creating a sense of sophistication for a couple's soiree.The staff at Midtown Loft & Terrace are dedicated to helping a future newlywed pair achieve their dream day. With a focus on high standards of customer service, they carefully attend to each detail with thought and precision. Their devotion to the details is something they take pride in, and they are enthusiastic about curating unforgettable fetes. All of this takes place in a prime location, with the iconic Manhattan skyline enveloping the venue. Landmarks such as the Marble Collegiate Church and stunning skyscrapers, provide a picture-worthy setting for festivities.There are two spaces that may be used for events here. The first is Midtown Loft, which spans 5,000 square feet. Up to 300 people can enjoy a cocktail reception here, or 180 attendees for a sit-down dinner. It features a kitchen, climate control, and marble bathrooms. The high ceilings and sizable windows help infuse the space with energy while affording couples and their loved ones views of the surrounding area. Natural light fills the room, which highlights the gorgeous oak flooring. This versatile loft can suit a variety of wedding visions and related events. The venue also offers an open-air option, Midtown Terrace, which is fitting for gatherings of up to 150 guests. Its retractable rooftop makes it a year-round possibility and it has its own lobby and private elevator. For a timeless touch, the Terrace features a carved stone railing in white. Both the Loft and Terrace can help set the stage for a wedding to remember.",
    rating: 4.2,
    src: "/o2.jpg",
  },
  {
    id: 3,
    title: "Sixty Pine Street",
    price: "BDT 15000-50000",
    des: "Located in New York City, Midtown Loft & Terrace is a wedding venue where couples can swap vows against the backdrop of the Empire State Building. This elegant locale in Manhattan is an urban retreat offering two spaces for celebrations. With an elevated ambience, the venue’s design easily complements a variety of wedding themes, creating a sense of sophistication for a couple's soiree.The staff at Midtown Loft & Terrace are dedicated to helping a future newlywed pair achieve their dream day. With a focus on high standards of customer service, they carefully attend to each detail with thought and precision. Their devotion to the details is something they take pride in, and they are enthusiastic about curating unforgettable fetes. All of this takes place in a prime location, with the iconic Manhattan skyline enveloping the venue. Landmarks such as the Marble Collegiate Church and stunning skyscrapers, provide a picture-worthy setting for festivities.There are two spaces that may be used for events here. The first is Midtown Loft, which spans 5,000 square feet. Up to 300 people can enjoy a cocktail reception here, or 180 attendees for a sit-down dinner. It features a kitchen, climate control, and marble bathrooms. The high ceilings and sizable windows help infuse the space with energy while affording couples and their loved ones views of the surrounding area. Natural light fills the room, which highlights the gorgeous oak flooring. This versatile loft can suit a variety of wedding visions and related events. The venue also offers an open-air option, Midtown Terrace, which is fitting for gatherings of up to 150 guests. Its retractable rooftop makes it a year-round possibility and it has its own lobby and private elevator. For a timeless touch, the Terrace features a carved stone railing in white. Both the Loft and Terrace can help set the stage for a wedding to remember.",
    rating: 4.8,
    src: "/o3.jpg",
  },
];
