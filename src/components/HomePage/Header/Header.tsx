"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Row, Col, Modal, Steps, Button, message, theme } from "antd";
import Link from "next/link";
import PartnersInfo from "../MatchingUserInfo/PartnersInfo";
import UserInformation from "../MatchingUserInfo/UserInformation";
import AboutYourSelf from "../MatchingUserInfo/AboutYourSelf";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { partners } from "../MatchingUserInfo/UserInfoModal";
import { MatchUserInfoType } from "@/types/types";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [formPartners, setFormPartners] = useState({});
  const [formUserEdu, setFormUserEdu] = useState({});
  const [formUserYourself, setFormUserYourself] = useState({});
  const [formUserProfile, setformUserProfile] = useState({});
  const [formUser, setFormUser] = useState({});
  const [current, setCurrent] = useState(0);
  const showModals = () => {
    setOpen(true);
  };

  const hideModals = () => {
    setOpen(false);
  };
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
  /* ----------------form onfinish handler----------------------- */
  const [allFormData, setAllFormData] = useState<{
    partners?: {};
    userField?: MatchUserInfoType;
    userProfile?: {};
    userEdu?: {};
    about_me?: string;
  }>({
    partners: {},
    // userField: {},
    userProfile: {},
    userEdu: {},
    about_me: "",
  });
  const prev = () => {
    setCurrent(current - 1);
  };
  const onFinishPartners = (values: { partners: partners }) => {
    console.log(values, "partners------");
    setCurrent(current + 1);
    setFormPartners(values);
    setAllFormData({ ...allFormData, partners: values.partners });
  };
  const onFinishUser = (values: any) => {
    console.log(values, "user");
    setCurrent(current + 1);
    setFormUser(values);
    setAllFormData({ ...allFormData, userField: values.userField });
  };
  const onFinishProfileUser = (values: any) => {
    console.log(values, "user");
    setCurrent(current + 1);
    setformUserProfile(values);
    setAllFormData({ ...allFormData, userProfile: values.userProfile });
  };
  const onFinishUserEdu = (values: any) => {
    console.log(values, "user");
    setCurrent(current + 1);
    setFormUserEdu(values);
    setAllFormData({ ...allFormData, userEdu: values.userEdu });
  };
  const onFinishYourSelf = (values: any) => {
    console.log(values, "yyyyy");
    setCurrent(current + 1);
    setFormUserYourself(values);
    setAllFormData({ ...allFormData, about_me: values.about_me });
  };
  /* ------------------- */
  const submitData = () => {
    message.success("SuccessFully Submited");
  };

  const steps = [
    {
      title: "",
      content: (
        <PartnersInfo onFinish={onFinishPartners} initialValue={formPartners} />
      ),
    },
    {
      title: "",
      content: (
        <UserInformation
          onFinish={onFinishUser}
          initialValue={formUser}
          prev={prev}
        />
      ),
    },
    // {
    //   title: '',
    //   content: (
    //     <UserProfileInfo
    //       onFinish={onFinishProfileUser}
    //       initialValue={formUserProfile}
    //       prev={prev}
    //     />
    //   ),
    // },
    // {
    //   title: '',
    //   content: (
    //     <UserEducation
    //       onFinish={onFinishUserEdu}
    //       initialValue={formUserEdu}
    //       prev={prev}
    //     />
    //   ),
    // },
    {
      title: "",
      content: (
        <AboutYourSelf
          onFinish={onFinishYourSelf}
          initialValue={formUserYourself}
          prev={prev}
        />
      ),
    },
    {
      title: "Finished",
      content: (
        <div>
          <div className="flex h-80 justify-center items-center">
            <div className="flex">
              <span className="text-3xl"> You are all set</span>
              <span>
                <MdOutlineFileDownloadDone
                  style={{ color: "green", fontSize: "40px" }}
                />
              </span>
            </div>
          </div>
          <Row justify={"center"}>
            <Col>
              <div>
                <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                  Previous
                </Button>
                <Button
                  style={{ margin: "0 8px" }}
                  onClick={() => submitData()}
                >
                  Submit
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      ),
    },
  ];
  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  const { token } = theme.useToken();
  const contentStyle: React.CSSProperties = {
    // lineHeight: '260px',
    // textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    //border: `1px solid ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <div>
      <Row
        justify={"space-between"}
        align={"middle"}
        className="absolute px-6 sm:px-[150px] md:px-[200px] w-full top-0"
      >
        <Col>
          <h2 className="text-3xl text-center sm:text-start w-[312px] sm:w-full text-white font-bold">
            MatchMaking
          </h2>
        </Col>
        <Col className="flex gap-x-3 text-center sm:text-start w-[312px] justify-between">
          <Link href="/mywedding">
            <button className="text-white text-xl">Mywedding</button>
          </Link>
          <Link href="/aboutus">
            <button className="text-white text-xl">About Us</button>
          </Link>

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
                <button onClick={() => showModals()}>Sign up</button>
              </span>
            </div>
          </div>
        </div>

        <Modal
          title="Reliable Matrimonial and Matchmaking Solutions"
          open={open}
          onOk={hideModals}
          onCancel={hideModals}
          footer={null}
          width={1000}
        >
          <>
            <Steps current={current} items={items} />
            <div style={contentStyle}>
              {steps[current].content}{" "}
              {/* {current > 0 && (
              <Button
                style={{ margin: '0 8px' }}
                onClick={() => prev()}
              >
                Previous
              </Button>
            )} */}
            </div>
          </>
        </Modal>
      </Modal>
    </div>
  );
};

export default Header;
