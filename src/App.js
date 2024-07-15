import { Box } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/static/navbar';
import Content from './components/main/contents';
import Footer from './components/static/footer';
function App() {

  return (
    <Box as="main">
      <Navbar/>
      <Content/>
      <Footer/>
    </Box>
  );
}

export default App;
