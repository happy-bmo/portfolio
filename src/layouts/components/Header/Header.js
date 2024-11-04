import React from 'react';
import { Box, Flex, Stack, Link, useColorMode, IconButton, useDisclosure, Button } from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';

function Header() {
    const MotionBox = motion(Box);
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box as="header" w="100%" position="fixed" top="0" zIndex="1000" className="backdrop-blur-xl">
            <Flex className="navbar" h={16} alignItems="center" justifyContent="space-between" mx={5}>
                <Box className="nav-item">
                    <Link
                        as={NavLink}
                        to="/"
                        _hover={{ textDecoration: 'none' }}
                        sx={{
                            fontSize: 'xl',
                            fontWeight: 'bold',
                        }}
                    >
                        Portfolio
                    </Link>
                </Box>
                <Flex className="nav-item" display={{ base: 'none', md: 'flex' }} alignItems="center">
                    <Stack direction="row" spacing={7}>
                        <Link
                            as={NavLink}
                            to="/projects"
                            sx={{ fontSize: '18px' }}
                            px={2}
                            py={1}
                            _hover={{ textDecoration: 'underline' }}
                        >
                            Projects
                        </Link>
                        <Link
                            href="https://github.com/happy-bmo"
                            sx={{ fontSize: '18px', display: 'flex', alignItems: 'center' }}
                            px={2}
                            py={1}
                            _hover={{ textDecoration: 'underline' }}
                            isExternal
                        >
                            <svg
                                style={{ marginRight: '5px' }}
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 512 512"
                                aria-hidden="true"
                                focusable="false"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
                            </svg>
                            Sources
                        </Link>
                    </Stack>
                </Flex>
                <Flex className="btn-theme-change">
                    <IconButton
                        colorScheme={colorMode === 'dark' ? 'orange' : 'purple'}
                        mx={2}
                        isRound={true}
                        size="md"
                        icon={colorMode === 'light' ? <MoonIcon color="white" /> : <SunIcon color="black" />}
                        aria-label="Toggle Color Mode"
                        onClick={toggleColorMode}
                    />
                    <IconButton
                        display={{ base: 'flex', md: 'none' }}
                        size="md"
                        onClick={isOpen ? onClose : onOpen}
                        icon={isOpen ? <HamburgerIcon /> : <HamburgerIcon />}
                        variant="outline"
                        aria-label="Toggle Navigation"
                    />
                </Flex>
            </Flex>
            {/* Mobile */}
            <AnimatePresence>
                {isOpen && (
                    <MotionBox
                        display={{ base: 'flex', md: 'none' }}
                        flexDirection="column"
                        position="fixed"
                        right="0px"
                        initial={{ opacity: 0, x: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, y: 0 }}
                        transition={{ duration: 0.15 }}
                        borderRadius="md"
                        bg="#a7876d"
                        mr="20px"
                        p={2}
                        background="rgba(255, 255, 255, 0.2)"
                        boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
                        backdropFilter="blur(10px)"
                        border="1px solid rgba(255, 255, 255, 0.3)"
                    >
                        <Stack direction="column">
                            <Button variant="ghost">
                                <Link
                                    as={NavLink}
                                    to="/projects"
                                    sx={{ fontSize: '18px' }}
                                    _hover={{ textDecoration: 'none' }}
                                >
                                    Projects
                                </Link>
                            </Button>
                            <Button variant="ghost">
                                <Link
                                    href="https://github.com/happy-bmo"
                                    sx={{ fontSize: '18px', display: 'flex', alignItems: 'center' }}
                                    _hover={{ textDecoration: 'none' }}
                                    isExternal
                                >
                                    <svg
                                        style={{ marginRight: '5px' }}
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 512 512"
                                        aria-hidden="true"
                                        focusable="false"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
                                    </svg>
                                    Sources
                                </Link>
                            </Button>
                        </Stack>
                    </MotionBox>
                )}
            </AnimatePresence>
        </Box>
    );
}

export default Header;
