import React, { FC } from 'react';
import { FilterTypes } from '../../typings/FilterTypes';
import { TransactionHistoryRecord } from '../../typings/TransactionHistoryRecord';
import Alert from '../Alert';

import Navbar from '../NavBar/Navbar';
import TableHeader from '../TableHeader';

import AnimatedTableBody from './AnimatedTableBody';
import {
  TransactionHistoryBlockContainer,
  TransactionHistoryContent,
} from './TransactionHistory.parts';

interface TransactionHistoryViewProps {
  loading: boolean;
  error: string | null;
  selectedFilter: FilterTypes;
  transactionHistoryRecords: Array<TransactionHistoryRecord>;
  onChangeFilter: (filterValue: FilterTypes) => void;
}
const TransactionHistoryView: FC<TransactionHistoryViewProps> = ({
  loading,
  error,
  selectedFilter,
  transactionHistoryRecords,
  onChangeFilter,
}) => {
  return (
    <TransactionHistoryBlockContainer>
      {!error && (
        <>
          <Navbar
            loading={loading}
            selectedFilter={selectedFilter}
            onFilterClick={onChangeFilter}
          />
          <TableHeader />
          <TransactionHistoryContent>
            <AnimatedTableBody
              transactionHistoryRecords={transactionHistoryRecords}
            />
          </TransactionHistoryContent>
        </>
      )}
      {!!error && <Alert title={error} />}
    </TransactionHistoryBlockContainer>
  );
};

export default TransactionHistoryView;
