import React from 'react';

// components
import DiningCarousal from './DiningCarousal';

const Dining = () => {
  return (
    <div>
        <DiningCarousal />
        <h1 className='text-xl my-4 md:my-8 md:text-3xl md:font-semibold'>Best Dining Restaurants near you in Rajouri Garden</h1>
    </div>
  );
};

export default Dining;