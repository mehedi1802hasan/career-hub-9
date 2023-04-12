
import {CalendarDaysIcon,CurrencyDollarIcon, EnvelopeOpenIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { addToDb } from "../../utils/fakeDB";

import {  useLoaderData, useParams,  } from "react-router-dom";
const JobDetails = () => {
  
  const {detailsId} = useParams();
  const data = useLoaderData();

  const [job,setjob] = useState([]);
  
  useEffect(() => {
    const detailsData = data.filter((dt) => dt.id == detailsId);
    if(detailsData.length){
        setjob(detailsData[0])
    }
  }, []);
  const {
    id,phone,email, experiences,educationalRequirements,jobResponsibility,jobDescription,salary, fulltimeOrPartTime, location, remoteOrOnsite, companyName, jobTitle, companyLogo,
  }= job;
  const handleAddToCart=id=>{
    console.log(id)
   addToDb(id)
  }
  return (
    <div>
       <div className="p-12 mb-16 bg-purple-100">
       <h3 className="text-5xl font-bold text-center">Job Details</h3>
       </div>
       
      <section className='grid grid-flow-row sm:gap-10 md:gap-20 sm:mx-7 md:mx-20 m:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
        <div>
          <h5><span className="font-bold">Job Description</span>: {jobDescription}</h5>
          <h5><span className="font-bold">Job Responsibility</span>: {jobResponsibility}</h5>
          <h5 className="font-bold">Educational Requirements: </h5>
            <p>-{educationalRequirements}</p>
          <h6 className="font-bold">Experiences:</h6>
          <p>-{experiences}</p>
    
        </div>
        <div className="shadow-xl bg-sky-50 card">     
                  <div className=" card-body">
                   <h2 className="mb-5 card-title">Job Details</h2>
          
                   <div className="flex gap-2">
             <CurrencyDollarIcon className="w-6 h-6" />
              <span>Salary: {salary} (per-month)</span> 
             
           </div>
           <div className="flex gap-2">
           <CalendarDaysIcon className="w-6 h-6"/>
                   <p>Job-Title: {jobTitle}</p>
                   </div>
                  
                   <h2 className="mt-5 card-title">Contact Information</h2>
           
           <div className="flex gap-2">
             <PhoneIcon className="w-6 h-6" />
              <span>Phone: {phone}</span> 
             
           </div>
           <div className="flex gap-2">
           <EnvelopeOpenIcon className="w-6 h-6" />
           <span>Email: {email}</span>
           </div>
           <div className="flex gap-2">
             <MapPinIcon className="w-6 h-6" />
              <span>Address: {location}</span> 
           </div>
           <button onClick={()=>handleAddToCart(id)} className="btn btn-primary">
                        Apply-Now
                           </button>
                  </div>
         </div>  
        </section>
    </div>
  );
};

export default JobDetails;