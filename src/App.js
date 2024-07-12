import { Box } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/static/navbar';
import Content from './components/main/contents';
function App() {

  return (
    <Box as="main">
      <Navbar/>
      <Content/>
    </Box>
  );
}

export default App;
