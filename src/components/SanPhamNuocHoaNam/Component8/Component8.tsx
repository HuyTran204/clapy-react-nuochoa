import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component8.module.css';

interface Props {
  className?: string;
  classes?: {
    image17?: string;
    root?: string;
  };
}
/* @figmaId 51:844 */
export const Component8: FC<Props> = memo(function Component8(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle42}></div>
      <div className={`${props.classes?.image17 || ''} ${classes.image17}`}></div>
    </div>
  );
});
