import { memo, SVGProps } from 'react';

const Rectangle169Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 193 45' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 15C0 6.71573 6.71573 0 15 0H178C186.284 0 193 6.71573 193 15V30C193 38.2843 186.284 45 178 45H15C6.71573 45 0 38.2843 0 30V15Z'
      fill='white'
      stroke='#3E2723'
    />
  </svg>
);

const Memo = memo(Rectangle169Icon);
export { Memo as Rectangle169Icon };
