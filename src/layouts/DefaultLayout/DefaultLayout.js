import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
function DefaultLayout({ children }) {
    return (
        <Box className="wrapper">
            <Header />
            <Box className="content">{children}</Box>
            <Footer />
        </Box>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired, // children có thể là bất kỳ kiểu dữ liệu nào hợp lệ cho React
};
export default DefaultLayout;
