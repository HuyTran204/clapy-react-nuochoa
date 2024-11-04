import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Instagram_Size48 } from '../Instagram_Size48/Instagram_Size48';
import classes from './Component7.module.css';
import { Ellipse10Icon } from './Ellipse10Icon';
import { InstagramIcon } from './InstagramIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
    ellipse10?: ReactNode;
  };
}
/* @figmaId 51:838 */
export const Component7: FC<Props> = memo(function Component7(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Instagram_Size48
        className={classes.instagram}
        swap={{
          icon: props.swap?.icon || <InstagramIcon className={classes.icon} />,
        }}
      />
      <div className={classes.ellipse10}>{props.swap?.ellipse10 || <Ellipse10Icon className={classes.icon2} />}</div>
    </div>
  );
});
