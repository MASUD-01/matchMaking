import {
  communityList,
  educationList,
  languageList,
  livingCountry,
  religion,
  occupationlist,
} from "@/constants/constants";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Upload,
  UploadFile,
  UploadProps,
} from "antd";
import { RcFile } from "antd/es/upload";
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
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  /* ---------------image upload--------------------------- */
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  console.log(fileList);
  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

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
          {/* <Col lg={20}>
            <Form.Item
              name={['userField', 'whosProfile']}
              required
              label={'This Profile is for'}
              rules={[{ required: true, message: 'select one of the field' }]}
            >
              <Radio.Group
                buttonStyle='outline'
                style={{ display: 'flex', alignContent: 'justify-center' }}
                onChange={(e) => {
                  setShowGender(e.target.value);
                }}
              >
                <Radio.Button value='myself'>Myself</Radio.Button>
                <Radio.Button value='myson'>My Son</Radio.Button>
                <Radio.Button value='mydaughter'>My Daughter</Radio.Button>
                <Radio.Button value='mybrother'>My Brother</Radio.Button>
                <Radio.Button value='mysister'>My Sister</Radio.Button>
                <Radio.Button value='myfriend'>My Friend</Radio.Button>
                <Radio.Button value='myrelative'>My Relative</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          {showGender == 'myself' && (
            <Col lg={20}>
              <Form.Item
                name={['userField', 'gender']}
                label='Gender'
                required
                rules={[
                  { required: true, message: 'gender field is required' },
                ]}
              >
                <Radio.Group
                  buttonStyle='outline'
                  style={{ display: 'flex', alignContent: 'justify-center' }}
                >
                  <Radio.Button value='male'>Male</Radio.Button>
                  <Radio.Button value='female'>Female</Radio.Button>
                </Radio.Group>
              </Form.Item>
            </Col>
          )} */}

          <Col lg={24} xs={24}>
            <Row justify={"center"} style={{ marginTop: "20px" }}>
              <Form.Item
                name={["userField", "photo"]}
                // label='Upload Your Image'
                rules={
                  [
                    // { required: true, message: 'firstName field is required' },
                  ]
                }
              >
                <Upload
                  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                  listType="picture-card"
                  fileList={fileList}
                  onChange={onChange}
                  onPreview={onPreview}
                  maxCount={1}
                >
                  {fileList.length < 1 && "Image Upload"}
                </Upload>
              </Form.Item>
            </Row>
          </Col>

          <Col lg={10} xs={24}>
            <Form.Item
              name={["userField", "username"]}
              label="Your Name"
              required
              rules={[
                { required: true, message: "firstName field is required" },
              ]}
            >
              <Input size="large" placeholder="First Name" />
            </Form.Item>
          </Col>
          {/* <Col lg={10}>
            <Form.Item
              name={['userField', 'lastName']}
              label=' '
              required={false}
              rules={[
                { required: true, message: 'lastName field is required' },
              ]}
            >
              <Input
                size='large'
                placeholder='Last Name'
              />
            </Form.Item>
          </Col> */}
          <Col lg={10} xs={24}>
            <Form.Item
              label={"Gender"}
              name={["userField", "gender"]}
              required
              rules={[{ required: true, message: "gender field is required" }]}
            >
              <Select
                size="large"
                showSearch
                allowClear
                placeholder="Select a person"
                optionFilterProp="children"
                options={[
                  {
                    label: "Male",
                    value: "Male",
                  },
                  {
                    label: "Female",
                    value: "Female",
                  },
                ]}
                style={{ width: "100%", outlineColor: "none" }}
              />
            </Form.Item>
          </Col>
          <Col lg={10} xs={24}>
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
          <Col lg={10} xs={24}>
            <Form.Item
              name={["userField", "phone_number"]}
              label="Phone"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input
                size="large"
                placeholder="PhoneNumber"
                type="number"
                // addonBefore={prefixSelector}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col lg={10} xs={24}>
            <Form.Item
              name={["userField", "date_of_birth"]}
              label="Date of Birth"
              required
              rules={[
                { required: true, message: "date of birth field is required" },
              ]}
            >
              <DatePicker style={{ width: "100%" }} size="large" />
            </Form.Item>
          </Col>
          <Col lg={10} xs={24}>
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
          <Col lg={10} xs={24}>
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
          <Col lg={10} xs={24}>
            <Form.Item
              name={["partners", "language"]}
              label="Preferred Language"
              required
              rules={[
                { required: true, message: "language field is required" },
              ]}
            >
              <Select
                allowClear
                showSearch
                placeholder="Select language"
                optionFilterProp="children"
                options={languageList}
                style={{ width: "100%" }}
                size="large"
              />
            </Form.Item>
          </Col>
          <Col lg={10} xs={24}>
            <Form.Item
              name={["userField", "education"]}
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
          <Col lg={10} xs={24}>
            <Form.Item
              name={["userField", "occupation"]}
              label="Occupation"
              required
              rules={[
                { required: true, message: "profession field is required" },
              ]}
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
          <Col lg={10} xs={24}>
            <Form.Item
              name={["userField", "country"]}
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
          <Col lg={10} xs={24}>
            <Form.Item
              name={["userField", "password_hash"]}
              label="Password"
              required
              rules={[{ required: true, message: "living field is required" }]}
            >
              <Input size="large" />
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

export default UserInformation;
