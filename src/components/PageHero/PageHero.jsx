import React from 'react';

const PageHero = ({title}) => {
    return (
        <section className='page-hero'>
            <h2 className="page-hero-title">
                {title}
            </h2>
        </section>
    );
};

export default PageHero;