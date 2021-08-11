import React, { FC, useState } from 'react';
import cn from 'classnames';
import TransactionHistoryRecordTableItem from './TransactionHistoryRecordTableItem';
import './TransactionHistory.scss';
// TODO: where should store types
import { TransactionHistoryRecord } from '../../../typings/TransactionHistoryRecord';
import { IntlProvider } from 'react-intl';
import { useEffect } from 'react';

export interface TransactionHistoryProps {
  transactionHistoryRecords: Array<TransactionHistoryRecord>;
}

// TODO: to decide transactionHistoryRecords mb Records as posfix instead Data
const TransactionHistory: FC<TransactionHistoryProps> = ({
  transactionHistoryRecords,
}) => {
  const [newRecords, setNewRecords] =
    useState<Array<TransactionHistoryRecord> | null>(null);
  useEffect(() => {
    console.log('1');
    setNewRecords(transactionHistoryRecords);
  }, [transactionHistoryRecords]);

  console.log('2');
  // TODO: classnames thema + base classes
  return (
    <IntlProvider locale={'en'} defaultLocale={'en'}>
      <div className="transaction-history">
        <div
          className={cn('transaction-history__table__body', 'fade-in', {
            opacity1: !!newRecords,
            opacity0: !newRecords,
          })}
        >
          {!!newRecords && (
            <>
              {newRecords.map((transactionHistoryRecord) => (
                <TransactionHistoryRecordTableItem
                  key={transactionHistoryRecord.id}
                  data={transactionHistoryRecord}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </IntlProvider>
  );
};

export default TransactionHistory;
