import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component11.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    hOTRO247?: ReactNode;
    hotline273686868?: ReactNode;
    congTyTNHHHyperfume?: ReactNode;
    IaChi123UongNamKiKhoiNghiaQuan?: ReactNode;
  };
}
/* @figmaId 354:1682 */
export const Component11: FC<Props> = memo(function Component11(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.hOTRO247 != null ? props.text?.hOTRO247 : <div className={classes.hOTRO247}>HỖ TRỢ 24/7</div>}
      {props.text?.hotline273686868 != null ? (
        props.text?.hotline273686868
      ) : (
        <div className={classes.hotline273686868}>Hotline: 0273 - 686 - 868</div>
      )}
      {props.text?.congTyTNHHHyperfume != null ? (
        props.text?.congTyTNHHHyperfume
      ) : (
        <div className={classes.congTyTNHHHyperfume}>Công ty TNHH Hyperfume</div>
      )}
      {props.text?.IaChi123UongNamKiKhoiNghiaQuan != null ? (
        props.text?.IaChi123UongNamKiKhoiNghiaQuan
      ) : (
        <div className={classes.IaChi123UongNamKiKhoiNghiaQuan}>
          Địa chỉ: 123, đường Nam Kì Khởi Nghĩa, quận 1, TP.HCM
        </div>
      )}
    </div>
  );
});
