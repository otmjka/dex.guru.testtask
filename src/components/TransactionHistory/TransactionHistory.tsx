import React, { FC } from 'react';
import TransactionHistoryRecordTableItem from './TransactionHistoryRecordTableItem';
import './TransactionHistory.scss';
// TODO: where should store types
import { TransactionHistoryRecord } from '../../../typings/TransactionHistoryRecord';

export interface TransactionHistoryProps {
  transactionHistoryRecords: Array<TransactionHistoryRecord>;
}

// TODO: to decide transactionHistoryRecords mb Records as posfix instead Data
const TransactionHistory: FC<TransactionHistoryProps> = ({
  transactionHistoryRecords,
}) => {
  // TODO: classnames thema + base classes
  return (
    <div className="transaction-history">
      {transactionHistoryRecords.map((transactionHistoryRecord) => (
        <TransactionHistoryRecordTableItem
          key={transactionHistoryRecord.id}
          data={transactionHistoryRecord}
        />
      ))}
    </div>
  );
};

export default TransactionHistory;
