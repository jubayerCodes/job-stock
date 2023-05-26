import React, { useEffect, useState } from 'react';
import { getRealAppliedJobs } from '../../utilities/fakedb';
import PageHero from '../PageHero/PageHero';
import Job from '../Job/Job';
import { useLoaderData } from 'react-router-dom';

const AppliedJobs = () => {
    const [filterBy, setFilterBy] = useState('')
    const jobs = useLoaderData()
    const appliedJobs = getRealAppliedJobs(jobs)
    const [filteredJobs, setFilteredJobs] = useState(appliedJobs)

    useEffect(()=>{
        if(filterBy !== ''){
            if(filterBy === 'remote'){
                const newFilteredJobs = appliedJobs.filter(job => job.jobType === 'Remote')
                setFilteredJobs(newFilteredJobs)
            } else if(filterBy === 'onsite') {
                const newFilteredJobs = appliedJobs.filter(job => job.jobType === 'Onsite')
                setFilteredJobs(newFilteredJobs)
            }
        }
    }, [filterBy])


    return (
        <>
            <PageHero title="Applied Jobs"></PageHero>
            <section className="applied-jobs flex flex-col items-end">
                <div className="filter">
                    <div className="dropdown dropdown-hover mb-10">
                        <label tabIndex={0} className="btn m-1 bg-white text-black hover:text-white w-[205px]">{filterBy ? `Filter By - ${filterBy}` : 'Filter By'}</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><button onClick={() => setFilterBy('remote')}>Remote</button></li>
                            <li><button onClick={() => setFilterBy('onsite')}>Onsite</button></li>
                        </ul>
                    </div>
                </div>
                <div className="applied-jobs-container">
                    {
                        filteredJobs.length === 0 && <h1 className='text-4xl font-bold text-center'>No Applied Jobs</h1>
                    }
                    {
                        filteredJobs && filteredJobs.map(job => <Job from="AppliedJobs" key={job.id} job={job}></Job>)
                    }
                </div>
            </section>
        </>
    );
};

export default AppliedJobs;