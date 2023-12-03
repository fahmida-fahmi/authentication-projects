// import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import EditorInsight from './EditorInsight';


const News = () => {
    const news = useLoaderData()
    const { title, image_url, details,category_id } = news
    return (
        <div>
            <Card className='p-4'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body className='px-0'>
                    <Card.Title >
                        <h1 className='text-3xl font-bold py-4'>{title}</h1>
                    </Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Button variant="primary" className='my-2 px-4 rounded-0 bg-danger border-0'>
                        <Link className='nav-link' to={`/category/${category_id}`}>
                            <BsArrowLeft className='inline text-2xl' /> <span>All news in this category</span>
                        </Link>
                    </Button>
                </Card.Body>
            </Card>
            <EditorInsight></EditorInsight>
        </div>
    );
};

export default News;    