import React, { useState } from "react";
import { Collapse, InputNumber, Select, Slider, Space, Row, Col } from "antd";
import "./Basic.css";

const { Panel } = Collapse;

function callback(key: any) {
  console.log(key);
}

const PartnerBasicInfo = () => {
  //......................for age change............................................
  const [inputValue, setInputValue] = useState<any>();
  const onChange = (value: number | [number, number]) => {
    console.log("onChange: ", value);
    setInputValue(value);
  };

  const onAfterChange = (value: number | [number, number]) => {
    console.log("onAfterChange: ", value);
    setInputValue(value);
  };

  //    ....................for heigth select.............................................
  const OnChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  // ..........................for religion community.........................................
  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      <Collapse defaultActiveKey={["1"]} onChange={callback}>
        <Panel header="Age" key="1">
          <div>
            <Slider
              range
              min={18}
              step={1}
              defaultValue={[20, 100]}
              onChange={onChange}
              onAfterChange={onAfterChange}
            />
            <span>From</span>
            <InputNumber
              min={18}
              style={{ margin: "0 16px" }}
              value={inputValue?.length ? inputValue[0] : 0 || 0}
            />
            <span>to</span>
            <InputNumber
              max={100}
              style={{ margin: "0 16px" }}
              value={
                inputValue?.length && inputValue[1] ? inputValue[1] : 0 || 0
              }
            />
          </div>
        </Panel>
        <Panel header="Height" key="2">
          <div>
            <span className="mr-2">From</span>
            <Select
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={OnChange}
              onSearch={onSearch}
              filterOption={filterOption}
              options={[
                {
                  value: "4 feet  1 inch",
                  label: "4 feet  1 inch",
                },
                {
                  value: "4 feet  2 inches",
                  label: "4 feet  2 inches",
                },
                {
                  value: "4 feet  3 inches",
                  label: "4 feet  3 inches",
                },
              ]}
            />
            <span className="mx-2">to</span>
            <Select
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={OnChange}
              onSearch={onSearch}
              filterOption={filterOption}
              options={[
                {
                  value: "5 feet  1 inch",
                  label: "5 feet  1 inch",
                },
                {
                  value: "5 feet  2 inches",
                  label: "5 feet  2 inches",
                },
                {
                  value: "5 feet  3 inches",
                  label: "5 feet  3 inches",
                },
              ]}
            />
          </div>
        </Panel>
        <Panel header="Religion / Community" key="3">
          <div>
            <div className="mb-4">
              <span className="mr-8">Religion</span>
              <Select
                mode="multiple"
                allowClear
                style={{ width: "40%" }}
                placeholder="Please select"
                onChange={handleChange}
                options={[
                  { label: "Muslim", value: "Muslim" },
                  { label: "Hindu", value: "Hindu" },
                  { label: "Christian", value: "Christian" },
                  { label: "Buddhist", value: "Buddhist" },
                  { label: "Sikh", value: "Sikh" },
                ]}
              />
            </div>
            <div>
              <span className="mr-3">Community</span>
              <Select
                mode="multiple"
                allowClear
                style={{ width: "40%" }}
                placeholder="Please select"
                onChange={handleChange}
                options={[
                  { label: "Never Married", value: "Never Married" },
                  { label: "Divorced", value: "Divorced" },
                  { label: "Lebbai", value: "Lebbai" },
                  { label: "Ansari", value: "Ansari" },
                  { label: "Jat", value: "Jat" },
                ]}
              />
            </div>
          </div>
        </Panel>
        <Panel header="Mother tongue" key="4">
          <p>
            {" "}
            <Space direction="vertical" style={{ width: "100%" }}>
              <Select
                mode="multiple"
                allowClear
                style={{ width: "20%" }}
                placeholder="Please select"
                onChange={handleChange}
                options={[
                  { label: "Bengali", value: "Bengali" },
                  { label: "Hindi", value: "Hindi" },
                  { label: "English", value: "English" },
                  { label: "Arabic", value: "Arabic" },
                ]}
              />
            </Space>
          </p>
        </Panel>
        <Panel header="Marital status" key="5">
          <p>
            <div>
              <span className="mr-3">Marital Status</span>
              <Select
                mode="multiple"
                allowClear
                style={{ width: "40%" }}
                placeholder="Please select"
                onChange={handleChange}
                options={[
                  { label: "Never Married", value: "Never Married" },
                  { label: "Divorced", value: "Divorced" },
                  { label: "Widowed", value: "Widowed" },
                  { label: "Awaiting Divorce", value: "Awaiting Divorce" },
                  { label: "Annulled", value: "Annulled" },
                ]}
              />
            </div>
          </p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default PartnerBasicInfo;
