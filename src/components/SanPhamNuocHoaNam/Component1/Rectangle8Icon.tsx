import { memo, SVGProps } from 'react';

const Rectangle8Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 49 36' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 10C0 4.47715 4.47715 0 10 0H39C44.5228 0 49 4.47715 49 10V26C49 31.5228 44.5228 36 39 36H10C4.47715 36 0 31.5228 0 26V10Z'
      fill='#D4A373'
    />
  </svg>
);

const Memo = memo(Rectangle8Icon);
export { Memo as Rectangle8Icon };
