import React, {SVGAttributes} from 'react';

const Edit = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.90991 17.2501V21.0001H7.66325L18.7331 9.94006L14.9798 6.19006L3.90991 17.2501ZM21.6357 7.04006C22.026 6.65006 22.026 6.02006 21.6357 5.63006L19.2936 3.29006C18.9032 2.90006 18.2727 2.90006 17.8823 3.29006L16.0507 5.12006L19.804 8.87006L21.6357 7.04006Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Edit;
