import { memo, SVGProps } from 'react';

const Rectangle5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 141 30' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 10C0 4.47715 4.47715 0 10 0H131C136.523 0 141 4.47715 141 10V20C141 25.5228 136.523 30 131 30H10C4.47715 30 0 25.5228 0 20V10Z'
      fill='white'
      stroke='#D4A373'
    />
  </svg>
);

const Memo = memo(Rectangle5Icon);
export { Memo as Rectangle5Icon };
