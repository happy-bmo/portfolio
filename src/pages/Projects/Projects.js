import { Grid, GridItem } from '@chakra-ui/react';

import Widget from '~/components/Widget';
import Project from '~/components/Project';

function Projects() {

    const myProjects = [
        {
            src: 'https://static.vecteezy.com/system/resources/previews/017/798/306/non_2x/search-no-result-document-file-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg',
            name: 'Waiting for my upload project :( ',
            github: 'https://github.com/happy-bmo/tiktok-ui',
        },
        {
            src: 'https://static.vecteezy.com/system/resources/previews/017/798/306/non_2x/search-no-result-document-file-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg',
            name: 'Waiting for my upload project :( ',
            github: 'https://github.com/happy-bmo/',
        },
        {
            src: 'https://static.vecteezy.com/system/resources/previews/017/798/306/non_2x/search-no-result-document-file-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg',
            name: 'Waiting for my upload project :( ',
            github: 'https://github.com/happy-bmo/',
        },
        {
            src: 'https://static.vecteezy.com/system/resources/previews/017/798/306/non_2x/search-no-result-document-file-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg',
            name: 'Waiting for my upload project :( ',
            github: 'https://github.com/happy-bmo/',
        },
        {
            src: 'https://static.vecteezy.com/system/resources/previews/017/798/306/non_2x/search-no-result-document-file-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg',
            name: 'Waiting for my upload project :( ',
            github: 'https://github.com/happy-bmo/',
        },
        {
            src: 'https://static.vecteezy.com/system/resources/previews/017/798/306/non_2x/search-no-result-document-file-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg',
            name: 'Waiting for my upload project :( ',
            github: 'https://github.com/happy-bmo/',
        },
    ];
    // Khi nao co nhieu github link khac thi xoa index de toi uu performance
    return (
        <Grid templateColumns="repeat(4, 1fr)" gap={4} position="relative">
            {/* PROJECT */}
            {myProjects.map((proj, index) => {
                return (
                    <GridItem key={index} colSpan={{ base: 4, md: 1 }}>
                        <Widget heading={proj.name}>
                            <Project src={proj.src} name={proj.name} github={proj.github} />
                        </Widget>
                    </GridItem>
                );
            })}
        </Grid>
    );
}

export default Projects;
