import React, {SVGAttributes} from 'react';

const Arrow = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 7L7 1L13 7"
        stroke="#1B1D21"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Arrow;
