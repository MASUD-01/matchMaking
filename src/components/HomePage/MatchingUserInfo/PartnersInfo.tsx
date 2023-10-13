import {
  ageList,
  communityList,
  educationList,
  languageList,
  livingCountry,
  religion,
  occupationlist,
} from "@/constants/constants";
import { Col, Form, Row, Select } from "antd";
import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
const PartnersInfo = ({
  onFinish,
  initialValue,
}: {
  onFinish: (values: any) => void;
  initialValue: {};
}) => {
  console.log(initialValue);
  return (
    <div>
      <Form
        name="basic"
        initialValues={initialValue}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        style={{ width: "100%" }}
      >
        <Row gutter={[5, 5]} justify={"center"}>
          <Col lg={5} xs={24}>
            <Form.Item
              label={"looking for"}
              name={["partners", "desired_gender"]}
              required
              rules={[{ required: true, message: "gender field is required" }]}
            >
              <Select
                showSearch
                allowClear
                placeholder="Select a person"
                optionFilterProp="children"
                options={[
                  {
                    label: "Male",
                    value: "Male",
                  },
                  {
                    label: "Female",
                    value: "Female",
                  },
                ]}
                style={{ width: "100%", outlineColor: "none" }}
              />
            </Form.Item>
          </Col>
          <Col lg={3} xs={24}>
            <Form.Item
              label={"Select age"}
              name={["partners", "from_age"]}
              rules={[{ required: true, message: "age field is required" }]}
            >
              <Select
                allowClear
                showSearch
                placeholder="From age"
                optionFilterProp="children"
                options={ageList}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>

          <Col lg={1} xs={24}>
            <Form.Item label={" "}>
              <div className="flex justify-center">
                <ArrowRightOutlined className="font-bold text-2xl rotate-90 sm:rotate-0" />
              </div>
            </Form.Item>
          </Col>
          <Col lg={3} xs={24}>
            <Form.Item
              label={" "}
              required={false}
              name={["partners", "to_age"]}
              rules={[
                {
                  required: true,
                  message: "age field is required",
                },
              ]}
            >
              <Select
                showSearch
                allowClear
                placeholder="To age"
                optionFilterProp="children"
                options={ageList}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col lg={5} xs={24}>
            <Form.Item
              label={"Religion"}
              name={["partners", "desired_religion"]}
              rules={[
                { required: true, message: "religion field is required" },
              ]}
            >
              <Select
                allowClear
                showSearch
                placeholder="Select Religion"
                optionFilterProp="children"
                options={religion}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col lg={5} xs={24}>
            <Form.Item
              label={"Living in"}
              name={["partners", "desired_country"]}
              rules={[{ required: true, message: "country field is required" }]}
            >
              <Select
                showSearch
                allowClear
                placeholder="Select living"
                optionFilterProp="children"
                options={livingCountry}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col lg={5} xs={24}>
            <Form.Item
              name={["partners", "desired_community"]}
              label="Desired Community"
              required
              rules={[
                { required: true, message: "community field is required" },
              ]}
            >
              <Select
                allowClear
                showSearch
                placeholder="Select community"
                optionFilterProp="children"
                options={communityList}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col lg={5} xs={24}>
            <Form.Item
              name={["partners", "desired_occupation"]}
              label="Occupation"
              required
              rules={[
                { required: true, message: "profession field is required" },
              ]}
            >
              <Select
                allowClear
                showSearch
                placeholder="Your work with"
                optionFilterProp="children"
                options={occupationlist}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col lg={6} xs={24}>
            <Form.Item
              name={["partners", "desired_education"]}
              label="Desired Qualificfation"
              required
              rules={[
                { required: true, message: "qualification field is required" },
              ]}
            >
              <Select
                allowClear
                showSearch
                placeholder="Select Qualification"
                optionFilterProp="children"
                options={educationList}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col lg={6} xs={24}>
            <Form.Item
              name={["partners", "desired_language"]}
              label="Preferred Language"
              required
              rules={[
                { required: true, message: "language field is required" },
              ]}
            >
              <Select
                allowClear
                showSearch
                placeholder="Select language"
                optionFilterProp="children"
                options={languageList}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Item label={" "}>
              <button
                type="submit"
                className="border px-[25px] py-[4px] rounded-md hover:text-blue-500 hover:border-blue-500"
              >
                Next
              </button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default PartnersInfo;
