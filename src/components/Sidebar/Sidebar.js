import { Card, Flex, Avatar, Text } from '@chakra-ui/react'
import React from 'react'


function Sidebar() {
    return (
        <Card 
            sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)', /* Màu nền trắng với độ trong suốt */
                border: 'none',
                backdropFilter: 'blur(20px)', /* Làm mờ các phần tử phía sau */
                borderRadius: '15px', /* Bo tròn các góc */
                padding: '20px', /* Thêm khoảng cách bên trong */
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)' /* Tạo bóng cho phần tử */}}
        >
            <Flex direction="column" alignItems="center">
            <Avatar
                src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/08/hinh-nen-meo-5.jpg"
                size="xl"
                width="100px"
                height="100px"
                border="solid 1px #CCC"
            />
            <Flex className="introduce flex justify-center i" alignItems="center" flexDirection="column">
                <Text fontFamily="textName" fontSize="3xl" my={2}>
                    Hello, World.
                </Text>
                <Text>Its Duy</Text>
            </Flex>
        </Flex>
        </Card>
    );
}

export default Sidebar;
