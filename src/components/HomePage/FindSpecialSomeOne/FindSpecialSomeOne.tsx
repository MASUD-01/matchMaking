import { fonts } from "@/app/fonts";
import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { ImManWoman } from "react-icons/im";
import { FaFileVideo } from "react-icons/fa";
import {
  TbRosetteNumber1,
  TbRosetteNumber2,
  TbRosetteNumber3,
} from "react-icons/tb";
const FindSpecialSomeOne = () => {
  return (
    <>
      <div>
        <div className="text-center text-5xl tracking-normal mb-10">
          <h1 className={fonts.roboto.className}>
            <span className="text-[#EC445A]">D</span>iscover your Perfect match
          </h1>
        </div>
        {/* ---------------logo------------------------ */}
        <div className="bg-[#F6F5DA] md:bg-[#eb6173] p-y-2 mt-0 sm:mt-24">
          <div className="flex mt-4 justify-center  items-center h-full gap-x-60 gap-y-3 flex-wrap">
            {/* --------------1-------------------------- */}
            <div className="mb-24 sm:mb-0">
              <div className="bg-[#F0F8FF] relative  rounded-full shadow-lg h-36 w-36 flex justify-center items-center">
                <div className="border border-[#eb789e] rounded-md p-1">
                  <AiFillEdit style={{ fontSize: "50px", color: "#EC445A" }} />
                </div>

                <div className="absolute bottom-[-15px]">
                  <TbRosetteNumber1
                    style={{ fontSize: "40px", color: "#EC445A" }}
                  />
                </div>
                <div className="absolute bottom-[-85px] z-20">
                  <div className="w-80 text-center ">
                    <p>Sign Up</p>
                    <p>Sign up for free to connect with potential matches.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* --------------2------------------------- */}
            <div className="mb-24 sm:mb-0">
              <div className="bg-[#F0F8FF] relative  rounded-full shadow-lg h-36 w-36 flex justify-center items-center">
                <div className="border border-[#eb789e] rounded-md p-1">
                  <ImManWoman style={{ fontSize: "50px", color: "#EC445A" }} />
                </div>

                <div className="absolute bottom-[-15px]">
                  <TbRosetteNumber2
                    style={{ fontSize: "40px", color: "#EC445A" }}
                  />
                </div>
                <div className="absolute bottom-[-85px]">
                  <div className="w-80 text-center">
                    <p>Connect</p>
                    <p>
                      Pick your preferred matches and initiate a connection with
                      them.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* --------------3------------------------- */}
            <div className="mb-32 sm:mb-0">
              <div className="bg-[#F0F8FF] relative  rounded-full shadow-lg h-36 w-36 flex justify-center items-center">
                <div className="border border-[#eb789e] rounded-md p-1">
                  <FaFileVideo style={{ fontSize: "50px", color: "#EC445A" }} />
                </div>

                <div className="absolute bottom-[-15px]">
                  <TbRosetteNumber3
                    style={{ fontSize: "40px", color: "#EC445A" }}
                  />
                </div>
                <div className="absolute bottom-[-85px]">
                  <div className="w-80 text-center">
                    <p>
                      <button> Interact </button>{" "}
                    </p>
                    <p>
                      Elevate your status to Premium and open the door to start
                      chatting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindSpecialSomeOne;
