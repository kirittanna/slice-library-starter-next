const theme = {
  breakpoints: [
    '36em', '48em', '62em', '75em',
  ],
  badges: {
    outline: {
      color: 'primary',
      bg: 'accent',
      borderRadius: '5px'
    },
  },
  buttons: {
  },
  colors: {
    text: '#eee',
    background: '#0b0c10',
    primary: '#fff',
    secondary: '#ddd',
    highlight: 'rgb(139, 0, 0)',
    accent: '#c89666',
    lightgrey: '#F5F5F5',
    darkgrey: '#111111',
    grey100: '#C6C6C6',
    grey200: '#AFAFAF',
    grey300: '#989898',
    grey400: '#808080',
    grey500: '#676767',
    grey600: '#4B4B4C',
    modes: {
      light: {
        text: '#111',
        background: '#ffffff',
        primary: '#000',
        secondary: '#111'
      }
    }
  },
  fonts: {
    heading: 'Oxygen, sans-serif',
    body: 'Noto Serif, serif'
  },
  fontSizes: [
    9, 12, 14, 16, 18, 24, 32, 48, 64, 72,
  ],
  fontWeights: {
    body: 300,
    heading: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  text: {
    animated: {
      fontFamily: 'body',
      fontSize: [5, 6],
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      color: 'primary'
    },
    eyebrow: {
      fontFamily: 'body',
      fontSize: [0],
      textTransform: 'uppercase',
      letterSpacing: '0.5em',
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    p: {
      fontSize: [1, 2],
    },
    h1: {
      variant: 'text.heading',
      fontSize: [6, 7, 8],
    },
    h2: {
      variant: 'text.heading',
      fontSize: [5, 6],
    },
    h3: {
      variant: 'text.heading',
      fontSize: [4, 5],
    },
    h4: {
      variant: 'text.heading',
      fontSize: [3, 4],
    },
    h5: {
      variant: 'text.heading',
      fontSize: [2, 3],
    },
    h6: {
      variant: 'text.heading',
      fontSize: [1],
    },
  },
}

export default theme;
