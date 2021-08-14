import React, { useCallback, useEffect, useReducer } from 'react';
import apiClient, { TransactionHistoryConfig } from '../../api/apiClient';
import { FilterTypes } from '../../typings/FilterTypes';
import { TransactionHistoryRecord } from '../../typings/TransactionHistoryRecord';
import fetchTransactionHistory from './fetchTransactionHistory';
import { reducer, initState, ActionType } from './reducerTransactionHistory';
const useTransactionHistory = ({
  config,
  account,
  tokenId,
}: {
  config: TransactionHistoryConfig;
  account: string;
  tokenId: string;
}): {
  transactionHistoryRecords: Array<TransactionHistoryRecord>;
  selectedFilter: FilterTypes;
  loading: boolean;
  error: string | null;
  onChangeFilter: (filterValue: FilterTypes) => void;
} => {
  const [state, dispatch] = useReducer(reducer, initState);

  const handleFetchTransactionHistory = useCallback(() => {
    dispatch({ type: ActionType.startFetching });

    if (state.cooldownTimerId) {
      clearTimeout(state.cooldownTimerId);
    }

    fetchTransactionHistory({
      config,
      selectedFilter: state.selectedFilter,
      account,
      tokenId,
      dispatch,
    });
  }, [config, state.selectedFilter, tokenId, account, state.cooldownTimerId]);

  useEffect(() => {
    if (state.isTimerStarted) {
      return;
    }

    handleFetchTransactionHistory();
  }, [
    handleFetchTransactionHistory,
    state.cooldownTimerId,
    state.isTimerStarted,
  ]);

  const handleFilterClick = (filterValue: FilterTypes) => {
    dispatch({ type: ActionType.filterUpdated, payload: filterValue });
  };

  return {
    transactionHistoryRecords: state.transactionHistoryRecords,
    selectedFilter: state.selectedFilter,
    loading: state.loading,
    error: state.error,
    onChangeFilter: handleFilterClick,
  };
};

export default useTransactionHistory;
