import  { useEffect, useState } from 'react';
import Category from './Category';

const Left = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error=>{
            console.log(error);
        })
    },[])
    return (
        <div>
            <h5 className='font-semibold'>All Category</h5>
            {categories.map( category =><Category
                key={category.id}
                category ={category}
            > </Category>
            )}
        </div>
    );
};

export default Left;