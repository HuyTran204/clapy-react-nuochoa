import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12 0H2C0.89543 0 0 0.89543 0 2V18C0 19.1046 0.89543 20 2 20H12C13.1046 20 14 19.1046 14 18V2C14 0.89543 13.1046 0 12 0Z'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
