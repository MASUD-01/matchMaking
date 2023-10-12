import { TreeSelect } from "antd";
import { useState } from "react";

const { SHOW_PARENT } = TreeSelect;

const treeData = [
  {
    title: "Select All",
    value: "0-1",
    key: "0-1",
    children: [
      {
        title: "Private Company",
        value: "0-1-0",
        key: "0-1-0",
      },
      {
        title: "Government / Public Sector",
        value: "0-1-1",
        key: "0-1-1",
      },
      {
        title: "Defense / Civil Services",
        value: "0-1-2",
        key: "0-1-2",
      },
      {
        title: "Business / Self Employed",
        value: "0-1-3",
        key: "0-1-3",
      },
      {
        title: "Non Working",
        value: "0-1-4",
        key: "0-1-4",
      },
    ],
  },
];

const WorkingAs = () => {
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
      width: "100%",
    },
  };
  return (
    <div>
      <TreeSelect {...tProps} />
    </div>
  );
};

export default WorkingAs;
