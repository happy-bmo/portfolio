import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// Extend the theme
const theme = extendTheme({
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme} >
    <App />
  </ChakraProvider>
);

reportWebVitals();
