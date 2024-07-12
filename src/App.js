import { Box } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/static/navbar';
import Content from './components/main/contents';
import { useColorModeValue } from '@chakra-ui/react';
function App() {
  const bg = useColorModeValue('white', '#202023')
  const color = useColorModeValue('#202023', 'white')
  return (
    <Box as="main"
    bg={bg} 
    color={color}
    >
      <Navbar/>
      <Content/>
    </Box>
  );
}

export default App;
