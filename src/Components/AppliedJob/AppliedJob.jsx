import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../utils/fakeDB';

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
  return <div>
    <h3></h3>
  </div>;
};

export default AppliedJob;
