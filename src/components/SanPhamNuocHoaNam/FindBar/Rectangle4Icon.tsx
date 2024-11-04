import { memo, SVGProps } from 'react';

const Rectangle4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 178 30' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 10C0 4.47715 4.47715 0 10 0H168C173.523 0 178 4.47715 178 10V20C178 25.5228 173.523 30 168 30H10C4.47715 30 0 25.5228 0 20V10Z'
      fill='#D4A373'
      stroke='#D4A373'
    />
  </svg>
);

const Memo = memo(Rectangle4Icon);
export { Memo as Rectangle4Icon };
