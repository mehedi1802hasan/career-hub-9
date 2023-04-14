import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../utils/fakeDB';
import "./AppliedJob.css"
import { Link } from 'react-router-dom';

const AppliedJob = () => {
  const [paa, setPaa] = useState([]);
  useEffect(() => {
    fetch('featuredJobs.json')
      .then(res => res.json())
      .then(data => setPaa(data))
      .catch(error => console.log(error));
  }, []);

  const cart = [];
  const savedCart = getStoredCart();
  if (paa) {
    for (const id in savedCart) {
      const foundJob = paa.find(p => p.id === id);
      if (foundJob) {
        cart.push(foundJob);
       
      }
    }
  }

  console.log(cart);
  return <div >
      <div className="p-12 mb-16 bg-purple-100">
       <h3 className="text-5xl font-bold text-center">Applied Jobs</h3>
       </div>
      <div className='w-10/12 m-auto'> 
        <div className="flex justify-end dropdown dropdown-hover">
  <label tabIndex={0} className="m-1 btn">Filter By</label>
  <ul tabIndex={0} className="p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52">
    <li><a>Onsite</a></li>
    <li><a>Fulltime</a></li>
  </ul>
</div>
<div className='gap-48 m-auto '>
 {
    cart.map(j=>
      <div className="flex justify-between mb-16 bg-red-100 shadow-xl card lg:card-side g-80">
  
  <div className='flex'>
  <div> <h3><img className='mx-5' src={j.companyLogo}alt="Shoes"/></h3></div>
     <div> <h3>{j.jobTitle}</h3><h4>{j.companyName}</h4>  <div>
    <div className='flex gap-5'>    <button>{j.remote}</button>
        <button>{j.fullTime}</button></div>
   
      <div className='flex gap-8'>
        <i>{j.location}</i>
        <p>salary: {j.salary}</p>
      </div>
      </div>
      </div>
  </div>
  
  <button className="btn btn-primary">
                            <Link to={`/details/${j.id}`}> View Details</Link>
                           
                           </button>
         
  
</div>        
    )
  }
  </div>

</div>
 
  
  </div>;
};

export default AppliedJob;
