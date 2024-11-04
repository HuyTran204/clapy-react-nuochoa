import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Facebook_Size48 } from '../Facebook_Size48/Facebook_Size48';
import classes from './Component6.module.css';
import { Ellipse9Icon } from './Ellipse9Icon';
import { FacebookIcon } from './FacebookIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
    ellipse9?: ReactNode;
  };
}
/* @figmaId 51:811 */
export const Component6: FC<Props> = memo(function Component6(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Facebook_Size48
        className={classes.facebook}
        swap={{
          icon: props.swap?.icon || <FacebookIcon className={classes.icon} />,
        }}
      />
      <div className={classes.ellipse9}>{props.swap?.ellipse9 || <Ellipse9Icon className={classes.icon2} />}</div>
    </div>
  );
});
