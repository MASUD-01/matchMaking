import React, { useState } from "react";
import { TreeSelect } from "antd";

const { SHOW_PARENT } = TreeSelect;

const treeData = [
  {
    title: "Open to all",
    value: "0-0",
    key: "0-0",
    children: [
      {
        title: "Bangladesh",
        value: "0-0-0",
        key: "0-0-0",
      },
      {
        title: "USA",
        value: "0-0-1",
        key: "0-0-1",
      },
      {
        title: "UK",
        value: "0-0-2",
        key: "0-0-2",
      },
      {
        title: "UAE",
        value: "0-0-3",
        key: "0-0-3",
      },
      {
        title: "India",
        value: "0-0-4",
        key: "0-0-4",
      },
    ],
  },
];

const PartnerCountry = () => {
  const [value, setValue] = useState(["0-0-0"]);

  const onChange = (newValue: string[]) => {
    console.log("onChange ", value);
    setValue(newValue);
  };

  const tProps = {
    treeData,
    value,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: "Please select",
    style: {
      width: "70%",
    },
  };
  return (
    <div>
      <TreeSelect {...tProps} />
    </div>
  );
};

export default PartnerCountry;
