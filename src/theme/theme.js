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
        _dark: "#202023",
      },
    },
  },
  fonts: {
    heading: "'Fira Sans', sans-serif",
    textName: "'Signika', sans-serif",
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
    Heading: {
      baseStyle: {
        textDecoration: 'underline',
        textDecorationColor: 'gray',
        textUnderlineOffset: '4px',
        fontSize: '3xl',
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