import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';

const SIteTitle = () => {
    return (
        <div>
            <div className='text-center my-5'>
                <img src={logo} alt="" className='mx-auto' />
                <p className='text-2xl my-3'>Journalism Without Fear or Favour</p>
                <p className='text-2xl font-semibold'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </div>
    );
};

export default SIteTitle;