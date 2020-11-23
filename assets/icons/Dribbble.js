import * as React from "react";
import styled from "@emotion/styled";

const SVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="dribbble_svg__icon dribbble_svg__icon-tabler dribbble_svg__icon-tabler-brand-dribbble"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <circle cx={12} cy={12} r={9} />
    <path d="M9 3.6c5 6 7 10.5 7.5 16.2M6.4 19c3.5-3.5 6-6.5 14.5-6.4M3.1 10.75c5 0 9.814-.38 15.314-5" />
  </svg>
);

const SvgDribbble = styled(SVG)`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  color: ${(props) => (props.color ? props.color : "#ccc")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
export default SvgDribbble;
