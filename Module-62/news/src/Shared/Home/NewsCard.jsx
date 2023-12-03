import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaRegBookmark, FaShare } from 'react-icons/fa';
import { BsShare, BsBookmark, BsFillEyeFill, BsStarFill,BsStarHalf,BsStar } from "react-icons/bs";
import { Link } from 'react-router-dom';
import moment from 'moment';
import Rating from "react-rating";

const NewsCard = ({ news }) => {
    const { _id, author, title, image_url, details, total_view, rating } = news
    return (
        <div>
            <Card className="mb-5">
                <Card.Header className='p-3 flex justify-between items-center'>
                    <div className='flex items-center'>
                        <img src={author.img} alt="" className='w-10 h-10 rounded-full' />
                        <div className='text-left ps-4'>
                            <p className='mb-0 font-semibold'>{author.name}</p>
                            <p className='mb-0 text-secondary'>{moment(author.published_date).format('YYYY-MM-D')}</p>
                        </div>
                    </div>
                    <div className='flex text-secondary text-2xl'>
                        <BsBookmark className='me-3 cursor-pointer'></BsBookmark>
                        <BsShare className='cursor-pointer'></BsShare>

                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title > <h5 className='py-3 font-semibold'>{title}</h5></Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text className='py-4'>
                        {
                            details.length < 250
                                ?
                                <>{details}</>
                                :
                                <>
                                    {details.slice(0, 250)}...<Link className=' text-orange-400 font-bold no-underline block' to={`/news/${_id}`}>Read more</Link>
                                </>

                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted mx-3 px-0 py-3 bg-white">
                    <div className='h5 flex justify-between'>
                        <div className='flex '>

                            <Rating className='text-orange-400 me-2'
                            placeholderRating={rating.number}
                            emptySymbol={<BsStar></BsStar>}
                            readonly
                            placeholderSymbol={<BsStarFill></BsStarFill>}
                            
                            />

                            

                            {rating.number}
                        </div>
                        <div className='flex items-center'>
                            <BsFillEyeFill className='text-2xl inline me-3' />
                            {total_view}
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;