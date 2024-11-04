import { memo, SVGProps } from 'react';

const Rectangle144Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 125 28' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 6C0 2.68629 2.68629 0 6 0H119C122.314 0 125 2.68629 125 6V22C125 25.3137 122.314 28 119 28H6C2.68629 28 0 25.3137 0 22V6Z'
      fill='#E7AE77'
    />
  </svg>
);

const Memo = memo(Rectangle144Icon);
export { Memo as Rectangle144Icon };
