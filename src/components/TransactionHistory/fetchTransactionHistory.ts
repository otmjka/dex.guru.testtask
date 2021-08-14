import { FilterTypes } from '../../typings/FilterTypes';
import apiClient, { TransactionHistoryConfig } from '../../api/apiClient';

import {
  ActionType,
  TransactionHistoryAction,
} from './reducerTransactionHistory';

type FetchTransactionHistoryParams = {
  config: TransactionHistoryConfig;
  selectedFilter: FilterTypes;
  account: string;
  tokenId: string;
  dispatch: React.Dispatch<TransactionHistoryAction>;
};

const fetchTransactionHistory = async (
  params: FetchTransactionHistoryParams,
  callback: () => void,
) => {
  const { config, selectedFilter, account, tokenId, dispatch } = params;
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

  if (typeof callback === 'function') {
    callback();
  }
};

export default fetchTransactionHistory;
