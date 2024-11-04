import { Card, CardBody, CardHeader, Heading, Text} from '@chakra-ui/react'
import PropTypes from 'prop-types'
function Widget({ heading, body, children }) {
    return (
            <Card
                className="flex justify-center items-center min-h-[100%]"
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)', /* Màu nền trắng với độ trong suốt */
                    border: 'none',
                    backdropFilter: 'blur(20px)', /* Làm mờ các phần tử phía sau */
                    borderRadius: '15px', /* Bo tròn các góc */
                    padding: '20px', /* Thêm khoảng cách bên trong */
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)' /* Tạo bóng cho phần tử */}}
                variant="outline">
                <CardHeader>
                    <Heading>
                        { heading }
                    </Heading>
                </CardHeader>
                <CardBody>
                    { children }
                    <Text>
                        { body }
                    </Text>
                </CardBody>
            </Card>
     );
}

Widget.propTypes = {
    heading: PropTypes.string.isRequired,
    body: PropTypes.string,
    children: PropTypes.node
}

export default Widget;
