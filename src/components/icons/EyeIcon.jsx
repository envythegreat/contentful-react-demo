import * as React from "react"
const EyeIcon = ({width, height, color}) => (
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
    className="feather feather-eye"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx={12} cy={12} r={3} />
  </svg>
)
export default EyeIcon