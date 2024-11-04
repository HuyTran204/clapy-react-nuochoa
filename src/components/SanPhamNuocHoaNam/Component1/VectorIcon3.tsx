import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 0H4L6.68 13.39C6.77144 13.8504 7.02191 14.264 7.38755 14.5583C7.75318 14.8526 8.2107 15.009 8.68 15H18.4C18.8693 15.009 19.3268 14.8526 19.6925 14.5583C20.0581 14.264 20.3086 13.8504 20.4 13.39L22 5H5'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
