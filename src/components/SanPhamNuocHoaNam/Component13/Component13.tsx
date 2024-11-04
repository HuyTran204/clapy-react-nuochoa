import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Component6 } from '../Component6/Component6';
import { Component7 } from '../Component7/Component7';
import classes from './Component13.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
    ellipse9?: ReactNode;
    icon2?: ReactNode;
    ellipse10?: ReactNode;
  };
  text?: {
    fOLOWUS?: ReactNode;
  };
}
/* @figmaId 191:174 */
export const Component13: FC<Props> = memo(function Component13(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.fOLOWUS != null ? props.text?.fOLOWUS : <div className={classes.fOLOWUS}>FOLOW US</div>}
      <Component6
        className={classes.component6}
        swap={{
          icon: props.swap?.icon,
          ellipse9: props.swap?.ellipse9,
        }}
      />
      <Component7
        className={classes.component7}
        swap={{
          icon: props.swap?.icon2,
          ellipse10: props.swap?.ellipse10,
        }}
      />
    </div>
  );
});
