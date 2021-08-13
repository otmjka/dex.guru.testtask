import { FilterTypes } from '../../typings/FilterTypes';
import { TransactionHistoryRecord } from '../../typings/TransactionHistoryRecord';

export enum ActionType {
  startFetching = 'startFetching',
  fetchSuccess = 'fetchSuccess',
  fetchFail = 'fetchFail',
  filterUpdated = 'filterUpdated',
}

type ActionStartFetch = {
  type: ActionType.startFetching;
};

type ActionFetchSuccess = {
  type: ActionType.fetchSuccess;
  payload: Array<TransactionHistoryRecord>;
};

type ActionFetchFail = {
  type: ActionType.fetchFail;
  payload: string;
};

type ActionFilterUpdated = {
  type: ActionType.filterUpdated;
  payload: FilterTypes;
};

type TransactionHistoryAction =
  | ActionStartFetch
  | ActionFetchSuccess
  | ActionFetchFail
  | ActionFilterUpdated;

type TransactionHistoryState = {
  loading: boolean;
  error: string | null;
  transactionHistoryRecords: Array<TransactionHistoryRecord>;
  selectedFilter: FilterTypes;
};

export const reducer = (
  state: TransactionHistoryState,
  action: TransactionHistoryAction,
) => {
  switch (action.type) {
    case ActionType.startFetching:
      return { ...state, loading: true };
    case ActionType.fetchSuccess:
      return {
        ...state,
        loading: false,
        transactionHistoryRecords: action.payload,
        error: null,
      };
    case ActionType.fetchFail:
      return {
        ...state,
        loading: false,
        transactionHistoryRecords: [],
        error: action.payload,
      };
    case ActionType.filterUpdated:
      return {
        ...state,
        selectedFilter: action.payload,
      };
    default:
      return state;
  }
};

export const initState: TransactionHistoryState = {
  selectedFilter: FilterTypes.all,
  transactionHistoryRecords: [],
  loading: true,
  error: null,
};
