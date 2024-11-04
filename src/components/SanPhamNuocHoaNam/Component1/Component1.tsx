import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component1.module.css';
import { Rectangle8Icon } from './Rectangle8Icon';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';
import { VectorIcon3 } from './VectorIcon3';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 51:48 */
export const Component1: FC<Props> = memo(function Component1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle8}>
        <Rectangle8Icon className={classes.icon} />
      </div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon2} />
      </div>
      <div className={classes.vector2}>
        <VectorIcon2 className={classes.icon3} />
      </div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon4} />
      </div>
      <div className={classes.unnamed}>0</div>
    </div>
  );
});
