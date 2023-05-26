import React from 'react';

const Category = ({category}) => {
    const {categoryLogo, categoryName, available} = category
    return (
        <div className='category-card'>
            <div className="category-logo">
                <img src={categoryLogo} alt="" />
            </div>
            <h3 className="category-title">
                {categoryName}
            </h3>
            <h6 className="job-available">
                {available}+ Jobs Available
            </h6>
        </div>
    );
};

export default Category;