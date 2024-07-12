import { Flex, Avatar, Text } from '@chakra-ui/react'
import React from 'react'

const Info = () => {
  return (
    <Flex direction="column" alignItems="center">
        <Avatar 
            src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/08/hinh-nen-meo-5.jpg" 
            size="xl"
            width="100px"
            height="100px"
            border="solid 1px #CCC"
        />
        <Flex alignItems="center" flexDirection="column">
            <Text fontFamily="textName" fontSize="3xl" my={2}>
                Minh Duy
            </Text>
            <Text>
              I&apos;m a fullstack developer
            </Text>
        </Flex>
    </Flex>
  )
}

export default Info