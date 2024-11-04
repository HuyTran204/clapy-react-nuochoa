import { memo, SVGProps } from 'react';

const IconsArrow_right_24pxIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 5 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 10L5 5L0 0V10Z' fill='black' />
  </svg>
);

const Memo = memo(IconsArrow_right_24pxIcon);
export { Memo as IconsArrow_right_24pxIcon };
