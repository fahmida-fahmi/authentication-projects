// import React from 'react';
// import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { id, name } = category
    return (

        <div>
            <Link 
                to={`/category/${id}`} 
                className= 'px-5 py-2 rounded hover:font-semibold text-left hover:bg-gray-200 hover:text-dark nav-link text-gray-200'>
                {name}
            </Link>
        </div>

    );
};

export default Category;