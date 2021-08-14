import { FilterTypes } from '../../typings/FilterTypes';
import apiClient, { TransactionHistoryConfig } from '../../api/apiClient';

import {
  ActionType,
  TransactionHistoryAction,
} from './reducerTransactionHistory';

const UPDATE_TIMEOUT = 30000;

const fetchTransactionHistory = async ({
  config,
  selectedFilter,
  account,
  tokenId,
  dispatch,
}: {
  config: TransactionHistoryConfig;
  selectedFilter: FilterTypes;
  account: string;
  tokenId: string;
  dispatch: React.Dispatch<TransactionHistoryAction>;
}) => {
  try {
    const transactionHistoryResponseData = await apiClient.postTokensSwaps({
      config,
      selectedFilter,
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

  const timerId: any = setTimeout(() => {
    dispatch({
      type: ActionType.cooldownTimer,
      payload: null,
    });
  }, UPDATE_TIMEOUT);

  dispatch({
    type: ActionType.startTimer,
    payload: timerId,
  });
};

export default fetchTransactionHistory;
