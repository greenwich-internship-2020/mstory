import React, {SVGAttributes} from 'react';

const Chore = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.5261 14V10H20.2612C20.072 9.268 19.7838 8.578 19.4084 7.942L21.7165 5.636L18.886 2.808L16.5779 5.114C15.9414 4.739 15.2507 4.451 14.5181 4.262V1H10.5145V4.262C9.78189 4.451 9.09127 4.739 8.45471 5.114L6.14666 2.808L3.31614 5.636L5.62419 7.942C5.24886 8.578 4.9606 9.268 4.77143 10H1.50653V14H4.77143C4.9606 14.732 5.24886 15.422 5.62419 16.058L3.31614 18.364L6.14666 21.192L8.45471 18.886C9.09027 19.261 9.78189 19.549 10.5145 19.738V23H14.5181V19.738C15.2507 19.549 15.9414 19.261 16.5779 18.886L18.886 21.192L21.7165 18.364L19.4084 16.058C19.7838 15.423 20.072 14.732 20.2612 14H23.5261ZM12.5163 15C10.8578 15 9.51365 13.657 9.51365 12C9.51365 10.343 10.8578 9 12.5163 9C14.1748 9 15.519 10.343 15.519 12C15.519 13.657 14.1748 15 12.5163 15Z"
        fill="#939393"
      />
    </svg>
  );
};

export default Chore;