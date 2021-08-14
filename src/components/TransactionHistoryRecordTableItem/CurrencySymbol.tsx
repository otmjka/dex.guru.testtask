import { FC } from 'react';

const CurrencySymbol: FC<{ symbol: string }> = ({ symbol }) => {
  return (
    <div className="transaction-history__token__amount__symbol">{symbol}</div>
  );
};
export default CurrencySymbol;
