import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <>
            <div className="section-content">
                <h2 className="section-title">
                    Job Category List
                </h2>
                <p className="section-desc">
                    Explore thousands of job opportunities with all the information you need. Its your future
                </p>
            </div>
            <div className='category-container'>
                {categories.map(category => <Category key={category.id} category={category}></Category>)}
            </div>
        </>
    );
};

export default Categories;