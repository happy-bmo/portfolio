import { Box, Button, Container } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import { useEffect, useState } from 'react';
import { ChevronUpIcon } from '@chakra-ui/icons';

function DefaultLayout({ children }) {
    const [showOnTop, setShowOnTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 100) {
                setShowOnTop(true);
            } else {
                setShowOnTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const BackToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <Box className="wrapper">
            <Header />
            <Box className="content">
                <Container maxW="100%" mx="auto" pt="60px">
                    {children}
                </Container>
            </Box>

            {showOnTop && (
                <Button
                    variant="outline"
                    border="solid 1px #ccc"
                    onClick={BackToTop}
                    position="fixed"
                    bottom="10px"
                    right="20px"
                >
                    <ChevronUpIcon />
                </Button>
            )}
            <Footer />
        </Box>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired, // children có thể là bất kỳ kiểu dữ liệu nào hợp lệ cho React
};
export default DefaultLayout;
