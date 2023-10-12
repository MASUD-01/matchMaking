"use client";
import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Photos from "./Photos";
import PhotSettings from "./PhotoSettings";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Photo Album",
    children: <Photos />,
  },
  {
    key: "2",
    label: "Settings",
    children: <PhotSettings />,
  },
  {
    key: "3",
    label: "Tab 3",
    children: "Content of Tab Pane 3",
  },
];

const MyPhotos = () => {
  return (
    <div>
      <div className="m-0 sm:mx-[600px] border px-3 mt-10">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  );
};

export default MyPhotos;
