/** @jsx jsx */
import { jsx, Link } from 'theme-ui'
import { Icons } from '../../assets/icons'

const styles = {
  default: {
    position: 'relative',
    display: 'inline',
    color: 'primary',
    textDecoration: 'none',
    transition: 'transform 200ms ease-out'
  },
  icon: {
    marginRight: '5px',

    '&:hover': {
      color: 'secondary'
    }
  },
  short: {
    '&:hover': {
      opacity: 0.9,
      '&::after, &::before': {
        width: '100%',
        left: 0
      }
    },

    '::after, ::before': {
      content: '""',
      position: 'absolute',
      top: 'calc(100% + 2px)',
      width: 0,
      right: 0,
      height: '3px',
    },

    '::before': {
      transition: 'width .4s cubic-bezier(0.51, 0.18, 0, 0.88) .1s',
      backgroundColor: 'primary',
    },

    '::after': {
      transition: 'width .2s cubic-bezier(0.29, 0.18, 0.26, 0.83)',
      backgroundColor: 'secondary'
    }
  },
  multiline: {
    color: 'primary',
    transition: `all .4s linear`,
    textDecoration:'none',
    paddingBottom:'5px',
    background: theme => `linear-gradient(to right, ${theme.colors.primary} 0%, ${theme.colors.secondary} 98%)`,
    backgroundSize:'0px 2px',
    backgroundRepeat:' no-repeat',
    backgroundPosition:'left 85%',

    '&:hover': {
      backgroundSize: '100% 2px'
    }
  }
}

const ThemeLink = ({ children, variant, ...props }) => {
  return (
    <Link {...props} sx={{
      ...styles.default,
      ...styles[variant]
    }}>{children}{variant !== 'icon' && <Icons.Link margin="0 0 0 5px" />}</Link>
  )
}

ThemeLink.defaultProps = {
  /** Variants
   * short (default)
   * multiline (use for multiline text only)
   */
  variant: 'short'
}

export default ThemeLink;
