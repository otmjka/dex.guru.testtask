import React, { FC } from 'react';
import cn from 'classnames';

import './ColorTriangle.scss';

export enum TiangleColor {
  red = 'red',
  green = 'green',
}

const ColorTriangle: FC<{ color: TiangleColor }> = ({
  color = TiangleColor.green,
}) => (
  <div
    className={cn('transition-history__color__triangle', {
      'transition-history__color__triangle__topright':
        color === TiangleColor.green,
      'transition-history__color__triangle__bottomright':
        color === TiangleColor.red,
    })}
  />
);

export default ColorTriangle;
