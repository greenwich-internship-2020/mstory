import React, {SVGAttributes} from 'react';

const Project = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 8H1C0.448 8 0 8.447 0 9V23C0 23.553 0.448 24 1 24H19C19.552 24 20 23.553 20 23V9C20 8.447 19.552 8 19 8ZM15 15C15 15.553 14.552 16 14 16H6C5.448 16 5 15.553 5 15V12H7V14H13V12H15V15Z"
        fill="currentColor"
      />
      <path d="M18 4H2V6H18V4Z" fill="currentColor" />
      <path d="M15 0H5V2H15V0Z" fill="currentColor" />
    </svg>
  );
};

export default Project;
