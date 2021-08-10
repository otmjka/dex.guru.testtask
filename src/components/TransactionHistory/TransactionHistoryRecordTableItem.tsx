import React, { FC } from 'react';
import { TransactionHistoryRecord } from './TransactionHistory';

const TransactionHistoryRecordTableItem: FC<{
  data: Partial<TransactionHistoryRecord>;
}> = ({ data }) => {
  const { token0Symbol, token1Symbol } = data;
  return (
    <div>
      <div>
        <div>{token0Symbol}</div>
        <div>{token1Symbol}</div>
      </div>
    </div>
  );
};

export default TransactionHistoryRecordTableItem;
