import React from 'react';
import HeroImg from '../../assets/All Images/P3OLGJ1 copy 1.png'

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-content-area">
                <h2 className="hero-title">
                    One Step Closer To Your <span className='text-[#9873FF]'>Dream Job</span>
                </h2>
                <p className="hero-desc">
                    Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>
                <button className="hero-btn">Get started</button>
            </div>
            <div className="hero-img-area">
                <img className='hero-img' src={HeroImg} alt="" />
            </div>
        </div>
    );
};

export default Hero;