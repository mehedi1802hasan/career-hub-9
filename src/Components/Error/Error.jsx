import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex justify-center bg-red-700 m-28'>
        <div className='p-28 '>
            <h3 className='text-3xl font-bold text-black'>This page is not Found!!!!</h3><br />
     <button><Link to='/'> GO back </Link></button>
     </div>
     </div>
    
    );
};

export default Error;