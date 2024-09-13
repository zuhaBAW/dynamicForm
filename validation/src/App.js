import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { message } from 'antd';

function App() {
  const [form] = Form.useForm();
  const [fields, setFields] = useState([{ key: '', email: '' }]);

  const addField = () => {
    setFields([...fields, { key: '', email: '' }]);
  };

  const removeField = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
  };

  const onFinish = (values) => {
    message.success('Form submitted successfully');
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    message.error('Form submission failed');
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: '16px', border: '1px solid black' }}>
      <Form
        form={form}
        name="dynamic_form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', width: '500px', backgroundColor: '#141414', border: '1px solid black' }}
      >
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', textAlign: 'center', color: 'white' }}>Form</h2>
        {fields.map((field, index) => (
          <Form.Item
            key={index}
            name={`email${index}`}
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Please input a valid email!',
              },
            ]}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Input placeholder="Email" style={{ marginRight: '8px' }} />
              <Button
                type="primary"
                danger
                onClick={() => removeField(index)}
                style={{ marginLeft: '8px' }}
              >
                Remove
              </Button>
            </div>
          </Form.Item>
        ))}
        <Form.Item>
          <Button type="dashed" onClick={addField} style={{ width: '100%' }}>
            Add Email
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;