import React, { FC } from 'react';
import { useIntl } from 'react-intl';
const TokenValue: FC<{ value?: number }> = ({ value }) => {
  const { formatNumber } = useIntl();
  return (
    <div className="transaction-history__value">
      <div className="transaction-history__value__currency__sign">$</div>
      <div className="transaction-history__value__label">
        {value ? formatNumber(value) : ''}
      </div>
    </div>
  );
};

export default TokenValue;
