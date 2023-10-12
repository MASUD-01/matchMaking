import { communityList, livingCountry, religion } from "@/constants/constants";
import { Button, Col, DatePicker, Form, Input, Radio, Row, Select } from "antd";
import React, { useState } from "react";
const { Option } = Select;
const UserInformation = ({
  onFinish,
  initialValue,
  prev,
}: {
  onFinish: (values: any) => void;
  initialValue: {};
  prev: () => void;
}) => {
  const [showGender, setShowGender] = useState<string>();
  const prefixSelector = (
    <Form.Item name={["userField", "dialcode"]} noStyle>
      <Select
        style={{ width: 70 }}
        // defaultValue={'86'}
        // defaultOpen
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
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
          <Col lg={20}>
            <Form.Item
              name={["userField", "whosProfile"]}
              required
              label={"This Profile is for"}
              rules={[{ required: true, message: "select one of the field" }]}
            >
              <Radio.Group
                buttonStyle="outline"
                style={{ display: "flex", alignContent: "justify-center" }}
                onChange={(e) => {
                  setShowGender(e.target.value);
                  console.log(e.target.value);
                }}
              >
                <Radio.Button value="myself">Myself</Radio.Button>
                <Radio.Button value="myson">My Son</Radio.Button>
                <Radio.Button value="mydaughter">My Daughter</Radio.Button>
                <Radio.Button value="mybrother">My Brother</Radio.Button>
                <Radio.Button value="mysister">My Sister</Radio.Button>
                <Radio.Button value="myfriend">My Friend</Radio.Button>
                <Radio.Button value="myrelative">My Relative</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          {showGender == "myself" && (
            <Col lg={20}>
              <Form.Item
                name={["userField", "gender"]}
                label="Gender"
                required
                rules={[
                  { required: true, message: "gender field is required" },
                ]}
              >
                <Radio.Group
                  buttonStyle="outline"
                  style={{ display: "flex", alignContent: "justify-center" }}
                >
                  <Radio.Button value="male">Male</Radio.Button>
                  <Radio.Button value="female">Female</Radio.Button>
                </Radio.Group>
              </Form.Item>
            </Col>
          )}

          <Col lg={10}>
            <Form.Item
              name={["userField", "firstName"]}
              label="Your Name"
              required
              rules={[
                { required: true, message: "firstName field is required" },
              ]}
            >
              <Input size="large" placeholder="First Name" />
            </Form.Item>
          </Col>
          <Col lg={10}>
            <Form.Item
              name={["userField", "lastName"]}
              label=" "
              required={false}
              rules={[
                { required: true, message: "lastName field is required" },
              ]}
            >
              <Input size="large" placeholder="Last Name" />
            </Form.Item>
          </Col>
          <Col lg={10}>
            <Form.Item
              name={["userField", "email"]}
              label="Email"
              required
              rules={[
                {
                  required: true,
                  message: "email is required",
                },
              ]}
            >
              <Input size="large" placeholder="Email" type="email" />
            </Form.Item>
          </Col>
          <Col lg={10}>
            <Form.Item
              name={["userField", "phone"]}
              label="Phone"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input
                size="large"
                placeholder="PhoneNumber"
                type="number"
                addonBefore={prefixSelector}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col lg={10}>
            <Form.Item
              name={["userField", "dateOfBirth"]}
              label="Date of Birth"
              required
              rules={[
                { required: true, message: "date of birth field is required" },
              ]}
            >
              <DatePicker style={{ width: "100%" }} size="large" />
            </Form.Item>
          </Col>
          <Col lg={10}>
            <Form.Item
              name={["userField", "religion"]}
              label="Your Religion"
              required
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
                size="large"
              />
            </Form.Item>
          </Col>
          <Col lg={10}>
            <Form.Item
              name={["userField", "community"]}
              label="Your Community"
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
                size="large"
              />
            </Form.Item>
          </Col>
          <Col lg={10}>
            <Form.Item
              name={["userField", "living"]}
              label="Living Country"
              required
              rules={[{ required: true, message: "living field is required" }]}
            >
              <Select
                showSearch
                allowClear
                placeholder="Select living"
                optionFilterProp="children"
                options={livingCountry}
                style={{ width: "100%" }}
                size="large"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row justify={"center"}>
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
          <Col>
            <Form.Item label={" "}>
              <div>
                <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                  Previous
                </Button>
              </div>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default UserInformation;
