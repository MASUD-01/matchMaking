"use client";

import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import type { CSSProperties } from "react";
import type { CollapseProps } from "antd";
import { Collapse, Divider, theme } from "antd";
import Account from "./Account";
import EmailAlerts from "./EmailAlerts";
import Match360Live from "./Match360Live";
import HidedeleteProfile from "./HidedeleteProfile";
import Messages from "./Messages";
import ContactFilters from "./ContractFilters";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const SettingPage = () => {
  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    // background: token.colorFillAlter,
    // borderRadius: token.borderRadiusLG,
    // border: 'none',
    // borderBottomColor: '#FF44CB',
  };
  return (
    <div>
      <div className="mx-96 mt-5">
        <Collapse
          bordered={false}
          accordion
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          style={{ background: "white" }}
          items={[
            {
              key: "1",
              label: <p className="text-base font-bold">Account Setting</p>,
              children: <Account />,
              style: panelStyle,
            },
            {
              key: "2",
              label: <p className="text-base font-bold">Contact Filters</p>,
              children: <ContactFilters />,
              style: panelStyle,
            },
            {
              key: "3",
              label: <p className="text-base font-bold">Email /SMS Alerts</p>,
              children: <EmailAlerts />,
              style: panelStyle,
            },
            {
              key: "4",
              label: <p className="text-base font-bold">Match360 Live</p>,
              children: <Match360Live />,
              style: panelStyle,
            },
            {
              key: "5",
              label: (
                <p className="text-base font-bold">Hide / Delete Profile</p>
              ),
              children: <HidedeleteProfile />,
              style: panelStyle,
            },
            {
              key: "6",
              label: <p className="text-base font-bold">Messages</p>,
              children: <Messages />,
              style: panelStyle,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default SettingPage;
