import React, { useState } from "react";
import { Collapse, Select, Slider } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import {
  communityList,
  heightList,
  languageList,
  livingCountry,
  maritalStatusList,
  religion,
} from "@/constants/constants";
const ContactFilters = () => {
  const [values, setValue] = useState<{ fromage: number; toge: number }>({
    fromage: 20,
    toge: 50,
  });
  const [valuesft, setValueft] = useState<{ fromage: number; toge: number }>({
    fromage: 4,
    toge: 10,
  });

  const onChange = (value: number | [number, number]) => {
    if (Array.isArray(value) && value.length === 2) {
      setValue({ ...values, fromage: value[0], toge: value[1] });
      setValueft({ ...values, fromage: value[0], toge: value[1] });
    }
  };
  const onAfterChange = (value: number | [number, number]) => {
    if (Array.isArray(value) && value.length === 2) {
      setValue({ ...values, fromage: value[0], toge: value[1] });
      setValueft({ ...values, fromage: value[0], toge: value[1] });
    }
  };
  const onChangeft = (value: number | [number, number]) => {
    if (Array.isArray(value) && value.length === 2) {
      setValueft({ ...values, fromage: value[0], toge: value[1] });
    }
  };
  const onAfterChangeft = (value: number | [number, number]) => {
    if (Array.isArray(value) && value.length === 2) {
      setValueft({ ...values, fromage: value[0], toge: value[1] });
    }
  };
  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };
  console.log(values);
  return (
    <div className="border h-full pl-20 pt-5 rounded-md flex flex-col gap-y-3">
      <p className="text-xl font-bold">Who can contact me?</p>
      <p className="text-lg font">
        Only people who meet the following conditions will be able to view your
        contact information.
      </p>
      <Collapse
        accordion
        items={[
          {
            key: "1",
            label: <p className="text-base font-bold">Age</p>,
            children: (
              <div className="flex flex-col gap-y-3">
                <p>
                  Select a minimum age range of 3 years to get relevant matches
                </p>
                <p className="text-2xl font-bold">
                  {" "}
                  <span>{values.fromage}</span> to <span>{values.toge}</span>{" "}
                  yrs
                </p>
                <Slider
                  range
                  step={3}
                  defaultValue={[20, 50]}
                  onChange={onChange}
                  onAfterChange={onAfterChange}
                />
                <div className="">
                  <div className="mt-3">
                    <button className="border px-3 p-y-2 rounded-full text-[#FF44CB] font-bold border-[#FF44CB] hover:shadow-xl">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            ),
          },
          {
            key: "2",
            label: <p className="text-base font-bold">Height</p>,
            children: (
              <div className="flex flex-col gap-y-3">
                <p>
                  Select a minimum height range of 6 inches to get relevant
                  matches
                </p>
                <p className="text-2xl font-bold">
                  {" "}
                  <span>{valuesft.fromage}</span> to{" "}
                  <span>{valuesft.toge}</span> (ft/inch)
                </p>
                <Select
                  mode="multiple"
                  style={{ width: "100%" }}
                  placeholder="Please select"
                  defaultValue={["5ft-152cm"]}
                  onChange={handleChange}
                  options={heightList}
                />
                <div className="">
                  <div className="mt-3">
                    <button className="border px-3 p-y-2 rounded-full text-[#FF44CB] font-bold border-[#FF44CB] hover:shadow-xl">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            ),
          },
          {
            key: "3",
            label: <p className="text-base font-bold">Country</p>,
            children: (
              <div className="flex flex-col gap-y-3">
                <p>Selected Country</p>

                <Select
                  mode="multiple"
                  style={{ width: "100%" }}
                  placeholder="Please select"
                  defaultValue={["usa"]}
                  onChange={handleChange}
                  options={livingCountry}
                />
                <div className="">
                  <div className="mt-3">
                    <button className="border px-3 p-y-2 rounded-full text-[#FF44CB] font-bold border-[#FF44CB] hover:shadow-xl">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            ),
          },
          {
            key: "4",
            label: <p className="text-base font-bold">Religion</p>,
            children: (
              <div className="flex flex-col gap-y-3">
                <p>Select Religion</p>

                <Select
                  style={{ width: "100%" }}
                  placeholder="Please select"
                  defaultValue={["usa"]}
                  onChange={handleChange}
                  options={religion}
                />
                <div className="">
                  <div className="mt-3">
                    <button className="border px-3 p-y-2 rounded-full text-[#FF44CB] font-bold border-[#FF44CB] hover:shadow-xl">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            ),
          },
          {
            key: "5",
            label: <p className="text-base font-bold">Community</p>,
            children: (
              <div className="flex flex-col gap-y-3">
                <p>Select Community</p>

                <Select
                  style={{ width: "100%" }}
                  placeholder="Please select"
                  defaultValue={["bangali"]}
                  onChange={handleChange}
                  options={communityList}
                />
                <div className="">
                  <div className="mt-3">
                    <button className="border px-3 p-y-2 rounded-full text-[#FF44CB] font-bold border-[#FF44CB] hover:shadow-xl">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            ),
          },
          {
            key: "6",
            label: <p className="text-base font-bold">Mother tongue</p>,
            children: (
              <div className="flex flex-col gap-y-3">
                <p>Select Mother tongue</p>

                <Select
                  style={{ width: "100%" }}
                  placeholder="Please select"
                  defaultValue={["bangali"]}
                  onChange={handleChange}
                  options={languageList}
                />
                <div className="">
                  <div className="mt-3">
                    <button className="border px-3 p-y-2 rounded-full text-[#FF44CB] font-bold border-[#FF44CB] hover:shadow-xl">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            ),
          },
          {
            key: "7",
            label: <p className="text-base font-bold">Marital Status</p>,
            children: (
              <div className="flex flex-col gap-y-3">
                <p>Select Marital status</p>

                <Select
                  style={{ width: "100%" }}
                  placeholder="Please select"
                  defaultValue={["widwoed"]}
                  onChange={handleChange}
                  options={maritalStatusList}
                />
                <div className="">
                  <div className="mt-3">
                    <button className="border px-3 p-y-2 rounded-full text-[#FF44CB] font-bold border-[#FF44CB] hover:shadow-xl">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            ),
          },
        ]}
        style={{ width: "500px", marginBottom: "10px" }}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
      />
    </div>
  );
};

export default ContactFilters;
