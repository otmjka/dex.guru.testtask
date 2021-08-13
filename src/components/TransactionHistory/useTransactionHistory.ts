import React, { useEffect, useState } from 'react';
import { FilterTypes } from '../../typings/FilterTypes';
import { TransactionHistoryRecord } from '../../typings/TransactionHistoryRecord';

import transactionHistoryResponseData from './stories/transactionHistoryResponseData.json';
import transactionHistoryResponseDataMy from './stories/transactionHistoryResponseDataMy.json';

export type TransactionHistoryConfig = {
  apiUrl: string;
};

const useTransactionHistory = (
  config: TransactionHistoryConfig,
): {
  transactionHistoryRecords: Array<TransactionHistoryRecord>;
  selectedFilter: FilterTypes;
  onChangeFilter: (filterValue: FilterTypes) => void;
} => {
  const [selectedFilter, setSelectedFilter] = useState<FilterTypes>(
    FilterTypes.all,
  );
  const handleFilterClick = (filterValue: FilterTypes) => {
    setSelectedFilter(filterValue);
  };
  return {
    transactionHistoryRecords: transactionHistoryResponseData.data,
    selectedFilter,
    onChangeFilter: handleFilterClick,
  };
};

export default useTransactionHistory;
