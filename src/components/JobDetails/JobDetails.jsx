import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PageHero from '../PageHero/PageHero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faEnvelope, faLocationDot, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { addToDb, getRealAppliedJobs } from '../../utilities/fakedb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {

    const {job, data} = useLoaderData()
    let appliedJobs = getRealAppliedJobs(data)

    // Destructuring
    const { jobDesc, jobResponsibility, educationalRequirements, experience, jobTitle, salary, contact, address } = job
    const { phone, email } = contact


    const handleApplyNow = (job) => {

        const exist = appliedJobs.find(appliedJob => appliedJob.id === job.id)
        if (exist) {
            toast.warn('Already Applied', {
                autoClose: 1000,
                theme: "dark",
            });
        } else {
            addToDb(job)
            appliedJobs = getRealAppliedJobs(data)
        }
    }

    return (
        <>
            <PageHero title={'Job Details'}></PageHero>
            <section className='job-details'>
                <div className="job-details-container">
                    <div className="details-left">
                        <p className="job-description">
                            <b className='text-[#1A1919]'>Job Description:</b> {jobDesc}
                        </p>
                        <p className="job-responsibilities">
                            <b className='text-[#1A1919]'>Job Responsibilities:</b> {jobResponsibility}
                        </p>
                        <p className="educational-requirements">
                            <b className='text-[#1A1919]'>Educational Requirements:</b> <br /><br /> {educationalRequirements}
                        </p>
                        <p className="job-experiences">
                            <b className='text-[#1A1919]'>Experiences:</b> <br /><br /> {experience} Years in this field.
                        </p>
                    </div>
                    <div className="details-right">
                        <div className="details-right-container">
                            <div className="job-information">
                                <h3 className="job-information-title">
                                    Job Details
                                </h3>
                                <hr />
                                <div className="salary mb-3">
                                    <FontAwesomeIcon icon={faDollarSign} className='text-[rgba(126,144,254,1)]' />
                                    <span><b className='text-[#1A1919]'>Salary :</b> {salary} (Per Month)</span>
                                </div>
                                <div className="job-title">
                                    <FontAwesomeIcon icon={faUser} className='text-[rgba(126,144,254,1)]' />
                                    <span><b className='text-[#1A1919]'>Job Title :</b> {jobTitle}</span>
                                </div>
                            </div>
                            <div className="contact-information">
                                <h3 className="contact-information-title">
                                    Contact Information
                                </h3>
                                <hr />
                                <div className="phone">
                                    <FontAwesomeIcon icon={faPhone} className='text-[rgba(126,144,254,1)]' />
                                    <span><b className='text-[#1A1919]'>Phone :</b> {phone}</span>
                                </div>
                                <div className="email">
                                    <FontAwesomeIcon icon={faEnvelope} className='text-[rgba(126,144,254,1)]' />
                                    <span><b className='text-[#1A1919]'>Email :</b> {email}</span>
                                </div>
                                <div className="address">
                                    <FontAwesomeIcon icon={faLocationDot} className='text-[rgba(126,144,254,1)]' />
                                    <span><b className='text-[#1A1919]'>Address :</b> {address}</span>
                                </div>
                            </div>
                        </div>
                        <button className="apply-btn" onClick={() => handleApplyNow(job)}>Apply Now</button>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    );
};

export default JobDetails;