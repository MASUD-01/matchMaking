"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Row, Col, Modal } from "antd";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Row
        justify={"space-between"}
        align={"middle"}
        style={{
          position: "absolute",
          paddingLeft: "200px",
          paddingRight: "200px",
          width: "100%",
          top: "0px",
        }}
      >
        <Col>
          <Image
            width={200}
            height={100}
            alt="Image"
            src={"/logo_bg_remove.png"}
          />
        </Col>
        <Col>
          <button className="text-white text-xl" onClick={showModal}>
            Login
          </button>
        </Col>
      </Row>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", width: "200px" }} // Adjust the alpha (4th value) for transparency
      >
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-center  rounded-2xl space-y-4 px-3 py-3">
            <Image
              width={50}
              height={80}
              alt=""
              className="hover:scale-125 transition ease-in-out duration-700 "
              src="/loginbg-preview.png"
            />

            <div>
              <span className="text-3xl font-bold">Log In</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-bold">Email / Name</span>
              <input
                type="text"
                placeholder="Username"
                className="border border-r border-b-2 rounded-lg px-8 py-2"
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-bold">Password</span>
              <input
                type="password"
                placeholder="Password"
                className="border border-r border-b-2 rounded-lg px-8 py-2"
                required
              />
            </div>
            <div className="flex gap-14 text-xs">
              <div className="flex justify-between gap-1">
                <input type="checkbox" />
                <span>Remember Password</span>
              </div>
              <div>
                <span className="hover:text-blue-400 hover: text-blue-600 font-bold  transition ease-in-out duration-700">
                  <a href="http://localhost:3000/">Forget Password ?</a>
                </span>
              </div>
            </div>
            <div className="border rounded-lg flex justify-center bg-amber-400 text-white px-32 py-1 hovercale-110 transition ease-in-out duration-700 font-bold">
              <button>Login</button>
            </div>
            <div>
              <span className="text-sm">OR</span>
            </div>
            <div className="text-xs">
              <span>Do you have an account ? </span>
              <span className="hover:cursor-pointer text-blue-700 font-bold transition ease-in-out duration-700">
                Sign up
              </span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
