import React, { FC } from 'react';
import { useIntl } from 'react-intl';

const TokenAmount: FC<{ value: number }> = ({ value }) => {
  const { formatNumber } = useIntl();

  return (
    <div className="transaction-history__token__amount__title">
      <div className="transaction-history__token__amount__value">
        {formatNumber(value)}
      </div>
    </div>
  );
};

export default TokenAmount;
