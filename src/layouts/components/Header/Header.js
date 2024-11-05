import React from 'react';
import {
    Box,
    Flex,
    Stack,
    Link,
    useColorMode,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Hide,
    Show,
    Text,
    Heading,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import { GitHubIcon } from '~/components/Icons';
function Header() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box as="header" w="100%" position="fixed" top="0" zIndex="1000" className="backdrop-blur-xl">
            <Flex className="navbar" display="flex" h={14} alignItems="center" justifyContent="space-between" mx={5}>
                {/* Logo */}
                <Box className="nav-item">
                    <NavLink to="/" _hover={{ textDecoration: 'none' }}>
                        <Heading>Portfolio</Heading>
                    </NavLink>
                </Box>
                {/* NavItem */}
                <Hide below="md">
                    <Flex className="nav-item">
                        <Stack direction="row" spacing={7} alignItems="center">
                            <NavLink to="/projects" fontSize="18px" px={2} py={1}>
                                <Text ml="5px" as="span" _hover={{ textDecoration: 'underline' }}>
                                    Projects
                                </Text>
                            </NavLink>
                            <Link
                                href="https://github.com/happy-bmo"
                                fontSize="18px"
                                display="flex"
                                alignItems="center"
                                px={2}
                                py={1}
                                _hover={{ textDecoration: 'underline' }}
                                isExternal
                            >
                                <GitHubIcon />
                                <Text ml="5px" as="span">
                                    Sources
                                </Text>
                            </Link>
                        </Stack>
                    </Flex>
                </Hide>
                <Flex className="nav-item">
                    {/* ChangeTheme */}
                    <IconButton
                        colorScheme={colorMode === 'dark' ? 'orange' : 'purple'}
                        isRound={true}
                        size="md"
                        icon={colorMode === 'light' ? <MoonIcon color="white" /> : <SunIcon color="black" />}
                        aria-label="Toggle Color Mode"
                        onClick={toggleColorMode}
                    />
                    {/* Mobile */}
                    <Show below="sm">
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label="Options"
                                icon={<HamburgerIcon />}
                                variant="outline"
                                ml="10px"
                            />
                            <MenuList>
                                <MenuItem as={NavLink} to="/projects" display="block">
                                    <Text as="span">Projects</Text>
                                </MenuItem>
                                <MenuItem display="block">
                                    <Link
                                        href="https://github.com/happy-bmo"
                                        display="flex"
                                        alignItems="center"
                                        _hover={{ textDecoration: 'none' }}
                                        isExternal
                                    >
                                        <GitHubIcon w="1em" h="1em" />
                                        <Text ml="2px" as="span">
                                            Source
                                        </Text>
                                    </Link>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Show>
                </Flex>
            </Flex>
        </Box>
    );
}

export default Header;
