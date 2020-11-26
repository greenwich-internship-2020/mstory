import React, {SVGAttributes} from 'react';

const Story = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 0H1C0.448 0 0 0.448 0 1V23C0 23.552 0.448 24 1 24H21C21.552 24 22 23.552 22 23V8H15C14.448 8 14 7.552 14 7V0ZM4 17H18V19H4V17ZM4 12H18V14H4V12ZM10 9H4V7H10V9Z"
        fill="currentColor"
      />
      <path
        d="M21.414 5.99994H16V0.585938L21.414 5.99994Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Story;
