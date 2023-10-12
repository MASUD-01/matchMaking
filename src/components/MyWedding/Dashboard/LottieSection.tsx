"use client";
import Lottie from "lottie-react";
import React from "react";
import groovyWalkAnimation from "../../../../animation.json";
const LottieSection = () => {
  return (
    <div className="border bg-white h-full sm:flex max-w-[890px] mt-5">
      <div className="basis-3/5 flex justify-center">
        <Lottie
          animationData={groovyWalkAnimation}
          loop={true}
          style={{ width: "200px", height: "200px" }}
        />
      </div>
      <div className="flex flex-col items-center justify-center  gap-y-3">
        <p className="text-2xl font-bold text-center">
          Your profile is how matches perceive you. Thank you for enhancing it
        </p>
        <p className="text-center">Go ahead, check out your Matches</p>
        <div className="flex justify-center">
          <button className="border text-[#FF45CC] font-bold  text-xs border-[#FF45CC] rounded-full p-2 shadow-2xl">
            {" "}
            See Todays Matches
          </button>
        </div>
      </div>
    </div>
  );
};

export default LottieSection;
