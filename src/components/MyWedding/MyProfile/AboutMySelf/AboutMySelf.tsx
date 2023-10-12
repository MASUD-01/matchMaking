import React from "react";

const AboutMySelf = () => {
  return (
    <div>
      <div className="border-b-4 pb-3">
        <span className="font-bold">Basics & Lifestyle</span>
      </div>
      <div className="flex justify-between mt-3">
        <div>
          {/* div for left side */}
          <div className="flex justify-between">
            <span>Age</span>

            <span>:</span>
            <span>25 /</span>
          </div>
          <div>
            <span>Marital Status</span>
            <span>:</span>
            <span>Never Married</span>
          </div>
          <div className="flex justify-between">
            <span>Height</span>

            <span>:</span>
            <span>5</span>
          </div>
          <div className="flex justify-between">
            <span>Date of Birth</span>
            <span>:</span>
            <span>20-Apr-1998</span>
          </div>
          <div className="flex justify-between">
            <span>Grew up in</span>
            <span>:</span>
            <span>Bangladesh</span>
          </div>
        </div>
        {/* div for right side */}
        <div>
          <div className="flex justify-between">
            <span>Diet</span>
            <span>:</span>
            <span>Non-Veg</span>
          </div>
          <div className="flex justify-between">
            <span>Personal Values</span>
            <span>:</span>
            <span>Will tell you later</span>
          </div>
          <div className="flex justify-between">
            <span>Sun Sign</span>
            <span>:</span>
            <span>Aries</span>
          </div>
          <div className="flex justify-between">
            <span>Blood Group</span>
            <span>:</span>
            <span>Enter Now</span>
          </div>
          <div className="flex justify-between">
            <span>Health Information</span>
            <span>:</span>
            <span>Not Specified</span>
          </div>
          <div className="flex justify-between">
            <span>Disability</span>
            <span>:</span>
            <span>None</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMySelf;
