import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7 13.3239C10.866 13.3239 14 10.3412 14 6.66195C14 2.98266 10.866 0 7 0C3.13401 0 0 2.98266 0 6.66195C0 10.3412 3.13401 13.3239 7 13.3239Z'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
