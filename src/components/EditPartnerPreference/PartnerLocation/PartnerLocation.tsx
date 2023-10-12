import React from "react";
import { Collapse } from "antd";
import PartnerCountry from "./PartnerCountry";
import PartnerState from "./PartnerState";
import PartnerCity from "./PartnerCity";

const { Panel } = Collapse;

function callback(key: any) {
  console.log(key);
}

const PartnerLocation = () => {
  return (
    <div>
      <Collapse defaultActiveKey={["1"]} onChange={callback}>
        <Panel header="Country living in" key="1">
          <PartnerCountry />
        </Panel>
        <Panel header="State living in" key="2">
          <PartnerState />
        </Panel>
        <Panel header="City / District" key="3">
          <PartnerCity />
        </Panel>
      </Collapse>
    </div>
  );
};

export default PartnerLocation;
