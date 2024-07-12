// theme.js
import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    brand: {
      50: '#e0f2ff',
      100: '#b3d9ff',
      200: '#80bfff',
      300: '#4da6ff',
      400: '#1a8cff',
      500: '#0073e6',
      600: '#0059b3',
      700: '#003d80',
      800: '#00264d',
      900: '#00131a',
    },
    // Các màu khác nếu cần
  },
});

export default customTheme;
