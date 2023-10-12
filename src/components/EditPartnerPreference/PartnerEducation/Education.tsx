import React, { useState } from "react";
import { TreeSelect } from "antd";

const { SHOW_PARENT } = TreeSelect;

const treeData = [
  {
    title: "Bachelor",
    value: "0-0",
    key: "0-0",
    children: [
      {
        title: "Compute Science",
        value: "0-0-0",
        key: "0-0-0",
      },
      {
        title: "IEEE",
        value: "0-0-1",
        key: "0-0-1",
      },
      {
        title: "BBA",
        value: "0-0-2",
        key: "0-0-2",
      },
      {
        title: "BA",
        value: "0-0-3",
        key: "0-0-3",
      },
    ],
  },
  {
    title: "Master's Degree",
    value: "0-1",
    key: "0-1",
    children: [
      {
        title: "MSC",
        value: "0-1-0",
        key: "0-1-0",
      },
      {
        title: "MBA",
        value: "0-1-1",
        key: "0-1-1",
      },
      {
        title: "MA",
        value: "0-1-2",
        key: "0-1-2",
      },
    ],
  },
];

const Education = () => {
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

export default Education;
