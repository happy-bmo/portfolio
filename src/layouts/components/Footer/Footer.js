import React from 'react'
import { Text, Flex } from '@chakra-ui/react'
const Footer = () => {
  return (
    <Flex justifyContent="center" py={5}>
      <Text sx={{ color: "#CCC", fontSize: "14px" }}>
      &#169; Copyright Zeus 2024
      </Text>
    </Flex>
  )
}

export default Footer