import React from 'react';
import Header from '../Header/Header';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import { useLoaderData } from 'react-router-dom';
import './Home.css'
const Home = () => {
    const jobcatagorylist=useLoaderData()
    return (
        <div>
           <Header></Header>
          <div >
          <h1 className='jcl'>Job Category List</h1>
            <p className='jcl'>Explore thousands of job opportunities with all the information you need. Its your future</p>
          </div>
            <div className='grid grid-flow-row gap-10 m-20 my-20 m:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4'>    
            {
                jobcatagorylist.map(joblist=><JobCategoryList 
                 
                key={joblist.id}
                joblist={joblist}
                ></JobCategoryList>)
            }
            </div>
        </div>
    );
};

export default Home;