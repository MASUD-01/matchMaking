import React from "react";
import { FaCrown } from "react-icons/fa";

const Messages = () => {
  return (
    <div>
      <p className="text-2xl mb-4">
        Messages for Connects, Accepts and Reminders
      </p>
      <div className="border h-full pl-20 pt-5 rounded-md p-6 flex flex-col gap-y-4">
        <div className="flex items-center border rounded-lg p-4">
          <div className="flex-1">
            <p className="text-xl font-bold">Connect Message</p>
            <p className="text-lg">
              This Message is sent to Members that you send Connect Request to
            </p>
            <p className="text-sm font-bold">
              Hi, what do you like to do in your free time? Let&apos;s chat and
              get to know each other.
            </p>
          </div>

          <div className="mt-3  gap-x-3">
            <button className="px-3 p-y-2 font-bold text-[#FF44CB]  rounded-full text-lg hover:shadow-xl">
              Change
            </button>
          </div>
        </div>
        <div className="flex items-center border rounded-lg p-4">
          <div className="flex-1">
            <p className="text-xl font-bold flex items-center gap-x-4">
              Message on Accept{" "}
              <span className="flex gap-x-1 border border-[#FF44CB] rounded-full p-1">
                <FaCrown style={{ color: "#FFD700", fontSize: "15px" }} />{" "}
                <span className="text-xs text-[#FF44CB]"> premium only</span>
              </span>
            </p>

            <p className="text-sm font-bold">
              Hi, I like your profile too. Would like to get in touch to take
              this forward. You can contact me on +880-17862..47. I’ll be
              waiting 😊
            </p>
          </div>

          <div className="mt-3  gap-x-3">
            <button className="px-3 p-y-2 font-bold text-[#FF44CB]  rounded-full text-lg hover:shadow-xl">
              Upgrade Now
            </button>
          </div>
        </div>
        <div className="flex items-center border rounded-lg p-4">
          <div className="flex-1">
            <p className="text-xl font-bold flex items-center gap-x-4">
              Message on Remind{" "}
              <span className="flex gap-x-1 border border-[#FF44CB] rounded-full p-1">
                <FaCrown style={{ color: "#FFD700", fontSize: "15px" }} />{" "}
                <span className="text-xs text-[#FF44CB]"> premium only</span>
              </span>
            </p>

            <p className="text-sm font-bold">
              Hi there! Just wanted to remind you that I eagerly awaiting your
              response. Please accept if you like my profile. Thanks!
            </p>
          </div>

          <div className="mt-3  gap-x-3">
            <button className="px-3 p-y-2 font-bold text-[#FF44CB]  rounded-full text-lg hover:shadow-xl">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
