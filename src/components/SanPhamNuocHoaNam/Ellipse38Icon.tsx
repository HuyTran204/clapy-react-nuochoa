import { memo, SVGProps } from 'react';

const Ellipse38Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 11 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={5.5} cy={5} rx={5.5} ry={5} fill='#3E2723' />
  </svg>
);

const Memo = memo(Ellipse38Icon);
export { Memo as Ellipse38Icon };
