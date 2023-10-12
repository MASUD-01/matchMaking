import React, { useState } from "react";
import { TreeSelect } from "antd";

const { SHOW_PARENT } = TreeSelect;

const treeData = [
  {
    title: "Select All",
    value: "0-0",
    key: "0-0",
    children: [
      {
        title: "2k to 5k (USD)",
        value: "0-0-0",
        key: "0-0-0",
      },
      {
        title: "5k to 10k (USD)",
        value: "0-0-1",
        key: "0-0-1",
      },
      {
        title: "10k to 15k (USD)",
        value: "0-0-2",
        key: "0-0-2",
      },
      {
        title: "15k to 20k (USD)",
        value: "0-0-3",
        key: "0-0-3",
      },
    ],
  },
];

const Income = () => {
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

export default Income;
