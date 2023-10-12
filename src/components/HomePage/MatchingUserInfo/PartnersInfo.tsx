import { ageList, livingCountry, religion } from '@/constants/constants';
import { Button, Col, Form, Row, Select } from 'antd';
import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
const PartnersInfo = ({
  onFinish,
  initialValue,
}: {
  onFinish: (values: any) => void;
  initialValue: {};
}) => {
  console.log(initialValue);
  return (
    <div>
      <Form
        name='basic'
        initialValues={initialValue}
        onFinish={onFinish}
        autoComplete='off'
        layout='vertical'
        style={{ width: '100%' }}
      >
        <Row
          gutter={[5, 5]}
          justify={'center'}
        >
          <Col lg={5}>
            <Form.Item
              label={'looking for'}
              name={['partners', 'gender']}
              required
              rules={[{ required: true, message: 'gender field is required' }]}
            >
              <Select
                showSearch
                allowClear
                placeholder='Select a person'
                optionFilterProp='children'
                options={[
                  {
                    label: 'Male',
                    value: 'male',
                  },
                  {
                    label: 'Female',
                    value: 'female',
                  },
                ]}
                style={{ width: '100%', outlineColor: 'none' }}
              />
            </Form.Item>
          </Col>
          <Col lg={3}>
            <Form.Item
              label={'Select age'}
              name={['partners', 'from_age']}
              rules={[{ required: true, message: 'age field is required' }]}
            >
              <Select
                allowClear
                showSearch
                placeholder='From age'
                optionFilterProp='children'
                options={ageList}
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Col>

          <Col>
            <Form.Item label={' '}>
              <ArrowRightOutlined />
            </Form.Item>
          </Col>
          <Col lg={3}>
            <Form.Item
              label={' '}
              required={false}
              name={['partners', 'to_age']}
              rules={[
                {
                  required: true,
                  message: 'age field is required',
                },
              ]}
            >
              <Select
                showSearch
                allowClear
                placeholder='To age'
                optionFilterProp='children'
                options={ageList}
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Col>
          <Col lg={5}>
            <Form.Item
              label={'Religion'}
              name={['partners', 'religion']}
              rules={[
                { required: true, message: 'religion field is required' },
              ]}
            >
              <Select
                allowClear
                showSearch
                placeholder='Select Religion'
                optionFilterProp='children'
                options={religion}
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Col>
          <Col lg={5}>
            <Form.Item
              label={'Living in'}
              name={['partners', 'country']}
              rules={[{ required: true, message: 'country field is required' }]}
            >
              <Select
                showSearch
                allowClear
                placeholder='Select living'
                optionFilterProp='children'
                options={livingCountry}
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Item label={' '}>
              <button
                type='submit'
                className='border px-[25px] py-[4px] rounded-md hover:text-blue-500 hover:border-blue-500'
              >
                Next
              </button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default PartnersInfo;