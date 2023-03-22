import React from 'react';

const SortArrowDown = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
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
      d="M11.25 6C11.25 5.58579 11.5858 5.25 12 5.25L21 5.25C21.4142 5.25 21.75 5.58579 21.75 6C21.75 6.41421 21.4142 6.75 21 6.75L12 6.75C11.5858 6.75 11.25 6.41421 11.25 6Z"
      fill={fill}
    />
    <path
      opacity="0.4"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.25 12C11.25 11.5858 11.5858 11.25 12 11.25L18 11.25C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75L12 12.75C11.5858 12.75 11.25 12.4142 11.25 12Z"
      fill={fill}
    />
    <path
      opacity="0.4"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.25 18C11.25 17.5858 11.5858 17.25 12 17.25H15C15.4142 17.25 15.75 17.5858 15.75 18C15.75 18.4142 15.4142 18.75 15 18.75H12C11.5858 18.75 11.25 18.4142 11.25 18Z"
      fill={fill}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.14624 18.7358C6.09894 18.7451 6.05004 18.75 6 18.75C5.94996 18.75 5.90106 18.7451 5.85376 18.7357C5.14913 18.6985 4.45623 18.3922 3.94463 17.8166L2.43945 16.1233C2.16426 15.8137 2.19215 15.3396 2.50174 15.0645C2.81132 14.7893 3.28538 14.8171 3.56056 15.1267L5.06575 16.8201C5.12261 16.884 5.18441 16.9407 5.25 16.99V6C5.25 5.58579 5.58579 5.25 6 5.25C6.41421 5.25 6.75 5.58579 6.75 6V16.99C6.8156 16.9407 6.8774 16.884 6.93427 16.8201L8.43945 15.1267C8.71464 14.8171 9.18869 14.7893 9.49828 15.0645C9.80787 15.3396 9.83575 15.8137 9.56056 16.1233L8.05538 17.8166C7.54378 18.3922 6.85087 18.6985 6.14624 18.7358Z"
      fill={fill}
    />
  </svg>
);

export default SortArrowDown;
