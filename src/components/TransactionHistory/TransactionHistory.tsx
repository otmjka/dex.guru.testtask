import React, { FC } from 'react';
import TransactionHistoryRecordTableItem from './TransactionHistoryRecordTableItem';
import './TransactionHistory.scss';
// TODO: where should store types
import { TransactionHistoryRecord } from '../../../typings/TransactionHistoryRecord';
import { IntlProvider } from 'react-intl';

export interface TransactionHistoryProps {
  transactionHistoryRecords: Array<TransactionHistoryRecord>;
}

// TODO: to decide transactionHistoryRecords mb Records as posfix instead Data
const TransactionHistory: FC<TransactionHistoryProps> = ({
  transactionHistoryRecords,
}) => {
  // TODO: classnames thema + base classes
  return (
    <IntlProvider locale={'en'} defaultLocale={'en'}>
      <div className="transaction-history">
        {transactionHistoryRecords.map((transactionHistoryRecord) => (
          <TransactionHistoryRecordTableItem
            key={transactionHistoryRecord.id}
            data={transactionHistoryRecord}
          />
        ))}
      </div>
    </IntlProvider>
  );
};

export default TransactionHistory;
