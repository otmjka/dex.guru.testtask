import { FilterTypes } from '../../typings/FilterTypes';
import { TransactionHistoryRecord } from '../../typings/TransactionHistoryRecord';

export enum ActionType {
  startFetching = 'startFetching',
  fetchSuccess = 'fetchSuccess',
  fetchFail = 'fetchFail',
  filterUpdated = 'filterUpdated',
  cooldownTimer = 'cooldownTimer',
  startTimer = 'startTimer',
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

type ActionCooldown = {
  type: ActionType.cooldownTimer;
  payload: number | null;
};

type ActionStartTimer = {
  type: ActionType.startTimer;
  payload: number | null;
};

export type TransactionHistoryAction =
  | ActionStartFetch
  | ActionFetchSuccess
  | ActionFetchFail
  | ActionFilterUpdated
  | ActionCooldown
  | ActionStartTimer;

type TransactionHistoryState = {
  loading: boolean;
  error: string | null;
  transactionHistoryRecords: Array<TransactionHistoryRecord>;
  selectedFilter: FilterTypes;
  cooldownTimerId: number | null;
  isTimerStarted: boolean;
};

export const initState: TransactionHistoryState = {
  selectedFilter: FilterTypes.all,
  transactionHistoryRecords: [],
  loading: true,
  error: null,
  cooldownTimerId: null,
  isTimerStarted: false,
};

export const reducer = (
  state: TransactionHistoryState,
  action: TransactionHistoryAction,
): TransactionHistoryState => {
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
        isTimerStarted: false, // !
      };
    case ActionType.startTimer:
      return {
        ...state,
        cooldownTimerId: action.payload,
        isTimerStarted: true,
      };
    case ActionType.cooldownTimer:
      return {
        ...state,
        cooldownTimerId: action.payload,
        isTimerStarted: false,
      };
    default:
      return state;
  }
};
