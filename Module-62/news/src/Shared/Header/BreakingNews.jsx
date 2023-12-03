import React from 'react';
import Marquee from "react-fast-marquee";
import { Button } from 'react-bootstrap';

const BreakingNews = () => {
    return (
        <div>
            <div className='bg-gray-200 flex p-3'>
                <Button variant="danger" className='rounded-0 px-4 '>Latest</Button>
                <Marquee className='' pauseOnHover={true}>
                    I can be a React component, multiple React components, or just some text...
                    I can be a React component, multiple React components, or just some text...
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;