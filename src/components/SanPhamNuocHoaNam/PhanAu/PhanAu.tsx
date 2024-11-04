import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './PhanAu.module.css';
import { UnionIcon } from './UnionIcon';
import { Vector1Icon } from './Vector1Icon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    blog?: ReactNode;
  };
}
/* @figmaId 198:260 */
export const PhanAu: FC<Props> = memo(function PhanAu(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.trangChu}>Trang chủ</div>
      <div className={classes.vector1}>
        <Vector1Icon className={classes.icon} />
      </div>
      {props.text?.blog != null ? props.text?.blog : <div className={classes.blog}>Blog</div>}
      <div className={classes.union}>
        <UnionIcon className={classes.icon2} />
      </div>
    </div>
  );
});
