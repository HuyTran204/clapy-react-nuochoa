import { memo, SVGProps } from 'react';

const IconsArrow_left_24pxIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 5 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M5 0L0 5L5 10V0Z' fill='black' />
  </svg>
);

const Memo = memo(IconsArrow_left_24pxIcon);
export { Memo as IconsArrow_left_24pxIcon };
