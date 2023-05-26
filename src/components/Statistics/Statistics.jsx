import React from 'react';
import PageHero from '../PageHero/PageHero';
import Chart from '../Chart/Chart';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const data = useLoaderData()
    return (
        <>
            <PageHero title="Statistics"></PageHero>
            <section className="statistics flex justify-center items-center flex-col mb-24">
                <Chart data={data}></Chart>
            </section>
        </>
    );
};

export default Statistics;