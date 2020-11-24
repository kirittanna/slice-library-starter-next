/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx, Button } from 'theme-ui'
import { Icons } from '../../assets/icons'

const AnimatedButton = styled(Button)`
  letter-spacing: 1px;
  background: none;
  color: ${({theme}) => theme.colors.text};
  position: relative;
  outline: none;
  border: none;
  height: 50px;
  width: 190px;
  font-size: 14px;
  z-index: 2;
  transition: 100ms 200ms ease-out all;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 55%;
    background: ${({theme}) => theme.colors.accent};
    z-index: -1;
    transition: .3s ease-out all;
  }
  &:after {
    content: '';
    position: absolute;
    left: -5%;
    top: 0%;
    height: 100%;
    width: 5%;
    background: white;
    z-index: -1;
    transition: .4s 20ms ease-out all;
  }
  &:hover {
    color: ${({theme}) => theme.colors.primary};
    cursor: pointer;
    &:before {
      left: 50%;
      width: 50%;
      background: ${({theme}) => theme.colors.highlight};
    }
    &:after {
      left: 100%;
      width: 70%;
    }
  }
`

const ThemeButton = ({ children, styles }) => (
  <AnimatedButton style={styles}>
    {children}
    <span className="icon">{React.createElement(Icons.Chevron)}</span>
  </AnimatedButton>
)

ThemeButton.defaultProps = {

}

export default ThemeButton;
