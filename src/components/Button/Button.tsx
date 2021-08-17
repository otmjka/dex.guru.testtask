import React, { FC } from 'react';
import cn from 'classnames';

import './Button.scss';

const noob = () => {};

const Button: FC<{
  disabled?: boolean;
  testIdTitle?: string;
  title: string;
  selected?: boolean;
  onClick?: () => void;
}> = ({
  disabled = false,
  testIdTitle = 'button',
  title,
  selected = false,
  onClick = noob,
}) => (
  <button
    data-testid={`${testIdTitle}-${selected}-${disabled}`}
    disabled={disabled}
    className={cn('transaction-history__button', {
      'transaction-history__button_selected': selected,
      'transaction-history__button_disabled': disabled,
    })}
    onClick={onClick}
  >
    {title}
  </button>
);

export default Button;
