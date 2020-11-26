import React, {SVGAttributes} from 'react';

const Archieve = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 8H3C2.448 8 2 8.447 2 9V23C2 23.553 2.448 24 3 24H21C21.552 24 22 23.553 22 23V9C22 8.447 21.552 8 21 8ZM17 15C17 15.553 16.552 16 16 16H8C7.448 16 7 15.553 7 15V12H9V14H15V12H17V15Z"
        fill="currentColor"
      />
      <path d="M20 4H4V6H20V4Z" fill="currentColor" />
      <path d="M17 0H7V2H17V0Z" fill="currentColor" />
    </svg>
  );
};

export default Archieve;
