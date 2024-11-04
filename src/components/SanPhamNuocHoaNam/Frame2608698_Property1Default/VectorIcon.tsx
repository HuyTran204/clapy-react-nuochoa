import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 13 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.5 0L6.5 6L12.5 0' stroke='#3E2723' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
