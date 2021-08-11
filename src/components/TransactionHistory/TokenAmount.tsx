import React, { FC } from 'react';
import { useIntl } from 'react-intl';

const TokenAmount: FC<{ value: number; symbol: string }> = ({
  value,
  symbol,
}) => {
  const { formatNumber } = useIntl();

  return (
    <div className="token-amount-title">
      <div className="token-amount-value">{formatNumber(value)}</div>
      <div className="token-amount-symbol">{symbol}</div>
    </div>
  );
};

export default TokenAmount;
