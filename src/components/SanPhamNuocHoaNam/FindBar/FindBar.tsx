import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './FindBar.module.css';
import { Rectangle4Icon } from './Rectangle4Icon';
import { Rectangle5Icon } from './Rectangle5Icon';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 385:1776 */
export const FindBar: FC<Props> = memo(function FindBar(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle4}>
        <Rectangle4Icon className={classes.icon} />
      </div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon2} />
      </div>
      <div className={classes.rectangle5}>
        <Rectangle5Icon className={classes.icon3} />
      </div>
      <div className={classes.timKiem}>Tìm kiếm ...</div>
      <div className={classes.vector2}>
        <VectorIcon2 className={classes.icon4} />
      </div>
    </div>
  );
});
