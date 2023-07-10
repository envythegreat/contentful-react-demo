import * as React from "react"
const SearchIcon = ({width, height, color}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width ? width : 24}
    height={width ? height : 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-search"

  >
    <circle cx={11} cy={11} r={8} />
    <line x1={21} y1={21} x2={16.65} y2={16.65} />
  </svg>
)
export default SearchIcon