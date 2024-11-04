import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconsSettings_24px } from '../IconsSettings_24px/IconsSettings_24px';
import { Icon } from './Icon';
import classes from './IconButton_StyleStandardStateD.module.css';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 303:906 */
export const IconButton_StyleStandardStateD: FC<Props> = memo(function IconButton_StyleStandardStateD(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.container}>
        <div className={classes.stateLayer}>
          {props.swap?.icon || (
            <IconsSettings_24px
              swap={{
                icon: <Icon className={classes.icon} />,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
});
