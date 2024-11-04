import { memo, SVGProps } from 'react';

const Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 5 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 10L5 5L0 0V10Z' fill='#524343' />
  </svg>
);

const Memo = memo(Icon2);
export { Memo as Icon2 };
