import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const jobdetails=useLoaderData()
    console.log(jobdetails)
    return (
        <div>
            <h3>Hii</h3>
            <h2>{jobdetails.comapanyName}</h2>
            <h3>{jobdetails.companyLogo}</h3>
        </div>
    );
};

export default JobDetails;