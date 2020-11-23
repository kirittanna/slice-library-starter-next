/** @jsx jsx */
import { jsx, Button } from 'theme-ui'

const ThemeButton = ({ children, styles, variant }) => {
  return (
    <Button sx={{
      display: 'inline-block',
      fontWeight: 'bold',
      position: 'relative',
      textAlign: 'center',
      textDecoration: 'none',
      verticalAlign: 'middle',
      m: 0,
      px: 3,
      py: 2,
      background: 'none',
      border: 'solid 2px',
      variant: `buttons.${variant}`,
      transition: 'width 300ms',

      ':focus': {
        outline: 'none'
      },

      '::after': {
        content: '""',
        position: 'absolute',
        zIndex: -1,
        left: 0,
        top: 0,
        width: '0',
        height: '100%',
        transition: 'width 300ms',
        backgroundColor: 'highlight'
      },

      '&:hover': {
        color: 'white'
      },

      ':hover:after': {
        width: '100%'
      },

      ...styles
    }}>{children}</Button>
  )
}

ThemeButton.defaultProps = {
  variant: 'primary',
}

export default ThemeButton;
