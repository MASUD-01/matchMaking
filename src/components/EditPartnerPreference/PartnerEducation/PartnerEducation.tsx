import React from "react";
import { Collapse } from "antd";
import Education from "./Education";
import WorkingAs from "./WorkingAs";
import Profession from "./Profession";
import Income from "./Income";

const { Panel } = Collapse;

function callback(key: any) {
  console.log(key);
}

const PartnerEducation = () => {
  return (
    <div>
      <Collapse defaultActiveKey={["1"]} onChange={callback}>
        <Panel header="Qualification" key="1">
          <Education />
        </Panel>
        <Panel header="Working As" key="2">
          <WorkingAs />
        </Panel>
        <Panel header="Profession" key="3">
          <Profession />
        </Panel>
        <Panel header="Annual Income" key="4">
          <Income />
        </Panel>
      </Collapse>
    </div>
  );
};

export default PartnerEducation;
