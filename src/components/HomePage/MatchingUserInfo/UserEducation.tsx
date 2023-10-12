import {
  educationList,
  incomeList,
  occupationlist,
} from "@/constants/constants";
import { Button, Col, Form, Input, Row, Select } from "antd";
import React from "react";

const UserEducation = ({
  onFinish,
  initialValue,
  prev,
}: {
  onFinish: (values: any) => void;
  initialValue: {};
  prev: () => void;
}) => {
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
        <Row justify={"center"} gutter={[5, 0]}>
          <Col lg={10}>
            <Form.Item
              name={["userEdu", "educationQualifi"]}
              label="Your highest qualificfation"
              required
              rules={[
                { required: true, message: "education field is required" },
              ]}
            >
              <Select
                allowClear
                showSearch
                placeholder="Select Qualification"
                optionFilterProp="children"
                options={educationList}
                style={{ width: "100%" }}
                size="large"
              />
            </Form.Item>
          </Col>
          <Col lg={10}>
            <Form.Item
              name={["userEdu", "collegeName"]}
              label="Your College Name"
              required
              rules={[{ required: true, message: "college field is required" }]}
            >
              <Input size="large" placeholder="college Name" />
            </Form.Item>
          </Col>
          <Col lg={10}>
            <Form.Item
              name={["userEdu", "workWithCom"]}
              label="Your work with"
              required
              rules={[{ required: true, message: "company field is required" }]}
            >
              <Select
                allowClear
                showSearch
                placeholder="Your work with"
                optionFilterProp="children"
                options={occupationlist}
                style={{ width: "100%" }}
                size="large"
              />
            </Form.Item>
          </Col>
          <Col lg={10}>
            <Form.Item
              name={["userEdu", "profession"]}
              label="As"
              required
              rules={[
                { required: true, message: "profession field is required" },
              ]}
            >
              <Select
                allowClear
                showSearch
                placeholder="Your Profession"
                optionFilterProp="children"
                options={occupationlist}
                style={{ width: "100%" }}
                size="large"
              />
            </Form.Item>
          </Col>
          <Col lg={10}>
            <Form.Item
              name={["userEdu", "income"]}
              label="Your Income"
              required
              rules={[{ required: true, message: "income field is required" }]}
            >
              <Select
                allowClear
                showSearch
                placeholder="Your Income"
                optionFilterProp="children"
                options={incomeList}
                style={{ width: "100%" }}
                size="large"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row justify={"center"}>
          <Col>
            <Form.Item label={" "}>
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label={" "}>
              <div>
                <button
                  type="submit"
                  className="border px-[25px] py-[4px] rounded-md hover:text-blue-500 hover:border-blue-500"
                >
                  Next
                </button>
              </div>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default UserEducation;
