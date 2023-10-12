"use client";

import { fonts } from "@/app/fonts";
import { Button, Col, Form, Modal, Row, Steps, theme } from "antd";
import React, { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import PartnersInfo from "./PartnersInfo";
import UserInformation from "./UserInformation";
import UserProfileInfo from "./UserProfileInfo";
import UserEducation from "./UserEducation";
import AboutYourSelf from "./AboutYourSelf";
import { MdOutlineFileDownloadDone } from "react-icons/md";
type partners = {
  gender: string;
  from_age: number;
  to_age: number;
  religion: string;
  country: string;
};
const UserInfoModal = () => {
  const [open, setOpen] = useState(false);
  const [formPartners, setFormPartners] = useState({});
  const [formUserEdu, setFormUserEdu] = useState({});
  const [formUserYourself, setFormUserYourself] = useState({});
  const [formUserProfile, setformUserProfile] = useState({});
  const [formUser, setFormUser] = useState({});
  const [allFormData, setAllFormData] = useState<{
    partners?: {};
    userField?: {};
    userProfile?: {};
    userEdu?: {};
    selfDescribe?: {};
  }>({
    partners: {},
    userField: {},
    userProfile: {},
    userEdu: {},
    selfDescribe: {},
  });
  const [offAnimate, setOffAnimate] = useState(true);
  const showModal = () => {
    setOpen(true);
    setOffAnimate(false);
  };

  const hideModal = () => {
    setOpen(false);
    setOffAnimate(true);
  };
  /* ----modal--------- */
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const prev = () => {
    setCurrent(current - 1);
  };
  /* ----------------form onfinish handler----------------------- */
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
    setAllFormData({ ...allFormData, selfDescribe: values.selfDescribe });
  };

  console.log(allFormData, "allformData");
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
    {
      title: "",
      content: (
        <UserProfileInfo
          onFinish={onFinishProfileUser}
          initialValue={formUserProfile}
          prev={prev}
        />
      ),
    },
    {
      title: "",
      content: (
        <UserEducation
          onFinish={onFinishUserEdu}
          initialValue={formUserEdu}
          prev={prev}
        />
      ),
    },
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
              </div>
            </Col>
          </Row>
        </div>
      ),
    },
  ];
  const items = steps.map((item) => ({ key: item.title, title: item.title }));

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
      <div className="flex justify-center">
        <button
          onClick={showModal}
          className={`${fonts.roboto.className} text-white text-2xl border border-white-100 p-2`}
        >
          <div className="flex items-center">
            Let&apos;s Begin{" "}
            <div className={`${offAnimate ? "animate-bounce" : ""} pl-1 `}>
              <BsFillArrowRightCircleFill />
            </div>
          </div>
        </button>
      </div>
      <Modal
        title="Reliable Matrimonial and Matchmaking Solutions"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
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
    </div>
  );
};

export default UserInfoModal;
