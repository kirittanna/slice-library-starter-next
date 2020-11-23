import * as React from "react";
import styled from "@emotion/styled";

const SVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="behance_svg__icon behance_svg__icon-tabler behance_svg__icon-tabler-brand-behance"
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
    <path d="M3 18V6h4.5a3 3 0 010 6 3 3 0 010 6H3M3 12h4.5M14 13h7a3.5 3.5 0 00-7 0v2a3.5 3.5 0 006.64 1M16 6h3" />
  </svg>
);

const SvgBehance = styled(SVG)`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  color: ${(props) => (props.color ? props.color : "#ccc")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
export default SvgBehance;
