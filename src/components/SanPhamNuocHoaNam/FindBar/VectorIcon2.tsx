import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 4 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M4 4.22736L0 0.420532' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
