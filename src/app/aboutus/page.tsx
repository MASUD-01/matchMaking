import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Link className="text-center p-3 border rounded-lg mt-10" href="/">
          Back
        </Link>
      </div>

      <div className="mx-2 sm:mx-32 sm:flex  mt-32 gap-x-6  sm:gap-y-0">
        <Image
          src="/couplesss.jpg"
          className="rounded-md"
          height={350}
          width={450}
          alt="couples"
        />

        <div className="flex flex-col gap-y-4 h-full mt-5 sm:mt-0">
          <p className=" text-3xl sm:text-5xl font-bold tracking-widest">
            {" "}
            About MatchMaking
          </p>
          <p className="text-xl">
            MatchMaking.com is the No.1 most trusted matrimony site for
            Bangladeshi brides and grooms. Lakhs of members have successfully
            found their life partners here! Browse through our vast selection of
            profiles from all major sects such as Sunnis, Shia, Deobandi,
            Barelvi, Dawoodi Bohra, etc. You can also find profiles that belong
            to Muslim, Buddhist, Hindu, Christian and other communities.
            Register for FREE and find your perfect soulmate on
            BangladeshiMatrimony...
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
