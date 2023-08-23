import * as React from "react";
const MinusIcon = ({ width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width ? width : 24}
    height={height ? height : 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-minus"
  >
    <line x1={5} y1={12} x2={19} y2={12} />
  </svg>
);
export default MinusIcon;
