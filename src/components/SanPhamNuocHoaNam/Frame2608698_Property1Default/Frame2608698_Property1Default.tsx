import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Frame2608698_Property1Default.module.css';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';

interface Props {
  className?: string;
}
/* @figmaId 413:3316 */
export const Frame2608698_Property1Default: FC<Props> = memo(function Frame2608698_Property1Default(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.trangChu}>Trang chủ</div>
      <div className={classes.frame1}>
        <div className={classes.sanPham}>Sản phẩm</div>
        <div className={classes.vector}>
          <VectorIcon className={classes.icon} />
        </div>
      </div>
      <div className={classes.flashsale}>Flashsale</div>
      <div className={classes.tuVan}>Tư vấn</div>
      <div className={classes.blog}>Blog</div>
      <div className={classes.camNangNuocHoa}>Cẩm nang Nước Hoa</div>
      <div className={classes.frame2}>
        <div className={classes.huongDan}>Hướng dẫn</div>
        <div className={classes.vector2}>
          <VectorIcon2 className={classes.icon2} />
        </div>
      </div>
    </div>
  );
});
