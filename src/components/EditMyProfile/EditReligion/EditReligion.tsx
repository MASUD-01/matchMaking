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
import { Form, Input, Radio, Select, Checkbox, Tooltip } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";

type SizeType = Parameters<typeof Form>[0]["size"];

const EditReligionAgain: React.FC = () => {
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
      <Form.Item label="Religion">
        <Select
          options={[
            {
              value: "Muslim",
              label: "Muslim",
            },
            {
              value: "Hindu",
              label: "Hindu",
            },
            {
              value: "Christan",
              label: "Christan",
            },
            {
              value: "Buddhist",
              label: "Buddhist",
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Mother Tounge ">
        <Select
          options={[
            {
              value: "Bengali",
              label: "Bengali",
            },
            {
              value: "English",
              label: "English",
            },
            {
              value: "Hindi",
              label: "Hindi",
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Community">
        <Select
          options={[
            {
              value: "Ansari",
              label: "Ansari",
            },
            {
              value: "Sunni",
              label: "Sunni",
            },
            {
              value: "Lebbi",
              label: "Lebbi",
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Sub community">
        <Input placeholder="Write your sub community" />

        <Tooltip
          placement="bottomLeft"
          title="Note that if you tick the above box, your Partner Preference will also automatically change to 'Cast not preffered'."
        >
          <Checkbox onChange={onChange} className="mt-2 hover:">
            Not particular about my Partner&apos;s Caste
          </Checkbox>
        </Tooltip>
      </Form.Item>
      <Form.Item label="Gothra/Gothram">
        <Select
          labelInValue
          defaultValue={{ value: "", label: "Select" }}
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            {
              value: "Arti",
              label: "Arti",
            },
            {
              value: "Agasthi",
              label: "Agasthi",
            },
            {
              value: "Airan",
              label: "Airan",
            },
          ]}
        />
      </Form.Item>
    </Form>
  );
};

export default EditReligionAgain;
