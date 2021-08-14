import React, { FC } from 'react';

const Alert: FC<{ title: string }> = ({ title }) => {
  return (
    <div className="transaction-history__empty__records__message">{title}</div>
  );
};

export default Alert;
