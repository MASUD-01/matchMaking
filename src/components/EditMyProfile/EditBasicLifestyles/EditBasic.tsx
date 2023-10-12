import React, { useState } from "react";
// const [value, setValue] = useState(null);

// const onChange = (e: RadioChangeEvent) => {
//   console.log("radio checked", e.target.value);
//   setValue(e.target.value);
// };

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
} from "antd";

type SizeType = Parameters<typeof Form>[0]["size"];

const EditBasic: React.FC = () => {
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
      <Form.Item label="Profile created by">
        <Select
          //   labelInValue
          //   defaultValue={{ value: "", label: "Select" }}
          //   onChange={handleChange}
          options={[
            {
              value: "Me",
              label: "Me",
            },
            {
              value: "Father",
              label: "Father",
            },
            {
              value: "Mother",
              label: "Mother",
            },
            {
              value: "Sibling",
              label: "Sibling",
            },
            {
              value: "Friend",
              label: "Friend",
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Gender ">
        <Select
          options={[
            {
              value: "Male",
              label: "Male",
            },
            {
              value: "Female",
              label: "Female",
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Marital Status">
        <Select
          labelInValue
          defaultValue={{ value: "", label: "Select" }}
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            {
              value: "Never Married",
              label: "Never Married",
            },
            {
              value: "Divorced",
              label: "Divorced",
            },
            {
              value: "5ft 9in -(175cm)",
              label: "5ft 9in -(175cm)",
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Height">
        <Select
          onChange={handleChange}
          options={[
            {
              value: "5ft 9in -(175cm)",
              label: "5ft 10in -(175cm)",
            },
            {
              value: "5ft 11in -(179cm)",
              label: "6th -(800cm)",
            },
            {
              value: "6ft 1in -(810cm)",
              label: "6ft 2in -(820cm)",
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Date of birth">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Sun sign">
        <Select
          onChange={handleChange}
          options={[
            {
              value: "Don't know",
              label: "Don't know",
            },
            {
              value: "Aries",
              label: "Aries",
            },
            {
              value: "A-",
              label: "A-",
            },
            {
              value: "B+",
              label: "B+",
            },
            {
              value: "B-",
              label: "B-",
            },
            {
              value: "AB+",
              label: "AB+",
            },
            {
              value: "Virgo",
              label: "Virgo",
            },
            {
              value: "Libra",
              label: "Libra",
            },
            {
              value: "Scorpio",
              label: "Scorpio",
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Health Information">
        <Select
          onChange={handleChange}
          options={[
            {
              value: "Don't know",
              label: "Don't know",
            },
            {
              value: "A+",
              label: "A+",
            },
            {
              value: "A-",
              label: "A-",
            },
            {
              value: "B+",
              label: "B+",
            },
            {
              value: "B-",
              label: "B-",
            },
            {
              value: "AB+",
              label: "AB+",
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Any Disability?">
        <Radio.Group>
          <Radio value={1}>None</Radio>
          <Radio value={2}>Physical Disability</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Deit">
        <Radio.Group>
          <Radio value={1}>Veg</Radio>
          <Radio value={2}>Non-Veg</Radio>
          <Radio value={3}>Eggetarian</Radio>
        </Radio.Group>
      </Form.Item>
      {/* <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item> */}
      <Form.Item label="Blood group">
        <Select
          onChange={handleChange}
          options={[
            {
              value: "Don't know",
              label: "Don't know",
            },
            {
              value: "A+",
              label: "A+",
            },
            {
              value: "A-",
              label: "A-",
            },
            {
              value: "B+",
              label: "B+",
            },
            {
              value: "B-",
              label: "B-",
            },
            {
              value: "AB+",
              label: "AB+",
            },
            {
              value: "O-",
              label: "O-",
            },
            {
              value: "O+",
              label: "O+",
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Button">
        <Button>Button</Button>
      </Form.Item>
    </Form>
  );
};

export default EditBasic;
