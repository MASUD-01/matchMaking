import Link from "next/link";
import React from "react";

const NavButton = () => {
  return (
    <div className="border-y-4 py-4">
      <div className="flex justify-center gap-4 ">
        <button className="border px-5 py-3 rounded-t-lg bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 shadow-lg">
          <Link href="#basic">
            <span>My Profile</span>
          </Link>
        </button>
        <button className="border px-5 py-3 rounded-t-lg bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 shadow-lg">
          <Link href="#partnerPerference">
            <span>Partner Preferences</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NavButton;
