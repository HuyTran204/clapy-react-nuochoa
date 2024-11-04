import { memo, SVGProps } from 'react';

const Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 5 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M5 0L0 5L5 10V0Z' fill='#201A1A' />
  </svg>
);

const Memo = memo(Icon);
export { Memo as Icon };
