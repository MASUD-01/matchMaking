import { UserOutlined } from "@ant-design/icons";
import { Avatar, Badge } from "antd";
import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { MdWorkspacePremium } from "react-icons/md";

type Props = {
  title: string;
};
const MyMatches = ({ title }: Props) => {
  return (
    <div>
      <div className="my-5 flex justify-center">
        <Badge count={99}>
          <h2 className="py-2 text-center font-bold">{title}</h2>
        </Badge>
      </div>

      <div className="">
        {recentVisitors.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-2 border-b-2 flex gap-x-2 items-center"
          >
            <Avatar size={50} icon={<UserOutlined />} />
            <div className="flex-1">
              <div className="flex">
                <p className="text-sm mr-3">{item.name} </p>
                <span>
                  {item.premium ? (
                    <MdWorkspacePremium
                      style={{ color: "green", fontSize: "23px" }}
                    />
                  ) : (
                    ""
                  )}
                </span>
              </div>

              <p className="text-xs">{item.des}</p>
            </div>
            <div className="">
              <button className="">
                <BsCheck2Circle style={{ fontSize: "40px" }} />
              </button>
            </div>
          </div>
        ))}
        <div className="bg-white text-center p-2">
          <button>View all</button>
        </div>
      </div>
    </div>
  );
};

export default MyMatches;
const recentVisitors = [
  {
    image: <Avatar shape="square" size={64} icon={<UserOutlined />} />,
    name: "Sohana khatun",
    des: "20 yrs, 5, Bengali Dhaka",
    connect: "Connect Now",
    premium: "yes",
  },
  {
    image: <Avatar shape="square" size={64} icon={<UserOutlined />} />,
    name: "Sohana khatun",
    des: "20 yrs, 5, Bengali Dhaka",
    connect: "Connect Now",
    premium: "yes",
  },
  {
    image: <Avatar shape="square" size={64} icon={<UserOutlined />} />,
    name: "Sohana khatun",
    des: "20 yrs, 5, Bengali Dhaka",
    connect: "Connect Now",
  },
  {
    image: <Avatar shape="square" size={64} icon={<UserOutlined />} />,
    name: "Sohana khatun",
    des: "20 yrs, 5, Bengali Dhaka",
    connect: "Connect Now",
  },
  {
    image: <Avatar shape="square" size={64} icon={<UserOutlined />} />,
    name: "Sohana khatun",
    des: "20 yrs, 5, Bengali Dhaka",
    connect: "Connect Now",
    premium: "yes",
  },
];
