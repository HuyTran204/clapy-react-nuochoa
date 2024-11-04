import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconButton_StyleStandardStateD } from '../IconButton_StyleStandardStateD/IconButton_StyleStandardStateD';
import { IconButton_StyleStandardStateE } from '../IconButton_StyleStandardStateE/IconButton_StyleStandardStateE';
import { IconsArrow_left_24px } from '../IconsArrow_left_24px/IconsArrow_left_24px';
import { IconsArrow_right_24px } from '../IconsArrow_right_24px/IconsArrow_right_24px';
import { Icon } from './Icon';
import { Icon2 } from './Icon2';
import classes from './Nav_page.module.css';

interface Props {
  className?: string;
  classes?: {
    frame78?: string;
    root?: string;
  };
  text?: {
    _1?: ReactNode;
    _2?: ReactNode;
    _3?: ReactNode;
    _4?: ReactNode;
    _5?: ReactNode;
  };
}
/* @figmaId 414:2060 */
export const Nav_page: FC<Props> = memo(function Nav_page(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <IconButton_StyleStandardStateD
        swap={{
          icon: (
            <IconsArrow_left_24px
              swap={{
                icon: <Icon className={classes.icon} />,
              }}
            />
          ),
        }}
      />
      <div className={classes.frame2608602}>
        <div className={`${props.classes?.frame78 || ''} ${classes.frame78}`}>
          {props.text?._1 != null ? props.text?._1 : <div className={classes._1}>1</div>}
        </div>
      </div>
      <div className={classes.frame85}>
        {props.text?._2 != null ? props.text?._2 : <div className={classes._2}>2</div>}
      </div>
      <div className={classes.frame86}>
        {props.text?._3 != null ? props.text?._3 : <div className={classes._3}>3</div>}
      </div>
      <div className={classes.frame87}>
        {props.text?._4 != null ? props.text?._4 : <div className={classes._4}>4</div>}
      </div>
      <div className={classes.frame88}>
        {props.text?._5 != null ? props.text?._5 : <div className={classes._5}>5</div>}
      </div>
      <div className={classes.frame89}>
        <div className={classes.unnamed}>...</div>
      </div>
      <IconButton_StyleStandardStateE
        swap={{
          icon: (
            <IconsArrow_right_24px
              swap={{
                icon: <Icon2 className={classes.icon2} />,
              }}
            />
          ),
        }}
      />
    </div>
  );
});
