import React from "react";
import { Radio } from "antd";

const PhotSettings = () => {
  return (
    <div>
      <Radio.Group
        name="radiogroup"
        defaultValue={1}
        className="flex flex-col gap-3"
      >
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </Radio.Group>
    </div>
  );
};

export default PhotSettings;
