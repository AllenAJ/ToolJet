import React from 'react';

const FolderUpload = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
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
      d="M22 17V10C22 7.79086 20.2091 6 18 6H15.3333C14.4679 6 13.6257 5.71929 12.9333 5.2L11.0667 3.8C10.3743 3.28071 9.53215 3 8.66667 3H6C3.79086 3 2 4.79086 2 7V17C2 19.2091 3.79086 21 6 21H18C20.2091 21 22 19.2091 22 17Z"
      fill={fill}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.25 11.8282C11.2033 11.8632 11.1586 11.902 11.1161 11.9445L9.53033 13.5303C9.23744 13.8232 8.76256 13.8232 8.46967 13.5303C8.17678 13.2374 8.17678 12.7625 8.46967 12.4696L10.0555 10.8838C11.1294 9.80988 12.8706 9.80988 13.9445 10.8838L15.5303 12.4696C15.8232 12.7625 15.8232 13.2374 15.5303 13.5303C15.2374 13.8232 14.7626 13.8232 14.4697 13.5303L12.8839 11.9445C12.8414 11.902 12.7967 11.8632 12.75 11.8282V15.9999C12.75 16.4142 12.4142 16.7499 12 16.7499C11.5858 16.7499 11.25 16.4142 11.25 15.9999V11.8282Z"
      fill={fill}
    />
  </svg>
);

export default FolderUpload;
