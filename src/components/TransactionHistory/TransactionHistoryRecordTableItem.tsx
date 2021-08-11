import React, { FC } from 'react';
import { TransactionHistoryRecord } from '../../../typings/TransactionHistoryRecord';
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
      <div className="table__col__token__amount">
        <TokenAmount value={amount0Out} symbol={token0Symbol} />
        <TokenAmount value={amount1Out} symbol={token1Symbol} />
      </div>
      <div className="table__col__transaction__value">
        <TokenValue value={amountUSD} />
      </div>
      <div className="table__col__transaction__timestamp">
        <TransactionTime value={timestamp} />
      </div>
    </div>
  );
};

export default TransactionHistoryRecordTableItem;
