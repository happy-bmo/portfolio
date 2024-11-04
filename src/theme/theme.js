import { extendTheme } from '@chakra-ui/react';

// Extend the theme
const theme = extendTheme({
  semanticTokens: {
    colors: {
      "chakra-body-text": {
        _light: "#202023",
        _dark: "white",
      },
      "chakra-body-bg": {
        _light: "white",
        _dark: "#2d2d30",
      },
    },
  },
  fonts: {
    heading: "'OpenSans', sans-serif",
    textName: "'OpenSans', sans-serif",
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
  components: {
    Button: {},
    Text: {
      baseStyle: {
        fontSize: 'md',
        fontWeight: '300'
      },
      sizes: {
        sm: {
          fontSize: 'md',
        },
        md: {
          fontSize: 'lg',
        },
        lg: {
          fontSize: 'xl',
        },
        xl: {
          fontSize: '2xl',
        },
      },
      defaultProps: {
        size: 'lg',
      },
    },
    Heading: {
      baseStyle: {
        fontSize: 'xl',
        fontWeight: '500'
      },
      sizes: {
        sm: {
          fontSize: 'md',
        },
        md: {
          fontSize: 'lg',
        },
        lg: {
          fontSize: 'xl',
        },
        xl: {
          fontSize: '2xl',
        },
      },
      defaultProps: {
        size: 'lg',
      },
    },
  },
});

export default theme;