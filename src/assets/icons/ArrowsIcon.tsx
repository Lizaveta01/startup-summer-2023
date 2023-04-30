import * as React from 'react';

const ArrowsIcon: React.FC<{color?: string}> = ({color = '#ACADB9'}) => (
  <svg width={12} height={26} viewBox="0 0 12 26" fill="none">
    <path
      d="M9.50006 7.5L6.39054 4.83469C6.16584 4.6421 5.83428 4.6421 5.60959 4.83469L2.50006 7.5"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <path
      d="M2.49994 18.5L5.60946 21.1653C5.83416 21.3579 6.16572 21.3579 6.39041 21.1653L9.49994 18.5"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);
export default ArrowsIcon;
