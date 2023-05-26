import React, { createContext, useEffect, useState } from 'react';
import Categories from '../Categories/Categories';
import Jobs from '../Jobs/Jobs';
import { useLoaderData } from 'react-router-dom';
import HomeHero from '../HomeHero/HomeHero';
import { ToastContainer } from 'react-toastify';


export const ShowAllContext = createContext()

const Home = () => {
    const data = useLoaderData()

    return (
        <>
            <ShowAllContext.Provider value={data}>
                <section className='hero'>
                    <HomeHero></HomeHero>
                </section>
                <section className='categories'>
                    <Categories></Categories>
                </section>
                <section className="jobs" id='jobs-section'>
                    <Jobs></Jobs>
                </section>
            </ShowAllContext.Provider>
        </>
    );
};

export default Home;