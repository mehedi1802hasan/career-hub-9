import React from 'react';

const Header = () => {
    return (
             <div className='p-10 md:flex'>
             <div className="md:w-6/12 shadow-x card bg-base-100">
             <div className="card-body">
            <h1 className="card-title">One Step <br/> Closer To Your<br/>Dream Job </h1>
           <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
          <div >
           <button className="btn btn-primary">Get Started</button>
          </div>
         </div>
        </div>
        <div className='w-8/12'>
            <img className='w-full h-80' src='https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=600' />
        </div>
        </div>
    
    );
};

export default Header;