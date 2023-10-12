import Link from "next/link";
import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoGameControllerSharp } from "react-icons/io5";

const Hobbies = () => {
  return (
    <div>
      <div>
        <div className="flex flex-row justify-between border-b-4 pb-3 mb-3">
          <span className="font-bold">Hobbies</span>
          <div>
            {/* <button>
              <Link href="/editMyProfile">
                <AiFillEdit />
              </Link>
            </button> */}
          </div>
        </div>
        <div>
          <div className="flex flex-row items-center mt-3 gap-3">
            {/* div for left side */}
            <div className="border-2 rounded-lg px-7 py-2">
              <IoGameControllerSharp />
            </div>
            <div className="border-2 rounded-lg px-7 py-2">
              <IoGameControllerSharp />
            </div>
            <div className="border-2 rounded-lg px-7 py-2">
              <IoGameControllerSharp />
            </div>
          </div>
          {/* div for right side */}
          {/* <div>
            <div>
              <span className="mr-9">Working With</span>
              <span>:</span>
              <span>Private Company</span>
            </div>
            <div>
              <span className="mr-16">Working As</span>
              <span>:</span>
              <span>Banking Professional</span>
            </div>
            <div>
              <span className="mr-5">Employer Name</span>
              <span>:</span>
              <span>A Credit Academy</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
