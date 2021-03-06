import React, {SVGAttributes} from 'react';

const Eye = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.832 11.445C22.656 11.182 18.461 5 12 5C5.50601 5 1.34001 11.185 1.16601 11.448C0.944007 11.783 0.944007 12.219 1.16801 12.554C1.34401 12.818 5.53901 19 12 19C18.428 19 22.653 12.821 22.83 12.558C23.056 12.222 23.057 11.782 22.832 11.445ZM12 17C7.65001 17 4.36501 13.404 3.24701 11.998C3.90501 11.166 5.32201 9.573 7.27101 8.408C7.10001 8.908 7.00001 9.441 7.00001 10C7.00001 12.757 9.24301 15 12 15C14.757 15 17 12.757 17 10C17 9.445 16.901 8.915 16.732 8.418C18.672 9.582 20.089 11.168 20.75 11.999C19.623 13.407 16.324 17 12 17Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Eye;
