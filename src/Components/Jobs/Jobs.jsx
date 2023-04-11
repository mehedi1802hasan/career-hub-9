import React from 'react';
import { Link } from 'react-router-dom';

const Jobs = ({job}) => {
    const {companyLogo,jobTitle,companyName,fullTime,location,salary,remote,id}=job
    return (
        <div>
        <div className="shadow-xl bg-sky-50 card">
                  
                    <img className='mx-5' src={companyLogo}alt="Shoes"/>
                    
                    <div className=" card-body">
                     <h2 className="card-title">{jobTitle}</h2>
                     <p>{companyName}</p>
                     <div >
                        <button className="badge badge-outline">{remote}</button>
                        <button className="badge badge-outline">{fullTime}</button>
                     </div>
                    <div className='flex gap-10'>
                        <h6>{location}</h6> 
                         <h6>salary: {salary}</h6>
                    </div>
                     <div className="card-actions">
                     <button className="btn btn-primary">
                            <Link to={`/details/${id}`}> View Details</Link>
                           
                           </button>
                     </div>
                    </div>
                
           </div>
       </div>
    );
};

export default Jobs;