"use client";
import { Tabs, TabsProps } from "antd";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
const MyMatch = () => {
  // const renderTabBar: TabsProps['renderTabBar'] = (props, DefaultTabBar) => (
  //     <StickyBox offsetTop={0} offsetBottom={20} style={{ zIndex: 1 }}>
  //       <DefaultTabBar {...props} style={{ background: colorBgContainer }} />
  //     </StickyBox>
  //   );

  const items = new Array(3).fill(null).map((_, i) => {
    const id = String(i + 1);
    return {
      label: <Link href={"matches"}>Tab ${1}</Link>,
      key: id,
      // children: `Content of Tab Pane ${id}`,
      style: i === 0 ? { height: 200 } : undefined,
    };
  });
  const itemss = [
    {
      label: <Link href={"/myMatch"}>match ${1}</Link>,
      key: "1",
      children: "fghf",
      style: 0 === 0 ? { height: 200 } : undefined,
    },
    {
      label: <Link href={"/matches"}>matches ${2}</Link>,
      key: "2",
      children: `Content of Tab Pane `,
      style: 1 === 1 ? { height: 600 } : undefined,
    },
    {
      label: <Link href={"/search"}>search ${2}</Link>,
      key: "3",
      // children: `Content of Tab Pane ${id}`,
      style: 0 === 0 ? { height: 600 } : undefined,
    },
  ];
  return (
    <div className="flex justify-center items-center bg-orange-200">
      <Tabs
        defaultActiveKey="1"
        className="bg-red-300 w-11/12"
        /* renderTabBar={renderTabBar} */ items={itemss}
      />
    </div>
  );
};

export default MyMatch;
