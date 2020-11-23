import { Flex, ThemeProvider, useColorMode } from 'theme-ui';
import theme from '../themes'

const ColorModeToggle = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <button
      style={{
        position: 'fixed',
        top: 10,
        right: 10,
        display: 'inline-block',
        marginBottom: '10px',
        zIndex: 100
      }}
      onClick={e => {
        setColorMode(colorMode === 'default' ? 'light' : 'default')
      }}>
      Toggle Theme {colorMode === 'default' ? 'Light' : 'Default'}
    </button>
  )
}

const Wrapper = ({children}) => (
  <Flex p={2} m={0} sx={{
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center'
  }}>
    {children}
  </Flex>
)

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>
    <ColorModeToggle />
    <Wrapper>
      {storyFn()}
    </Wrapper>
  </ThemeProvider>
);

export default ThemeDecorator;
