import React, { FC } from 'react';

import { useIntl } from 'react-intl';
const TransactionTime: FC<{ value: number }> = ({ value }) => {
  const { formatTime, formatDate } = useIntl();
  return (
    <div className="transaction-history__datetime__title">
      <div className="transaction-history__date__value">
        {formatDate(value, { dateStyle: 'short' })}
      </div>
      <div className="transaction-history__time__value">
        {formatTime(value, { timeStyle: 'medium', hourCycle: 'h24' })}
      </div>
    </div>
  );
};

export default TransactionTime;
