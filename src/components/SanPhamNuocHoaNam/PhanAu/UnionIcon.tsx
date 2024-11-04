import { memo, SVGProps } from 'react';

const UnionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 31 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.1914 5.9259V0L30.9999 8.00001L13.1914 16V10.0741L0 16V0L13.1914 5.9259Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(UnionIcon);
export { Memo as UnionIcon };
