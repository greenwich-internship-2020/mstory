import React, {SVGAttributes} from 'react';

const User = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 13C14.309 13 17 10.309 17 7V6C17 2.691 14.309 0 11 0C7.691 0 5 2.691 5 6V7C5 10.309 7.691 13 11 13Z"
        fill="currentColor"
      />
      <path
        d="M18.322 15.9809C13.618 14.6779 8.383 14.6779 3.678 15.9809C1.513 16.5809 0 18.5639 0 20.8049V23.9999H22V20.8049C22 18.5639 20.487 16.5809 18.322 15.9809Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default User;
