import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faDollarSign, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';

const Job = ({ job, from }) => {
    const { jobTitle, companyName, jobType, jobTime, location, salary, companyLogo, id } = job
    return (
        <div className={`${from === 'AppliedJobs' ? 'applied-job-card' : 'job-card'}`}>
            <div className="job-card-logo">
                <img src={companyLogo} alt="" />
            </div>
            <div className="job-card-info">
                <h3 className="job-card-title">
                    {jobTitle}
                </h3>
                <h6 className="company-name">
                    {companyName}
                </h6>
                <div className="job-type-area">
                    <span className='job-type'>{jobType}</span>
                    <span className='job-type'>{jobTime}</span>
                </div>
                <div className="job-card-simple-info">
                    <div className="location">
                        <FontAwesomeIcon icon={faLocationDot} className='text-[rgba(126,144,254,1)]' />
                        <span>{location}</span>
                    </div>
                    <div className="salary">
                        <FontAwesomeIcon icon={faDollarSign} className='text-[rgba(126,144,254,1)]'  />
                        <span>Salary : {salary}</span>
                    </div>
                </div>
            </div>
            <div className="job-card-footer">
                <Link to={`/job/${id}`}>
                    <button className="job-details-btn">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Job;