import React, { FC } from 'react';

import { useIntl } from 'react-intl';
const TransactionTime: FC<{ value: number }> = ({ value }) => {
  const { formatNumber } = useIntl();
  return (
    <div className="transaction__value__title">
      <div className="transaction__value__currency__sign">$</div>
      <div className="transaction__value__label">
        {formatNumber(value, { format: 'currency', currency: 'USD' })}
      </div>
    </div>
  );
};

export default TransactionTime;
