"use client";
import React from "react";

import { SettingOutlined, DownloadOutlined } from "@ant-design/icons";
import { useState } from "react";
import type { CollapseProps } from "antd";
import { Collapse, Select, Button } from "antd";

import EditBasic from "./EditBasicLifestyles/EditBasic";
import EditFamily from "./EditFamily/EditFamily";
import EditEducationCareer from "./EditEducationCareer/EditEducationCareer";
import EditLocation from "./EditLocation/EditLocation";
import EditAboutMyself from "./EditAboutMyself/EditAboutMyself";
import EditReligionAgain from "./EditReligion/EditReligion";
const { Option } = Select;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

type ExpandIconPosition = "start" | "end";

const EditMyProfile: React.FC = () => {
  const [expandIconPosition, setExpandIconPosition] =
    useState<ExpandIconPosition>("start");

  const onPositionChange = (newExpandIconPosition: ExpandIconPosition) => {
    setExpandIconPosition(newExpandIconPosition);
  };

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const genExtra = () => (
    <SettingOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <span className="text-lg font-bold text-white">
          Edit Basics & Lifestyle
        </span>
      ),
      children: (
        <div>
          <EditBasic />
          {/* <EditBasicLifestyles /> */}
        </div>
      ),
      extra: genExtra(),
    },
    {
      key: "2",
      label: (
        <span className="text-lg font-bold text-white">Religion info</span>
      ),
      children: (
        <div>
          <EditReligionAgain />
        </div>
      ),
      extra: genExtra(),
    },
    {
      key: "3",
      label: <span className="text-lg font-bold text-white">Family info</span>,
      children: (
        <div>
          <EditFamily />
        </div>
      ),
      extra: genExtra(),
    },
    {
      key: "4",
      label: (
        <span className="text-lg font-bold text-white">Education & Career</span>
      ),
      children: (
        <div>
          <EditEducationCareer />
        </div>
      ),
      extra: genExtra(),
    },
    {
      key: "5",
      label: <span className="text-lg font-bold text-white">Location</span>,
      children: (
        <div>
          <EditLocation />
        </div>
      ),
      extra: genExtra(),
    },
    {
      key: "6",
      label: (
        <span className="text-lg font-bold text-white">
          About Myself & Partner Expectations
        </span>
      ),
      children: (
        <div>
          <EditAboutMyself />
        </div>
      ),
      extra: genExtra(),
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="w-[1000px] mx-36 mt-5">
        <Collapse
          defaultActiveKey={["1"]}
          onChange={onChange}
          expandIconPosition={expandIconPosition}
          items={items}
          className="shadow-md"
        />
        <div className="flex justify-center w-full mb-6 ">
          <Button type="primary" shape="round" size={"large"} className="mt-3 ">
            Submit
          </Button>
        </div>
      </div>

      <br />
    </div>
  );
};

// const EditMyProfile = () => {
//   return <div>zxzxz</div>;
// };

export default EditMyProfile;
