import { useEffect } from 'react';
import { Box, Container, Grid, GridItem } from '@chakra-ui/react';
import Widget from '~/components/Widget';
import Sidebar from '~/components/Sidebar';
import Project from '~/components/Project';
import AOS from 'aos'
import 'aos/dist/aos.css'
// import Article from '~/components/main/article'
const Home = () => {
    const myBio = {
        heading: 'On my journey in life',
        content:
            'I was graduated at FPT school major Bussiness Developer in 2020. To now I had been working at KIDO Corp for 2 years with role Full-Stack Developer',
    };

    const myProjects = [
      {
        src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        name: "AAA",
        github: "https://github.com/happy-bmo/tiktok-ui",
      },
      {
        src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        name: "BBB",
        github: "https://github.com/happy-bmo/",
      },
      {
        src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        name: "BBB",
        github: "...",
      },
      {
        src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        name: "BBB",
        title: "bbb",
        description: "b",
        github: "...",
      },
    ]

    useEffect(() => {
      AOS.init({
        duration: 1000, // Thời gian hiệu ứng
        once: false,
      });
    }, []);
  
    return (
        <Container maxW={{ base: 'sm', md: 'md', lg: '1000px' }} mx="auto" pt="70px">
            <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(4, 1fr)" gap={4} position="relative">
                <GridItem data-aos="fade-left" data-aos-once="false" colSpan={{ base: 4, md: 1 }}>
                    <Sidebar />
                </GridItem>
                <GridItem data-aos="fade-right" colSpan={{ base: 4, md: 3 }} rowSpan={{ base: 10, md: 1 }}>
                    <Widget className="bio" heading={myBio.heading} body={myBio.content} />
                </GridItem>
                <GridItem data-aos="fade-up" colSpan={{ base: 4, md: 2 }} rowSpan={{ base: 1, md: 1 }}>
                    <Widget heading="TEST TEST TEST TEST" body="BODY BODY BODY" />
                </GridItem>
                <GridItem data-aos="fade-up" colSpan={{ base: 4, md: 2 }} rowSpan={{ base: 1, md: 1 }}>
                    <Widget heading="TEST TEST TEST TEST" body="BODY BODY BODY" />
                </GridItem>
                <GridItem data-aos="fade-up" colSpan={{ base: 4, md: 4 }}>
                    <Widget heading="My projects">
                      <Box className="wrapper inline-flex flex-wrap gap-3 justify-center text-center">
                        {myProjects.map((proj, index) => {
                          return (
                            <Project
                              className="w-1/2 p-2 border-none"
                              key={index}
                              src={proj.src}
                              name={proj.name}
                              github={proj.github}
                            />
                          )
                        })}
                      </Box>
                    </Widget>
                </GridItem>
            </Grid>
        </Container>
    );
};

export default Home;
