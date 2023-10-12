import React from "react";
import { BsTriangleFill } from "react-icons/bs";

const ActivitySummary = () => {
  return (
    <div className="pt-4 flex flex-col gap-y-3 max-w-[890px]">
      <p className="text-center ">Your Activity Summary</p>
      <div className="flex flex-wrap gap-x-3 gap-y-10">
        <div className="w-72 bg-white h-20 rounded-lg p-1 shadow-lg">
          <p className="text-2xl font-bold text-center mb-2 text-[#615d5a]">
            56
          </p>
          <p className="text-2xl font-semibold text-center text-[#b4b1ae]">
            No Pending Invitations
          </p>
        </div>
        <div className="w-72 bg-white h-20 rounded-lg p-1 shadow-lg">
          <p className="text-2xl font-bold text-center mb-2 text-[#615d5a]">
            56
          </p>
          <p className="text-2xl font-semibold text-center text-[#b4b1ae]">
            No Accepted Invitations
          </p>
        </div>

        <div className="w-72 bg-white h-20 rounded-lg shadow-lg">
          <p className="text-2xl font-bold text-center mb-2 text-[#615d5a]">
            06 <span className="text-xs rounded-md border p-1">03 new</span>
          </p>
          <p className="text-2xl text-center font-semibold text-[#b4b1ae]">
            Recent Visitors
          </p>
        </div>
        <div className="w-[280px] bg-white h-20 rounded-lg shadow-lg relative flex items-center">
          <p className="text-sm text-center">
            Only <span className="font-light text-sm">Premium</span> Members can
            avail these benefits
          </p>
          <div className="absolute right-[-23px] rotate-90 top-[30px]">
            <BsTriangleFill
              style={{
                color: "white",
                fontSize: "30px",
              }}
            />
          </div>
        </div>
        <div className="w-[300px] ml-3 bg-white h-20 rounded-lg shadow-lg relative">
          <div>
            <p className="text-2xl font-bold text-center mb-2 text-[#615d5a]">
              06{" "}
            </p>
            <p className="text-2xl text-center font-semibold text-[#b4b1ae]">
              Contact viewed
            </p>
          </div>

          <div className="absolute right-[-23px] rotate-90 top-[30px]">
            <BsTriangleFill
              style={{
                color: "white",
                fontSize: "30px",
              }}
            />
          </div>
        </div>
        <div className="w-[260px] ml-3 bg-white h-20 rounded-lg shadow-lg relative">
          <div>
            <p className="text-2xl font-bold text-center mb-2 text-[#615d5a]">
              06{" "}
            </p>
            <p className="text-2xl text-center font-semibold text-[#b4b1ae]">
              Chats initiated
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitySummary;
