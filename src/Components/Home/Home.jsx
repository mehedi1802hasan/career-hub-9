import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Jobs from '../Jobs/Jobs';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import { useLoaderData } from 'react-router-dom';
import './Home.css'

const Home = () => {
  const jobs=useLoaderData()
  const [jobcatagorylist,setjobcatagorylist]=useState([])
  const [seemore, setSeemore] = useState(true)
  
  useEffect(() => {
    fetch('jcl.json')
      .then(res => res.json())
      .then(data => setjobcatagorylist(data))
  }, [])

  return (
    <div>
      <Header />
      <div>
        <h1 className='title'>Job Category List</h1>
        <p className='sub title'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className='grid grid-flow-row gap-10 m-20 my-20 m:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4'>
        {jobcatagorylist.map(joblist => (
          <JobCategoryList
            key={joblist.id}
            joblist={joblist}
          />
        ))}
      </div>

      <div>
        <h1 className='title'>Featured Jobs</h1>
        <p className='sub title'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>

      <div className='grid grid-flow-row sm:gap-10 md:gap-20 sm:mx-7 md:mx-20 m:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
        {jobs.slice(0, seemore ? 4 : 6).map(job => (
          <Jobs
            key={job.id}
            id={job.id}
            job={job}
          />
        ))}
      </div>

      {seemore && (
        <div className='flex justify-center m-5'>
          <button className='bg-yellow-400' onClick={() => setSeemore(false)}>See More</button>
        </div>
      )}
    </div>
  );
};

export default Home;
