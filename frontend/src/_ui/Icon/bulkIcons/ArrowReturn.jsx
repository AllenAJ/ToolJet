import React from 'react';

const ArrowReturn = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
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
      d="M14.4 4.55004C14.6485 4.21867 15.1186 4.15152 15.45 4.40004L19.45 7.40004C19.6389 7.54168 19.75 7.76398 19.75 8.00004C19.75 8.23611 19.6389 8.4584 19.45 8.60004L15.45 11.6C15.1186 11.8486 14.6485 11.7814 14.4 11.45C14.1515 11.1187 14.2186 10.6486 14.55 10.4L16.75 8.75004H9C7.20507 8.75004 5.75 10.2051 5.75 12C5.75 13.795 7.20507 15.25 9 15.25H19C19.4142 15.25 19.75 15.5858 19.75 16C19.75 16.4143 19.4142 16.75 19 16.75H9C6.37665 16.75 4.25 14.6234 4.25 12C4.25 9.37669 6.37665 7.25004 9 7.25004H16.75L14.55 5.60004C14.2186 5.35152 14.1515 4.88142 14.4 4.55004Z"
      fill={fill}
    />
    <path
      d="M14.4 4.55004C14.6485 4.21867 15.1186 4.15152 15.45 4.40004L19.45 7.40004C19.6388 7.54168 19.75 7.76398 19.75 8.00004C19.75 8.23611 19.6388 8.4584 19.45 8.60004L15.45 11.6C15.1186 11.8486 14.6485 11.7814 14.4 11.45C14.1515 11.1187 14.2186 10.6486 14.55 10.4L17.7871 8.00004L14.55 5.60004C14.2186 5.35152 14.1515 4.88142 14.4 4.55004Z"
      fill={fill}
    />
  </svg>
);

export default ArrowReturn;
