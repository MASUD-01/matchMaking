import React, { useState } from "react";
import { FaFemale, FaMale } from "react-icons/fa";

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
} from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";

type SizeType = Parameters<typeof Form>[0]["size"];

const EditFamily: React.FC = () => {
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
      <Form.Item label="Father's Status">
        <Select
          options={[
            {
              value: "Empployed",
              label: "Empployed",
            },
            {
              value: "Businessman",
              label: "Businessman",
            },
            {
              value: "Retired",
              label: "Retired",
            },
            {
              value: "Not Employed",
              label: "Not Employed",
            },
            {
              value: "Passed Away",
              label: "Passed Away",
            },
          ]}
        />
      </Form.Item>
      {/* /// */}
      {/* Change according to father's statues(Employed)  */}
      <Form.Item label="With">
        <Input placeholder="Company Name" />
      </Form.Item>
      {/* Change according to father's statues(Retired)  */}
      <Form.Item label="From">
        <Input placeholder="Company Name" />
      </Form.Item>
      <Form.Item label="AS">
        <Input placeholder="Designation" />
      </Form.Item>
      {/* /// */}
      <Form.Item label="Mother's Status">
        <Select
          options={[
            {
              value: "Empployed",
              label: "Empployed",
            },
            {
              value: "Businessman",
              label: "Businessman",
            },
            {
              value: "Retired",
              label: "Retired",
            },
            {
              value: "Not Employed",
              label: "Not Employed",
            },
            {
              value: "Passed Away",
              label: "Passed Away",
            },
          ]}
        />
      </Form.Item>
      {/* /// */}
      {/* Change according to Mother's statues(Employed)  */}
      <Form.Item label="With">
        <Input placeholder="Company Name" />
      </Form.Item>
      {/* Change according to Mother's statues(Retired)  */}
      <Form.Item label="From">
        <Input placeholder="Company Name" />
      </Form.Item>
      <Form.Item label="AS">
        <Input placeholder="Designation" />
      </Form.Item>
      {/* /// */}
      <Form.Item label="Family Location">
        <Input placeholder="Enter family location" />
      </Form.Item>
      <Form.Item label="Native Place">
        <Input placeholder="Enter native place" />
      </Form.Item>
      <Form.Item label="Sub community">
        <Input placeholder="Write your sub community" />
      </Form.Item>
      <Form.Item label="Siblings">
        <div className="flex mx-1">
          <FaMale />

          <span>
            Not<span>Married</span>
          </span>

          <InputNumber min={1} max={30} defaultValue={0} />

          <span>
            Not<span>Married</span>
          </span>
          <InputNumber min={1} max={30} defaultValue={0} />
        </div>

        <div className="mt-3 flex justify-center">
          <FaFemale />
          <span>Married</span>
          <InputNumber min={1} max={30} defaultValue={0} />
          <span>Not Married</span>
          <InputNumber min={1} max={30} defaultValue={0} />
        </div>
      </Form.Item>
      <Form.Item label="Family Type">
        <Radio.Group>
          <Radio value={1}>Joint</Radio>
          <Radio value={2}>Nuclear</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Family Values">
        <Radio.Group>
          <Radio value={1}>Traditional</Radio>
          <Radio value={2}>Moderate</Radio>
          <Radio value={3}>Liberal</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Gothra/Gothram">
        <Select
          labelInValue
          defaultValue={{ value: "", label: "Select" }}
          onChange={handleChange}
          options={[
            {
              value: "Aflluent",
              label: "Aflluent",
            },
            {
              value: "Upper Middle Class",
              label: "Upper Middle Class",
            },
            {
              value: "Middle Class",
              label: "Middle Class",
            },
            {
              value: "Lower Middle Class",
              label: "Lower Middle Class",
            },
          ]}
        />
      </Form.Item>
    </Form>
  );
};

export default EditFamily;
