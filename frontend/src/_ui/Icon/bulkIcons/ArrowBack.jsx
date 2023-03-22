import React from 'react';

const ArrowBack = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
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
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.6 4.55004C9.35147 4.21867 8.88137 4.15152 8.55 4.40004L4.55 7.40004C4.36115 7.54168 4.25 7.76398 4.25 8.00004C4.25 8.23611 4.36115 8.4584 4.55 8.60004L8.55 11.6C8.88137 11.8486 9.35147 11.7814 9.6 11.45C9.84853 11.1187 9.78137 10.6486 9.45 10.4L7.25 8.75004H15C16.7949 8.75004 18.25 10.2051 18.25 12C18.25 13.795 16.7949 15.25 15 15.25H5C4.58579 15.25 4.25 15.5858 4.25 16C4.25 16.4143 4.58579 16.75 5 16.75H15C17.6234 16.75 19.75 14.6234 19.75 12C19.75 9.37669 17.6234 7.25004 15 7.25004H7.25L9.45 5.60004C9.78137 5.35152 9.84853 4.88142 9.6 4.55004Z"
      fill={fill}
    />
    <path
      d="M9.6 4.55004C9.35147 4.21867 8.88137 4.15152 8.55 4.40004L4.55 7.40004C4.36115 7.54168 4.25 7.76398 4.25 8.00004C4.25 8.23611 4.36115 8.4584 4.55 8.60004L8.55 11.6C8.88137 11.8486 9.35147 11.7814 9.6 11.45C9.84853 11.1187 9.78137 10.6486 9.45 10.4L6.21285 8.00004L9.45 5.60004C9.78137 5.35152 9.84853 4.88142 9.6 4.55004Z"
      fill={fill}
    />
  </svg>
);

export default ArrowBack;
