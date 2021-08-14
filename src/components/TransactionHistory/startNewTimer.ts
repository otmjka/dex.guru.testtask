import {
  ActionType,
  TransactionHistoryAction,
} from './reducerTransactionHistory';

const UPDATE_TIMEOUT = 30000;

const startNewTimer = ({
  dispatch,
}: {
  dispatch: React.Dispatch<TransactionHistoryAction>;
}) => {
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

export default startNewTimer;
