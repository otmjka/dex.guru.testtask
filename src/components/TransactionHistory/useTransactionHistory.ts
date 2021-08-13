import React, { useEffect, useReducer, useRef, useState } from 'react';
import apiClient, { TransactionHistoryConfig } from '../../api/apiClient';
import { FilterTypes } from '../../typings/FilterTypes';
import { TransactionHistoryRecord } from '../../typings/TransactionHistoryRecord';

import transactionHistoryResponseData from './stories/transactionHistoryResponseData.json';
import transactionHistoryResponseDataMy from './stories/transactionHistoryResponseDataMy.json';
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
  const initFlag = useRef<boolean>(true);
  const [state, dispatch] = useReducer(reducer, initState);

  const handleFilterClick = (filterValue: FilterTypes) => {
    dispatch({ type: ActionType.filterUpdated, payload: filterValue });
  };

  useEffect(() => {
    if (!initFlag.current) {
      return;
    }
    initFlag.current = false;
    debugger;
    console.log(state);
    dispatch({ type: ActionType.startFetching });
    apiClient
      .postTokensSwaps({
        config,
        selectedFilter: state.selectedFilter,
        account,
        tokenId,
      })
      .then((data) => {
        debugger;
        console.log(data);
        dispatch({
          type: ActionType.fetchSuccess,
          payload: data ? data.data : [],
        });
        // setTimeout(() => setTimerTrigger({}), TIMEOUT)
      })
      .catch((error) => {
        debugger;
        console.log(error);
        dispatch({
          type: ActionType.fetchFail,
          payload: error.message || 'error while fetching data',
        });
      });
  }, [config, state]);

  return {
    transactionHistoryRecords: state.transactionHistoryRecords,
    selectedFilter: state.selectedFilter,
    loading: state.loading,
    error: state.error,
    onChangeFilter: handleFilterClick,
  };
};

export default useTransactionHistory;
