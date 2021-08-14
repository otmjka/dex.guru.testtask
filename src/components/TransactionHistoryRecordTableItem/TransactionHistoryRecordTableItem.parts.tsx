import { FC } from 'react';
import cn from 'classnames';

export const TableCol: FC<{ className?: string }> = ({
  children,
  className,
}) => (
  <div
    className={cn('transaction-history__table__col', {
      [`${className}`]: !!className,
    })}
  >
    {children}
  </div>
);

export const TableRow: FC<{ className?: string }> = ({
  children,
  className,
}) => (
  <div
    className={cn('transaction-history__table__row', {
      [`${className}`]: !!className,
    })}
  >
    {children}
  </div>
);
