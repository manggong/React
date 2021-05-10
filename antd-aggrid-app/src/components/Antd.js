import React, { useState } from 'react';
import { Button, DatePicker, message } from 'antd';
import 'antd/dist/antd.css';

const Antd = () => {
  const [date, setDate] = useState(null);

  const handleChange = (value) => {
    message.info(
      `Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`,
    );
    setDate(value);
  };
  return (
    <div style={{ width: 400, margin: '100px auto' }}>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
      </div>
      <Button type='primary' style={{ marginLeft: 8 }}>
        Primary Button
      </Button>
    </div>
  );
};

export default Antd;
