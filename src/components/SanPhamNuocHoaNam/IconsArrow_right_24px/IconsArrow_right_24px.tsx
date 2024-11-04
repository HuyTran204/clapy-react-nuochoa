import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconsArrow_right_24px.module.css';
import { IconsArrow_right_24pxIcon } from './IconsArrow_right_24pxIcon';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 414:2078 */
export const IconsArrow_right_24px: FC<Props> = memo(function IconsArrow_right_24px(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <IconsArrow_right_24pxIcon className={classes.icon2} />}</div>
    </div>
  );
});
