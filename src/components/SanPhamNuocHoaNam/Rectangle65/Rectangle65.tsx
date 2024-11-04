import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Rectangle65.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle65?: string;
    root?: string;
  };
}
/* @figmaId 191:170 */
export const Rectangle65: FC<Props> = memo(function Rectangle65(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle65 || ''} ${classes.rectangle65}`}></div>
    </div>
  );
});
