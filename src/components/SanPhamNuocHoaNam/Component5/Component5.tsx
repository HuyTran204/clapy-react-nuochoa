import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component5.module.css';

interface Props {
  className?: string;
}
/* @figmaId 54:141 */
export const Component5: FC<Props> = memo(function Component5(props = {}) {
  return <div className={`${resets.clapyResets} ${classes.root}`}></div>;
});
