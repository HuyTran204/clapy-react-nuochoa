import { memo, SVGProps } from 'react';

const Vector1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1167 0' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path opacity={0.5} d='M0 0H1166.5' stroke='black' strokeWidth={0.5} />
  </svg>
);

const Memo = memo(Vector1Icon);
export { Memo as Vector1Icon };
