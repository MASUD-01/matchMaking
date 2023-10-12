"use client";
import React, { useState } from "react";
import PartnerBasicInfo from "./PartnerBasicInfo/PartnerBasicInfo";
import PartnerEducation from "./PartnerEducation/PartnerEducation";
import PartnerLocation from "./PartnerLocation/PartnerLocation";
import PartnerOther from "./PartnerOther/PartnerOther";
import { Button } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";

const EditPartnerPreference = () => {
  const [size, setSize] = useState<SizeType>("large");
  return (
    <div className="bg-[#FFF5ED]">
      <div className="m-0 sm:mx-[500px]">
        <div className="text-center font-bold text-xl pb-1 pt-9">
          <h1>Partners Peference</h1>
        </div>
        <div>
          <h2 className="my-3 mt-6 font-semibold">Basic Info</h2>
          <PartnerBasicInfo />
        </div>
        <div>
          <h2 className="my-3 mt-6 font-semibold">Education & Career Info</h2>
          <PartnerEducation />
        </div>
        <div>
          <h2 className="my-3 mt-6 font-semibold">Location Info</h2>
          <PartnerLocation />
        </div>
        <div>
          <h2 className="my-3 mt-6 font-semibold">Other Basic Info</h2>
          <PartnerOther />
        </div>
        <div className="text-center mt-6 pb-6">
          <Button
            type="primary"
            shape="round"
            // icon={<DownloadOutlined />}
            size={size}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditPartnerPreference;
