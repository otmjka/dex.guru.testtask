import React, { FC } from 'react';
import cn from 'classnames';

const Button: FC<{
  title: string;
  selected: boolean;
  onClick: () => void;
}> = ({ title, selected, onClick }) => (
  <button
    className={cn('transaction-history__button', {
      'transaction-history__button_selected': selected,
    })}
    onClick={onClick}
  >
    {title}
  </button>
);

export default Button;
