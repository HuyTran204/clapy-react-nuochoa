import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Component11 } from '../Component11/Component11';
import { Component12 } from '../Component12/Component12';
import { Component13 } from '../Component13/Component13';
import { Rectangle65 } from '../Rectangle65/Rectangle65';
import { Ellipse9Icon } from './Ellipse9Icon';
import { Ellipse10Icon } from './Ellipse10Icon';
import { FacebookIcon } from './FacebookIcon';
import classes from './Footer.module.css';
import { InstagramIcon } from './InstagramIcon';

interface Props {
  className?: string;
  classes?: {
    image16?: string;
    image17?: string;
    root?: string;
  };
}
/* @figmaId 354:1781 */
export const Footer: FC<Props> = memo(function Footer(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Rectangle65 className={classes.rectangle652} classes={{ rectangle65: classes.rectangle65 }} />
      <div className={classes.component10}>
        <div className={classes.tHONGTINTHEM}>THÔNG TIN THÊM</div>
        <div className={classes.gioiThieuVeHyperfume}>Giới thiệu về Hyperfume</div>
        <div className={classes.blog}>Blog</div>
        <div className={classes.traGopQuaTheTinDung}>Trả góp qua thẻ tín dụng</div>
        <div className={classes.chinhSachBaoHanhOiTra}>Chính sách bảo hành/đổi trả</div>
        <div className={classes.chinhSachThanhToan}>Chính sách thanh toán</div>
        <div className={classes.chinhSachVanChuyen}>Chính sách vận chuyển</div>
      </div>
      <Component11
        className={classes.component11}
        text={{
          hOTRO247: <div className={classes.hOTRO247}>HỖ TRỢ 24/7</div>,
          hotline273686868: <div className={classes.hotline273686868}>Hotline: 0273 - 686 - 868</div>,
          congTyTNHHHyperfume: <div className={classes.congTyTNHHHyperfume}>Công ty TNHH Hyperfume</div>,
          IaChi123UongNamKiKhoiNghiaQuan: (
            <div className={classes.IaChi123UongNamKiKhoiNghiaQuan}>
              Địa chỉ: 123, đường Nam Kì Khởi Nghĩa, quận 1, TP.HCM
            </div>
          ),
        }}
      />
      <Component12
        className={classes.component12}
        classes={{
          image16: `${props.classes?.image16 || ''} ${classes.image16}`,
          image17: `${props.classes?.image17 || ''} ${classes.image17}`,
        }}
        text={{
          pHUONGTHUCTHANHTOAN: <div className={classes.pHUONGTHUCTHANHTOAN}>Phương thức thanh toán</div>,
        }}
      />
      <Component13
        className={classes.component13}
        swap={{
          icon: <FacebookIcon className={classes.icon} />,
          ellipse9: <Ellipse9Icon className={classes.icon2} />,
          icon2: <InstagramIcon className={classes.icon3} />,
          ellipse10: <Ellipse10Icon className={classes.icon4} />,
        }}
        text={{
          fOLOWUS: <div className={classes.fOLOWUS}>FOLOW US</div>,
        }}
      />
    </div>
  );
});
