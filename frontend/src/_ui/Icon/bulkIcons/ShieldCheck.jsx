import React from 'react';

const ShieldCheck = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
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
      d="M10.3754 2.72202L5.37763 4.94328C3.932 5.58578 2.97801 7.02462 3.07 8.60391C3.42964 14.7781 5.23768 17.4963 9.93581 20.677C11.1804 21.5196 12.821 21.5216 14.0646 20.6777C18.7772 17.4797 20.5206 14.7231 20.9118 8.6253C21.0138 7.03556 20.0583 5.58145 18.6026 4.93447L13.6246 2.72202C12.5903 2.26235 11.4097 2.26235 10.3754 2.72202Z"
      fill={fill}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.4939 9.43558C15.8056 9.70834 15.8372 10.1822 15.5645 10.4939L12.6946 13.7738C12.0779 14.4786 11.0156 14.5729 10.2843 13.9879L8.53151 12.5857C8.20806 12.3269 8.15562 11.8549 8.41438 11.5315C8.67313 11.208 9.1451 11.1556 9.46855 11.4144L11.2214 12.8166C11.3258 12.9002 11.4776 12.8867 11.5657 12.786L14.4356 9.50613C14.7084 9.1944 15.1822 9.16282 15.4939 9.43558Z"
      fill={fill}
    />
  </svg>
);

export default ShieldCheck;
