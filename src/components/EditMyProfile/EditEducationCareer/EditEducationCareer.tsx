import React, { useState } from "react";
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
const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};
const handleChange = (value: { value: string; label: React.ReactNode }) => {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
};
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

type SizeType = Parameters<typeof Form>[0]["size"];

const EditEducationCareer: React.FC = () => {
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
      <Form.Item label="Highest Qualification">
        <Select
          // defaultValue="lucy"
          placeholder="Select"
          style={{ width: 200 }}
          onChange={handleChange}
          options={[
            {
              label: "Engineer",
              options: [
                { label: "MSC", value: "MSC" },
                { label: "IEEE", value: "IEEE" },
              ],
            },
            {
              label: "Arts/Design",
              options: [{ label: "B.A", value: "B.A" }],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="College Attended">
        <Input placeholder="Write College Attended" />
        <span className="text-blue-600">
          <a href="dsd">Add Another</a>
        </span>
      </Form.Item>
      <Form.Item label="Working With">
        <Select
          // defaultValue="lucy"
          placeholder="Select"
          style={{ width: 200 }}
          onChange={handleChange}
          options={[
            { label: "Private Company", value: "Private Company" },
            {
              label: "Government/Public Sector",
              value: "Government/Public Sector",
            },
          ]}
        />
      </Form.Item>

      <Form.Item label="Working As">
        <Select
          // defaultValue="lucy"
          placeholder="Select"
          style={{ width: 200 }}
          onChange={handleChange}
          options={[
            {
              label: "Engineer",
              options: [
                { label: "Software engineer", value: "Software engineer" },
                { label: "Telecom engineer", value: "Telecom engineer" },
              ],
            },
            {
              label: "Journalist",
              options: [{ label: "Media", value: "Media" }],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Employer Name">
        <Input placeholder="Write Employer Name" />
      </Form.Item>
      <div>
        <Form.Item label="Annual Income">
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
          <Checkbox className="ml-2">Keep it private</Checkbox>
        </Form.Item>
      </div>
    </Form>
  );
};

export default EditEducationCareer;
