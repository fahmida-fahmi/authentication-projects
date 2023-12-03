// import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import RightNav from '../RightNav';
import { Outlet } from 'react-router-dom';
import SIteTitle from '../Header/SIteTitle';
const NewsLayout = () => {
    return (
        <div>
            <SIteTitle/>
            <Container >
                <Row className='mt-5'>
                    <Col lg={9}>
                        
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NewsLayout;