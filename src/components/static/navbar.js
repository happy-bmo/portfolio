// Header.js
import React from 'react';
import { Box, Flex, Text, Stack, Link, useColorMode, IconButton, useDisclosure, Button } from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';
import { FaGithub } from 'react-icons/fa'

const Header = () => {
  
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
      <Box 
          as='nav'
          w='100%'
          position='fixed'
          top='0'
          
          zIndex='1000'
          backdropFilter='blur(10px)'
      >
        <Flex h={16} alignItems="center" justifyContent="space-between" mx={5}>
          <Box>
            <Link href='localhost:3000' _hover={{ textDecoration:"none" }}>
              <Text fontSize="xl" fontWeight="bold" >
                MINH_DUY
              </Text>
            </Link>
          </Box>
          <Flex display={{ base: 'none', md: 'flex' }} alignItems="center">
            <Stack direction="row" spacing={7}>
              <Link href="#home" style={{fontSize: "18px"}} px={2} py={1} _hover={{ textDecoration: "underline" }}>
                About me
              </Link>
              <Link href="#contact" style={{fontSize: "18px"}} px={2} py={1} _hover={{ textDecoration: "underline" }}>
                Projects
              </Link>
              <Link href="https://github.com/happy-bmo" style={{fontSize: "18px"}} px={2} py={1} _hover={{ textDecoration: "underline" }} isExternal>
                Github
              </Link>
            </Stack>
          </Flex>
          <Flex>
            <IconButton
              colorScheme={ colorMode === "dark" ? "orange" : "purple"}
              mx={2}
              isRound={true}
              size="md"
              icon={colorMode === 'light' ? <MoonIcon color='white' />: <SunIcon color='black' />}
              aria-label="Toggle Color Mode"
              onClick={toggleColorMode}
            />
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              size="md"
              onClick={isOpen ? onClose : onOpen}
              icon={isOpen ? <HamburgerIcon /> : <HamburgerIcon/>}
              variant="outline"
              aria-label="Toggle Navigation"
            />
          </Flex>
        </Flex>
        {/* Mobile */}
        {isOpen && (
          <Box
            display={{ base:'block', md:'none'}}
            position='fixed'
            top='60px'
            w='100%'
            zIndex={1000}
          >
            <Stack direction='column' spacing={7}
              float='right'
              borderRadius='12px'
              p={5}
              mr='24px'
              background='rgba(255, 255, 255, 0.2)'
              boxShadow='0 4px 30px rgba(0, 0, 0, 0.1)'
              backdropFilter='blur(10px)'
              border='1px solid rgba(255, 255, 255, 0.3)'
              textAlign='center'
            >
              <Link href="#home">
                <Button variant="ghost" width="100%">
                  About me
                </Button>
              </Link>
              <Link href="#contact">
                <Button variant="ghost">
                  Projects
                </Button>
              </Link>
              <Link href="https://github.com/happy-bmo"isExternal>
                <IconButton aria-label="" icon={<FaGithub/>} size="md" px={2} py={1} variant="ghost"/>
              </Link>
            </Stack>
          </Box>
        )}
      </Box>
    
  );
};

export default Header;
