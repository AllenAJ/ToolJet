import React from 'react';

const FileDownload = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
  <svg
    width={width}
    height={width}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      opacity="0.4"
      d="M6 22C7.86748 22 9.43606 20.7202 9.87657 18.9899C10.0128 18.4547 10.4477 18 11 18H18V5C18 3.34315 16.6569 2 15 2H5C3.34315 2 2 3.34315 2 5V18C2 20.2091 3.79086 22 6 22Z"
      fill={fill}
    />
    <path
      d="M18 22C19.8675 22 21.4361 20.7202 21.8766 18.9899C22.0128 18.4547 21.5523 18 21 18H18H11C10.4477 18 10.0128 18.4547 9.87657 18.9899C9.43606 20.7202 7.86748 22 6 22H18Z"
      fill={fill}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.25 11.1718C9.20334 11.1368 9.15858 11.098 9.11612 11.0555L7.53033 9.46973C7.23744 9.17683 6.76256 9.17683 6.46967 9.46973C6.17678 9.76262 6.17678 10.2375 6.46967 10.5304L8.05546 12.1162C9.1294 13.1901 10.8706 13.1901 11.9445 12.1162L13.5303 10.5304C13.8232 10.2375 13.8232 9.76262 13.5303 9.46973C13.2374 9.17683 12.7626 9.17683 12.4697 9.46973L10.8839 11.0555C10.8414 11.098 10.7967 11.1368 10.75 11.1718V7.00006C10.75 6.58584 10.4142 6.25006 10 6.25006C9.58579 6.25006 9.25 6.58584 9.25 7.00006V11.1718Z"
      fill={fill}
    />
  </svg>
);

export default FileDownload;
