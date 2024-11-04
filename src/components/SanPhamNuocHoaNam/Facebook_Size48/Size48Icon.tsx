import { memo, SVGProps } from 'react';

const Size48Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M22 0H16C13.3478 0 10.8043 1.05357 8.92893 2.92893C7.05357 4.8043 6 7.34784 6 10V16H0V24H6V40H14V24H20L22 16H14V10C14 9.46957 14.2107 8.96086 14.5858 8.58579C14.9609 8.21071 15.4696 8 16 8H22V0Z'
      stroke='#1E1E1E'
      strokeWidth={4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Size48Icon);
export { Memo as Size48Icon };
