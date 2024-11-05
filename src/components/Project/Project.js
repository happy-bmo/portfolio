import { Box, Divider, Image, Link } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';
import { GitHubIcon } from '~/components/Icons';

const Project = ({ src, name, github }) => {
    return (
        <Link href={github}>
            <Image
                backgroundColor="rgba(255, 255, 255, 0.1)"
                border="none"
                backdropFilter="blur(20px)"
                borderRadius="16px"
                padding="0"
                boxShadow="0 4px 30px rgba(0, 0, 0, 0.2)"
                minWidth="75%"
                transition="transform 0.3s ease"
                _hover={{
                    transform: 'scale(1.04)',
                    transformOrigin: 'center',
                }}
                src={src}
                alt={name + 'img'}
                maxW="100%"
                h="100%"
            />
            <Divider my="10px" />
            <Box className="flex justify-center">
                <GitHubIcon w="2em" h="2em" />
            </Box>
        </Link>
    );
};

Project.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
};

export default Project;
