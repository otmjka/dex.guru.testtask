import React, { FC } from 'react';
import { TransactionHistoryRecord } from '../../typings/TransactionHistoryRecord';
import CurrencySymbol from './CurrencySymbol';
import TokenAmount from './TokenAmount';
import TokenValue from './TokenValue';
import TransactionTime from './TransactionTime';
import { TableCol, TableRow } from './TransactionHistoryRecordTableItem.parts';

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
    <TableRow>
      <TableCol>
        <div className="transaction-history__token__amount">
          <TokenAmount value={amount0Out} />
          <TokenAmount value={amount1Out} />
        </div>
        <div className="transaction-history__token__symbol">
          <CurrencySymbol symbol={token0Symbol} />
          <CurrencySymbol symbol={token1Symbol} />
        </div>
      </TableCol>
      <TableCol>
        <TokenValue value={amountUSD} />
      </TableCol>
      <TableCol>
        <TransactionTime value={timestamp} />
      </TableCol>
    </TableRow>
  );
};

export default TransactionHistoryRecordTableItem;
