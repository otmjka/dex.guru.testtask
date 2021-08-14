import React, { FC } from 'react';
import cn from 'classnames';

import './Button.scss';

const Button: FC<{
  testIdTitle: string;
  title: string;
  selected: boolean;
  onClick: () => void;
}> = ({ testIdTitle, title, selected, onClick }) => (
  <button
    data-testid={`${testIdTitle}-${selected}`}
    className={cn('transaction-history__button', {
      'transaction-history__button_selected': selected,
    })}
    onClick={onClick}
  >
    {title}
  </button>
);

export default Button;
