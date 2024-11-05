import { Button, Link, Text } from '@chakra-ui/react';
import { GitHubIcon, InstagramIcon } from '../Icons';

function Contact() {
    return (
        <>
            <Text>
                <Link href="https://github.com/happy-bmo" isExternal>
                    <Button variant="ghost" color="#f74728" fontSize="18px">
                        <Text as="span" mr={3}>
                            <GitHubIcon />
                        </Text>
                        @happy-bmo
                    </Button>
                </Link>
                <Link href="https://www.instagram.com/yud.mih" isExternal>
                    <Button variant="ghost" color="#f74728" fontSize="18px">
                        <Text as="span" mr={2}>
                            <InstagramIcon />
                        </Text>
                        @yud.mih
                    </Button>
                </Link>
            </Text>
        </>
    );
}

export default Contact;
