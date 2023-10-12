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
        title: "Dhaka",
        value: "0-0-0",
        key: "0-0-0",
      },
      {
        title: "Barishal",
        value: "0-0-1",
        key: "0-0-1",
      },
      {
        title: "Chittagong",
        value: "0-0-2",
        key: "0-0-2",
      },
      {
        title: "Khulna",
        value: "0-0-3",
        key: "0-0-3",
      },
      {
        title: "Rajshahi",
        value: "0-0-4",
        key: "0-0-4",
      },
      {
        title: "Rangpur",
        value: "0-0-5",
        key: "0-0-5",
      },

      {
        title: "Sylhet",
        value: "0-0-6",
        key: "0-0-6",
      },
    ],
  },
];

const PartnerState = () => {
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

export default PartnerState;
