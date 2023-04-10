import React from 'react';
import './JobCategoryList.css';
const JobCategoryList = ({joblist}) => {
    const {postname,available,picture}=joblist
    return (
        <div >
            
           <div className="shadow-xl bg-sky-50 card">
                   <figure className="px-10 pt-10">
                    <img src={picture}alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="items-center text-center card-body">
                     <h2 className="card-title">{postname}</h2>
                     <p>{available}</p>
                    </div>
           </div>
    
           
   </div>
   
    );
};

export default JobCategoryList;