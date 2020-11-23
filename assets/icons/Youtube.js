import * as React from "react";
import styled from "@emotion/styled";

const SVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="youtube_svg__icon youtube_svg__icon-tabler youtube_svg__icon-tabler-brand-youtube"
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
    <rect x={3} y={5} width={18} height={14} rx={4} />
    <path d="M10 9l5 3-5 3z" />
  </svg>
);

const SvgYoutube = styled(SVG)`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  color: ${(props) => (props.color ? props.color : "#ccc")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
export default SvgYoutube;
