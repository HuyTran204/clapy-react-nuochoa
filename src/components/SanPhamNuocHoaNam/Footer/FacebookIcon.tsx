import { memo, SVGProps } from 'react';

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 21' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.4186 0.0465117H8.34884C6.99192 0.0465117 5.69057 0.585547 4.73108 1.54503C3.77159 2.50452 3.23256 3.80587 3.23256 5.16279V8.23256H0.162791V12.3256H3.23256V20.5116H7.32558V12.3256H10.3954L11.4186 8.23256H7.32558V5.16279C7.32558 4.89141 7.43339 4.63114 7.62529 4.43924C7.81719 4.24734 8.07745 4.13953 8.34884 4.13953H11.4186V0.0465117Z'
      stroke='#3E2723'
      strokeWidth={4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(FacebookIcon);
export { Memo as FacebookIcon };
