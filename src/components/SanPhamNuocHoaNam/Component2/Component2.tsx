import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component2.module.css';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 51:56 */
export const Component2: FC<Props> = memo(function Component2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle9}></div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
      <div className={classes.vector2}>
        <VectorIcon2 className={classes.icon2} />
      </div>
      <div className={classes._273686868HotlineBanHang}>
        <div className={classes.textBlock}>0273-686-868</div>
        <div className={classes.textBlock2}>Hotline bán hàng</div>
      </div>
    </div>
  );
});
