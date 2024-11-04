import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0L6 6L12 0' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
