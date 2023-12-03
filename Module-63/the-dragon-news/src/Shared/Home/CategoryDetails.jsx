// import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from './NewsCard';

const CategoryDetails = () => {
    const {id} = useParams()
    const categoryNews = useLoaderData()
    return (
        <div>
            <h5 className='font-semibold'>Dragon News Home {categoryNews.length}</h5>
            {categoryNews.map(news => <NewsCard
            key={id}
            news={news}
            >
            </NewsCard>)}

        </div>
    );
};

export default CategoryDetails;