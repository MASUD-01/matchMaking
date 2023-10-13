"use client";
import { Tabs } from "antd";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  // Determine the default active key based on the current route
  const defaultActiveKey = () => {
    if (pathname === "/mywedding") {
      return "1";
    } else if (pathname === "/matches") {
      return "2";
    } else if (pathname === "/search") {
      return "3";
    } else if (pathname === "/inbox") {
      return "4";
    }
    return "1"; // Default to "My shaadi" if the route is not recognized
  };
  return (
    <div className="bg-[#fff5ed] h-screen">
      <div className="sm:flex justify-between items-center bg-[#ff44cb] sm:h-14 border border-b-stone-500 sticky top-0 z-50">
        <Link href={"/"}>
          <div className="flex-1 text-center sm:text-start">
            <span className="sm:ml-20 text-2xl text-white">MatchMaking</span>
          </div>
        </Link>

        <div className="flex-1 flex justify-center">
          <Tabs
            defaultActiveKey={defaultActiveKey()}
            style={{ maxWidth: "450px" }}
            items={[
              {
                label: (
                  <Link
                    href={"/mywedding"}
                    className="text-white hover:text-white sm:text-xl font-extrabold"
                  >
                    My Wedding
                  </Link>
                ),
                key: "1",
              },
              {
                label: (
                  <Link
                    href={"/matches"}
                    className="text-white font-extrabold hover:text-slate-100 sm:text-xl"
                  >
                    Matches
                  </Link>
                ),
                key: "2",
              },
              {
                label: (
                  <Link
                    href={"/matches"}
                    className="text-white font-extrabold hover:text-slate-100 sm:text-xl"
                  >
                    Search
                  </Link>
                ),
                key: "3",
              },
              {
                label: (
                  <Link
                    href={""}
                    className="text-white font-extrabold hover:text-slate-100 sm:text-xl"
                  >
                    Inbox
                  </Link>
                ),
                key: "4",
              },
            ]}
          />
        </div>

        <div className="flex-1"></div>
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default Layout;
