import { Flex, Avatar, Text } from '@chakra-ui/react';
import React from 'react';

function Sidebar() {
    return (
        <Flex direction="column" alignItems="center">
            <Avatar
                src="https://res.cloudinary.com/dv46hy594/image/upload/v1730778905/myAvatar_acv60l.png"
                size="xl"
                width="100px"
                height="100px"
                border="solid 3px #CCC"
                objectFit="cover"
                boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
            />
            <Flex className="introduce flex justify-center i" alignItems="center" flexDirection="column">
                <Text fontFamily="textName" fontSize="3xl" my={2}>
                    Hello, World.
                </Text>
                <Text>Its Duy</Text>
            </Flex>
        </Flex>
    );
}

export default Sidebar;
