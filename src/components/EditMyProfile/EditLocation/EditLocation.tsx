"use client";

import React, { useState } from "react";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Checkbox,
  Col,
  Row,
  RadioChangeEvent,
  Space,
  Alert,
  Popconfirm,
  Tooltip,
  SelectProps,
} from "antd";

import { CheckboxChangeEvent } from "antd/es/checkbox";

// const text = <span>prompt text</span>;
// const buttonWidth = 78;

// const btnProps = {
//   style: {
//     width: buttonWidth,
//   },
// };
// const [value, setValue] = useState(null);

// const onChange = (e: RadioChangeEvent) => {
//   console.log("radio checked", e.target.value);
//   setValue(e.target.value);
// };
interface ItemProps {
  label: string;
  value: string;
}

type SizeType = Parameters<typeof Form>[0]["size"];

const EditLocation: React.FC = () => {
  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
      style={{ maxWidth: 600 }}
    >
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Country Living In">
        <Select
          // defaultValue="lucy"
          placeholder="Select"
          style={{ width: 200 }}
          onChange={handleChange}
          options={[
            { label: "Bangladesh", value: "Bangladesh" },
            { label: "India", value: "India" },
            { label: "USA", value: "USA" },
            { label: "UK", value: "UK" },
            { label: "Dubai", value: "Dubai" },
          ]}
        />
      </Form.Item>
      <Form.Item label="State Living In">
        <Select
          // defaultValue="lucy"
          placeholder="Select"
          style={{ width: 200 }}
          onChange={handleChange}
          options={[
            { label: "Dhaka", value: "Dhaka" },
            {
              label: "Sylhet",
              value: "Sylhet",
            },
            { label: "Chittagong", value: "Chittagong" },
            { label: "Rajshahi", value: "Rajshahi" },
          ]}
        />
      </Form.Item>

      <Form.Item label="City Living In">
        <Select
          // defaultValue="lucy"
          placeholder="Select"
          style={{ width: 200 }}
          onChange={handleChange}
          options={[
            {
              label: "Dhaka",
              value: "Dhaka",
            },
            {
              label: "Journalist",
              value: "Tongi",
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Residency Status">
        <Select
          // defaultValue="lucy"
          placeholder="Select"
          style={{ width: 200 }}
          onChange={handleChange}
          options={[
            { label: "Citizen", value: "Citizen" },
            {
              label: "Student Visa",
              value: "Student Visa",
            },
          ]}
        />
      </Form.Item>

      <Form.Item label="Grew Up In">
        <Space direction="vertical" style={{ width: "100%" }}>
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select"
            onChange={handleChange}
            options={[
              { label: "USA", value: "USA" },
              { label: "Bangladesh", value: "Bangladesh" },
              { label: "UK", value: "UK" },
              { label: "UAE", value: "UAE" },
              { label: "Pakistan", value: "Pakistan" },
            ]}
          />
        </Space>
      </Form.Item>
      <Form.Item label="Ethnic Origin">
        <Select
          // defaultValue="lucy"
          placeholder="Select"
          style={{ width: 200 }}
          onChange={handleChange}
          options={[
            { label: "USD 40k to 60k", value: "USD 40k to 60k" },
            {
              label: "USD 60k to 70k",
              value: "USD 70k to 80k",
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Zip/Pin Code">
        <Input placeholder="Write Zip/Pin Code" />
      </Form.Item>
    </Form>
  );
};

export default EditLocation;
