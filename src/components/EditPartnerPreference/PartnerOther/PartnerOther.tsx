import React from "react";
import { Collapse } from "antd";
import PartnerProSetBy from "./PartnerProSetBy";
import PartnerDiet from "./PartnerDiet";

const { Panel } = Collapse;

function callback(key: any) {
  console.log(key);
}

const PartnerOther = () => {
  return (
    <div>
      <Collapse defaultActiveKey={["1"]} onChange={callback}>
        <Panel header="Profile Set By" key="1">
          <PartnerProSetBy />
        </Panel>
        <Panel header="Diet" key="2">
          <PartnerDiet />
        </Panel>
      </Collapse>
    </div>
  );
};

export default PartnerOther;
