import {
    heightList,
    maritalStatusList,
    residencyList,
    subcommunityList,
  } from '@/constants/constants';
  import { Button, Col, Form, Input, Radio, Row, Select } from 'antd';
  import React, { useState } from 'react';
  
  const UserProfileInfo = ({
    onFinish,
    initialValue,
    prev,
  }: {
    onFinish: (values: any) => void;
    initialValue: {};
    prev: () => void;
  }) => {
    const [showFamilyliving, setShowFamilyLiving] = useState<string>();
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
            // style={{ width: '600px' }}
            justify={'center'}
            gutter={[5, 0]}
          >
            <Col lg={10}>
              <Form.Item
                name={['userProfile', 'city']}
                label='City you live in?'
                required
              >
                <Input
                  size='large'
                  placeholder='First Name'
                />
              </Form.Item>
            </Col>
  
            <Col lg={10}>
              <Form.Item
                name={['userProfile', 'familyStatus']}
                required
                label={'You live with your family?'}
              >
                <Radio.Group
                  buttonStyle='outline'
                  style={{ display: 'flex', alignContent: 'justify-center' }}
                  onChange={(e) => {
                    setShowFamilyLiving(e.target.value);
                    console.log(e.target.value);
                  }}
                  size='large'
                >
                  <Radio.Button value='yes'>Yes</Radio.Button>
                  <Radio.Button value='no'>No</Radio.Button>
                </Radio.Group>
              </Form.Item>
            </Col>
            {showFamilyliving == 'no' && (
              <Col lg={10}>
                <Form.Item
                  name={['userProfile', 'familyLives']}
                  label='City your family lives in?'
                  required
                >
                  <Input
                    size='large'
                    placeholder='family living'
                  />
                </Form.Item>
              </Col>
            )}
  
            <Col lg={10}>
              <Form.Item
                name={['userProfile', 'residencyStatus']}
                label='Your residency status'
                required
              >
                <Select
                  allowClear
                  showSearch
                  placeholder='Select Religion'
                  optionFilterProp='children'
                  options={residencyList}
                  style={{ width: '100%' }}
                  size='large'
                />
              </Form.Item>
            </Col>
            <Col lg={10}>
              <Form.Item
                name={['userProfile', 'maritalStatus']}
                label='Your marital status'
                required
              >
                <Select
                  allowClear
                  showSearch
                  placeholder='Select maritalStatus'
                  optionFilterProp='children'
                  options={maritalStatusList}
                  style={{ width: '100%' }}
                  size='large'
                />
              </Form.Item>
            </Col>
            <Col lg={10}>
              <Form.Item
                name={['userProfile', 'height']}
                label='Your Height'
                required
              >
                <Select
                  allowClear
                  showSearch
                  placeholder='Select Height'
                  optionFilterProp='children'
                  options={heightList}
                  style={{ width: '100%' }}
                  size='large'
                />
              </Form.Item>
            </Col>
            <Col lg={10}>
              <Form.Item
                name={['userProfile', 'subcommunity']}
                label='Your Sub-Community'
                required
              >
                <Select
                  allowClear
                  showSearch
                  placeholder='Select Height'
                  optionFilterProp='children'
                  options={subcommunityList}
                  style={{ width: '100%' }}
                  size='large'
                />
              </Form.Item>
            </Col>
          </Row>
          <Row justify={'center'}>
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
            <Col>
              <Form.Item label={' '}>
                <div>
                  <Button
                    style={{ margin: '0 8px' }}
                    onClick={() => prev()}
                  >
                    Previous
                  </Button>
                </div>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    );
  };
  
  export default UserProfileInfo;