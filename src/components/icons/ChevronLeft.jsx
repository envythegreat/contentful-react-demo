import * as React from "react"
const ChevronLeft = ({width, height}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width ? width : 24}
    height={height ? height :24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-chevron-left"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
)
export default ChevronLeft
