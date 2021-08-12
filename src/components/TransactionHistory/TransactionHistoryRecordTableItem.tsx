import React, { FC } from 'react';
import { TransactionHistoryRecord } from '../../typings/TransactionHistoryRecord';
import CurrencySymbol from './CurrencySymbol';
import TokenAmount from './TokenAmount';
import TokenValue from './TokenValue';
import TransactionTime from './TransactionTime';

const TransactionHistoryRecordTableItem: FC<{
  data: Partial<TransactionHistoryRecord>;
}> = ({ data }) => {
  const {
    amountUSD,
    amount0Out,
    amount1Out,
    token0Symbol,
    token1Symbol,
    timestamp,
  } = data;
  return (
    <div className="transaction-history__table__item">
      <div className="transaction-history__table__col">
        <div className="transaction-history__token__amount">
          <TokenAmount value={amount0Out} symbol={token0Symbol} />
          <TokenAmount value={amount1Out} symbol={token1Symbol} />
        </div>
        <div className="transaction-history__token__symbol">
          <CurrencySymbol symbol={token0Symbol} />
          <CurrencySymbol symbol={token1Symbol} />
        </div>
      </div>
      <div className="transaction-history__table__col">
        <TokenValue value={amountUSD} />
      </div>
      <div className="transaction-history__table__col">
        <TransactionTime value={timestamp} />
      </div>
    </div>
  );
};

export default TransactionHistoryRecordTableItem;
