// import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import editorInsight1 from '../../assets/editorsInsight1.png'
import editorInsight2 from '../../assets/editorsInsight2.png'
import editorInsight3 from '../../assets/editorsInsight3.png'
import { BsCalendar } from "react-icons/bs";
import moment from 'moment';


const EditorInsight = () => {
    return (
        <div className='mt-5'>
            <h4 className='mb-3'>Editors Insights</h4>

            <Row xs={1} md={2} lg={3} className="g-4">
                <Col>
                    <Card className='border-0'>
                        <Card.Img className='rounded-0' variant="top" src={editorInsight1} />
                        <Card.Body className='px-0 '>
                            <Card.Title className='py-4'>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text className='text-gray-400 text-2xl flex'>
                                <BsCalendar></BsCalendar>
                                <span className='h6 ms-3'>{moment().format('MMM DD, YYYY')}</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='border-0'>
                        <Card.Img className='rounded-0' variant="top" src={editorInsight2} />
                        <Card.Body className='px-0 '>
                            <Card.Title className='py-4'>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text className='text-gray-400 text-2xl flex'>
                                <BsCalendar></BsCalendar>
                                <span className='h6 ms-3'>{moment().format('MMM DD, YYYY')}</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='border-0'>
                        <Card.Img className='rounded-0' variant="top" src={editorInsight3} />
                        <Card.Body className='px-0 '>
                            <Card.Title className='py-4'>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text className='text-gray-400 text-2xl flex items-center'>
                                <BsCalendar></BsCalendar>
                                <span className='h6 ms-3'>{moment().format('MMM DD, YYYY')}</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>

    );
};

export default EditorInsight;