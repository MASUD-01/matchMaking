import { Button, Col, Form, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

const AboutYourSelf = ({
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
        <Form.Item
          name={"about_me"}
          label="About Yourself"
          rules={[{ required: true, message: "aboutSelf field is required" }]}
        >
          <TextArea placeholder="Describe yourself"></TextArea>
        </Form.Item>
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

export default AboutYourSelf;
