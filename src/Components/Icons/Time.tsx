import React, {SVGAttributes} from 'react';

const Time = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.9577 1H9.95236V3H15.9577V1ZM11.9541 14H13.9559V8H11.9541V14ZM19.9913 7.39L21.4125 5.97C20.9822 5.46 20.5117 4.98 20.0013 4.56L18.58 5.98C17.0287 4.74 15.0769 4 12.955 4C7.98061 4 3.94702 8.03 3.94702 13C3.94702 17.97 7.9706 22 12.955 22C17.9395 22 21.963 17.97 21.963 13C21.963 10.88 21.2224 8.93 19.9913 7.39ZM12.955 20C9.08159 20 5.9488 16.87 5.9488 13C5.9488 9.13 9.08159 6 12.955 6C16.8285 6 19.9613 9.13 19.9613 13C19.9613 16.87 16.8285 20 12.955 20Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Time;
