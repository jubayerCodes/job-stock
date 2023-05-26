import React, { useContext, useState } from 'react';
import { ShowAllContext } from '../Home/Home';
import Job from '../Job/Job';

const Jobs = () => {
    const data = useContext(ShowAllContext)
    const slicedData = data.slice(0, 4)
    const [jobs, setJobs] = useState(slicedData)

    const handleShowAll = () => {
        setJobs(data)
    }

    const handleShowLess = () =>{
        setJobs(slicedData)
    }


    return (
        <>
            <div className="section-content">
                <h2 className="section-title">
                    Featured Jobs
                </h2>
                <p className="section-desc">
                    Explore thousands of job opportunities with all the information you need. Its your future
                </p>
            </div>
            <div className='jobs-container'>
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            {
                jobs.length <= 4 ?
                <button className="showAll-btn" onClick={handleShowAll}>Show All</button>
                :
                <button className="showAll-btn" onClick={handleShowLess}>Show Less</button>
            }
        </>
    );
};

export default Jobs;