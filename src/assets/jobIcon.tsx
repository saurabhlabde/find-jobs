import * as React from "react";
import { memo } from "react";

const JobIcon = () => (
  <svg width={25} height={25} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21.968 7.27c-.885-.978-2.354-1.468-4.51-1.468h-.25V5.76c0-1.75 0-3.916-3.917-3.916h-1.583C7.79 1.844 7.79 4.01 7.79 5.76v.042h-.25c-2.156 0-3.635.49-4.51 1.469-1.031 1.156-1 2.687-.896 3.74l.01.072.073.85a.5.5 0 0 0 .227.377c.298.193.615.396.92.565.145.094.301.177.458.26a17.272 17.272 0 0 0 3.729 1.51 4.953 4.953 0 0 0 4.948 4.886 4.952 4.952 0 0 0 4.948-4.948v-.041a17.418 17.418 0 0 0 3.75-1.636c.062-.031.104-.062.156-.094.413-.224.843-.52 1.234-.797a.498.498 0 0 0 .207-.352l.07-.642c.01-.063.01-.115.02-.188.083-1.041.063-2.479-.917-3.562ZM9.281 5.76c0-1.77 0-2.437 2.427-2.437h1.583c2.427 0 2.427.667 2.427 2.437v.042H9.281V5.76ZM12.5 17.97a3.386 3.386 0 0 1-3.355-2.959 2.841 2.841 0 0 1-.03-.427 3.392 3.392 0 0 1 3.385-3.385 3.392 3.392 0 0 1 3.385 3.385c0 .125-.01.24-.02.354v.01A3.394 3.394 0 0 1 12.5 17.97Z"
      fill="#F97801"
    />
    <path
      d="M11.908 16.7a.773.773 0 0 1-.553-.23l-1.03-1.02a.786.786 0 0 1 0-1.104.786.786 0 0 1 1.103 0l.5.5 1.677-1.542a.786.786 0 0 1 1.105.042.786.786 0 0 1-.042 1.104l-2.219 2.052a.912.912 0 0 1-.541.198Z"
      fill="#F97801"
    />
    <path
      d="M21.918 14.305c.26-.144.595.064.568.36l-.37 4.046c-.219 2.083-1.073 4.208-5.656 4.208H8.522c-4.583 0-5.437-2.125-5.646-4.198l-.36-3.857c-.028-.3.292-.502.558-.361.813.447 1.656.843 2.521 1.156.323.114.552.385.646.719.781 2.708 3.302 4.718 6.26 4.718 3.01 0 5.552-2.052 6.292-4.864.083-.334.313-.604.635-.73.875-.343 1.709-.75 2.49-1.197Z"
      fill="#F97801"
    />
  </svg>
);

const JobIconMemo = memo(JobIcon);
export default JobIconMemo;
