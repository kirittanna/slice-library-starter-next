import * as React from "react";
import styled from "@emotion/styled";

const SVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="twitter_svg__icon twitter_svg__icon-tabler twitter_svg__icon-tabler-brand-twitter"
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
    <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 00.497-3.753C20.18 7.773 21.692 5.25 22 4.009z" />
  </svg>
);

const SvgTwitter = styled(SVG)`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  color: ${(props) => (props.color ? props.color : props.theme.text)};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
export default SvgTwitter;
