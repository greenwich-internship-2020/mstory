import React, {SVGAttributes} from 'react';

const Lock = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.02 8H18.02V6C18.02 2.691 15.329 0 12.02 0C8.71099 0 6.01999 2.691 6.01999 6V8H4.01999C3.46799 8 3.01999 8.448 3.01999 9V23C3.01999 23.552 3.46799 24 4.01999 24H20.02C20.572 24 21.02 23.552 21.02 23V9C21.02 8.448 20.572 8 20.02 8ZM13.02 17.816V20H11.02V17.816C9.85899 17.402 9.01999 16.302 9.01999 15C9.01999 13.346 10.366 12 12.02 12C13.674 12 15.02 13.346 15.02 15C15.02 16.302 14.182 17.402 13.02 17.816ZM16.02 8H8.01999V6C8.01999 3.794 9.81399 2 12.02 2C14.226 2 16.02 3.794 16.02 6V8Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Lock;
