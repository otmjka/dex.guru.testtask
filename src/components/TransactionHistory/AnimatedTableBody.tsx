import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';

import { TransactionHistoryRecord } from '../../typings/TransactionHistoryRecord';
import { TransactionHistoryProps } from './TransactionHistory';
import TransactionHistoryRecordTableItem from './TransactionHistoryRecordTableItem';

type Records = {
  id: string;
  fadeIn: boolean;
  slideOut: boolean;
  items: Array<TransactionHistoryRecord>;
};

const AnimatedTableBody: FC<TransactionHistoryProps> = ({
  transactionHistoryRecords,
}) => {
  const [newRecords, setNewRecords] = useState<Array<Records>>([]);
  useEffect(() => {
    setNewRecords((oldRecords) => {
      const tailRecords = oldRecords.map((oldRecord) => ({
        ...oldRecord,
        fadeIn: false,
        slideOut: true,
      }));
      return [
        {
          id: uuidv4(),
          fadeIn: true,
          slideOut: false,
          items: transactionHistoryRecords,
        },
        ...tailRecords,
      ];
    });
  }, [transactionHistoryRecords]);
  return (
    <>
      {newRecords.map((item) => {
        return (
          <div
            key={item.id}
            className={cn('transaction-history__table__body', {
              'fade-in': item.fadeIn,
              'slide-out': item.slideOut,
            })}
            onAnimationEnd={() => {
              console.log('onAnimation end');
            }}
          >
            {item.items.map((transactionHistoryRecord) => (
              <TransactionHistoryRecordTableItem
                key={transactionHistoryRecord.id}
                data={transactionHistoryRecord}
              />
            ))}
          </div>
        );
      })}
    </>
  );
};
export default AnimatedTableBody;
