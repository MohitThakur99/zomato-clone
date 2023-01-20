import React from 'react';
import { IoMdArrowDropright } from "react-icons/io";

const PictureCarousalCard = () => {
  return (
    <>
      <div className='w-full h-64 px-4 overflow-hidden relative'>
        <div className='w-full h-full relative'>
            <img 
              src="https://b.zmtcdn.com/data/pictures/4/20496594/4184cf6322520c6e01583ab5d8f39c80.jpeg?output-format=webp" 
              alt="food"
              className='w-full h-full object-cover transition duration-700 ease-in-out rounded-lg'
            />
            <div className='w-full h-full absolute bottom-0 rounded-lg'
                style={{
                    background: "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)"
                }}
            />
        </div>
        
        <div className='absolute w-full bottom-2 left-8 text-white'>
            <h4 className='z-10'>20 Best Insta-worthy Places</h4>
            <h6 className='z-10 flex items-center'>20 Places <IoMdArrowDropright /></h6>
        </div>
      </div>
    </>
  );
};

export default PictureCarousalCard