import * as React from 'react';

import {Colors} from '@constants';

const ArrowIcon: React.FC<{color?: string}> = ({color = Colors.GRAY_4}) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <path
      d="M5 9L11.2191 14.3306C11.6684 14.7158 12.3316 14.7158 12.7809 14.3306L19 9"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);
export default ArrowIcon;
