import React, { useCallback, useEffect, useReducer } from 'react';
import apiClient, { TransactionHistoryConfig } from '../../api/apiClient';
import { FilterTypes } from '../../typings/FilterTypes';
import { TransactionHistoryRecord } from '../../typings/TransactionHistoryRecord';

import { reducer, initState, ActionType } from './reducerTransactionHistory';
const UPDATE_TIMEOUT = 3000;
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
    (async () => {
      try {
        const transactionHistoryResponseData = await apiClient.postTokensSwaps({
          config,
          selectedFilter: state.selectedFilter,
          account,
          tokenId,
        });

        dispatch({
          type: ActionType.fetchSuccess,
          payload: transactionHistoryResponseData
            ? transactionHistoryResponseData.data
            : [],
        });
      } catch (error) {
        dispatch({
          type: ActionType.fetchFail,
          payload: error.message || 'error while fetching data',
        });
      }

      const timerId: any = setTimeout(
        () =>
          dispatch({
            type: ActionType.cooldownTimer,
            payload: timerId as number,
          }),
        UPDATE_TIMEOUT,
      );
    })();
  }, [config, state.selectedFilter, tokenId, account, state.cooldownTimerId]);

  useEffect(() => {
    handleFetchTransactionHistory();
  }, [handleFetchTransactionHistory]);

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
