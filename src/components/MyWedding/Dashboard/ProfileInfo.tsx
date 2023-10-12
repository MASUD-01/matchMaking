"use client";

import { useState } from "react";
import { Avatar, Card } from "antd";
import Image from "next/image";
import { MdDeleteForever, MdOutlineVerified } from "react-icons/md";
import { UserOutlined } from "@ant-design/icons";
import MyMatches from "./MyMatches";
const ProfileInfo = () => {
  const [file, setFile] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  }

  function handleRemove() {
    setFile(null);
  }

  return (
    <div className="mx-32 mt-5 ">
      <Card bordered className="w-80 flex flex-col justify-center items-center">
        <div className="w-80 flex flex-col justify-center items-center">
          <div className="mb-5 bg-slate-400 rounded-full ">
            {file ? (
              <div
                className="w-[164px] h-[164px] rounded-full relative group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Image
                  src={file}
                  alt="Preview"
                  width={164}
                  height={300}
                  style={{ height: "164px" }}
                  className="rounded-full"
                />
                {isHovered && (
                  <button
                    onClick={handleRemove}
                    style={{
                      position: "absolute",
                      top: "50%", // Center vertically
                      left: "50%",
                      transform: "translate(-50%, -50%)", // Center horizontally
                    }}
                    className="group-hover:text-white group-hover:bg-slate-500 p-3 rounded-full "
                  >
                    <MdDeleteForever style={{ fontSize: "25px" }} />
                  </button>
                )}
              </div>
            ) : (
              <Avatar size={164} icon={<UserOutlined />} />
            )}
          </div>
          <div className="">
            <label className="relative cursor-pointer flex justify-center">
              <input type="file" onChange={handleChange} className="hidden" />
              <span className="border text-[#FF45CC] font-bold border-[#FF45CC] text-xs py-2 px-4 rounded-full">
                Add Image
              </span>
            </label>
          </div>
        </div>
        <div className="p-4 flex flex-col gap-y-2">
          <div className="flex items-center">
            <div className="flex-1">
              <p className="text-xl font-bold">Md. Masud Rana</p>
              <p>SH07775851</p>
            </div>
            <div className="font-bold">Edit</div>
          </div>

          <div className="border-b"></div>
          <div className="w-full">
            <p className="text-center">Account Type</p>
            <div className="flex">
              <p className="font-bold flex-1">Free Membership</p>
              <p className="font-bold text-sm">Upgrade</p>
            </div>
          </div>
          <div className="border-b"></div>
          <div className="flex items-center">
            <div className="flex-1">
              <p>Mobile no. is verified</p>
              <p className="text-green-500 font-bold">Verify your ID</p>
            </div>

            <div>
              <MdOutlineVerified style={{ fontSize: "30px" }} />
            </div>
          </div>
        </div>
      </Card>
      {/* ----------------myMatches------------------- */}
      <MyMatches title="My Match" />
      <MyMatches title="Members you may like" />
    </div>
  );
};

export default ProfileInfo;
