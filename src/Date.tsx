import React from 'react';

const DateText = () => {
  const date1 = new Date();
  return <p>{date1.toLocaleDateString()}</p>;
};
export default DateText;
