import React, { FC } from 'react';
import { FilterTypes } from '../../typings/FilterTypes';
import { TransactionHistoryRecord } from '../../typings/TransactionHistoryRecord';

import Navbar from '../NavBar/Navbar';
import TableHeader from '../TableHeader';

import AnimatedTableBody from './AnimatedTableBody';
import {
  TransactionHistoryBlockContainer,
  TransactionHistoryContent,
} from './TransactionHistory.parts';

interface TransactionHistoryViewProps {
  selectedFilter: FilterTypes;
  transactionHistoryRecords: Array<TransactionHistoryRecord>;
  onChangeFilter: (filterValue: FilterTypes) => void;
}
const TransactionHistoryView: FC<TransactionHistoryViewProps> = ({
  selectedFilter,
  transactionHistoryRecords,
  onChangeFilter,
}) => {
  return (
    <TransactionHistoryBlockContainer>
      <Navbar selectedFilter={selectedFilter} onFilterClick={onChangeFilter} />
      <TableHeader />
      <TransactionHistoryContent>
        <AnimatedTableBody
          transactionHistoryRecords={transactionHistoryRecords}
        />
      </TransactionHistoryContent>
    </TransactionHistoryBlockContainer>
  );
};

export default TransactionHistoryView;
