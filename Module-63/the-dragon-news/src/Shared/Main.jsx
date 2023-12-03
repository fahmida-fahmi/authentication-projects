// import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Header from './Header/Header';
import Left from './LeftSideBar/Left';
import RightNav from './RightNav';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            
            <Container >
            <Header></Header>
                <Row className='mt-5'>
                    <Col lg={3}>
                        <Left></Left>
                    </Col>
                    <Col lg={6}>
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

export default Main;