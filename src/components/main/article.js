import { Heading, Text, Box} from '@chakra-ui/react'
function Article() {
  return (
    <Box>
      <Box>
        <Heading>
          Work
        </Heading>
        <Text my={2} sx={{ textIndent: "30px" }}>
          Takuya is a freelance and a full-stack developer based in Osaka with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his camera. Currently, he is living off of his own product called
        </Text>
      </Box>
      <Box>
        <Heading>
          Bio
        </Heading>
        <Text my={2} sx={{ textIndent: "30px" }}>
          ...
        </Text>
      </Box>
      <Box>
        <Heading>
          Habits
        </Heading>
        <Text my={2} sx={{ textIndent: "30px" }}>
          ...
        </Text>
      </Box>
      <Box>
        <Heading>
          Contact to me
        </Heading>
        <Text my={2} sx={{ textIndent: "30px" }}>
          ...
        </Text>
      </Box>
    </Box>
    
  )
}

export default Article