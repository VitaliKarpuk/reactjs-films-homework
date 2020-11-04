import React from 'react';
import 'antd/dist/antd.css';
import { Rate } from 'antd';

import './style.scss';

const Stars = () => {
  const value = 3;
  return (
    <span className='stars'>
      <Rate value={value} />
      {value ? <span className="ant-rate-text">{value}</span> : ''}
    </span>
  );
}

export default Stars;