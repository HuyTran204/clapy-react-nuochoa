import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Component8 } from '../Component8/Component8';
import classes from './Component12.module.css';

interface Props {
  className?: string;
  classes?: {
    image16?: string;
    image17?: string;
    root?: string;
  };
  text?: {
    pHUONGTHUCTHANHTOAN?: ReactNode;
  };
}
/* @figmaId 191:173 */
export const Component12: FC<Props> = memo(function Component12(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.image16 || ''} ${classes.image16}`}></div>
      {props.text?.pHUONGTHUCTHANHTOAN != null ? (
        props.text?.pHUONGTHUCTHANHTOAN
      ) : (
        <div className={classes.pHUONGTHUCTHANHTOAN}>
          <div className={classes.textBlock}>PHƯƠNG THỨC THANH TOÁN</div>
          <div className={classes.textBlock2}>
            <p></p>
          </div>
        </div>
      )}
      <Component8
        className={classes.component8}
        classes={{ image17: `${props.classes?.image17 || ''} ${classes.image17}` }}
      />
    </div>
  );
});
