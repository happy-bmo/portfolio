import { Container, Grid, GridItem } from '@chakra-ui/react'
import Info from './info'
import Article from './article'
const Content = () => {
  return (
    <Container maxW={{base: "sm",md: "md", lg: "1000px"}} mx="auto" pt="80px">
      <Grid 
        templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} 
        gap={4}
        position="relative"
      >
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <Info/>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 2 }}>
          <Article/>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Content