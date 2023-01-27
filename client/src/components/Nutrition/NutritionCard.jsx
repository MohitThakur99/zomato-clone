import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";

const NutritionCard = (props) => {
  return (
    <div className='w-full p-4 md:w-1/2 lg:w-1/3'>
        <div className='bg-white rounded-2xl shadow-lg w-full h-full'>
          <div className={`w-full p-4 h-56 rounded-t-2xl bg-${props.bg}-100`}>
              <img 
                src={props.image}
                alt="suppliments" 
                className='w-full h-full'
              />
          </div>
          <div className='p-3 flex flex-col gap-3'>
              <div className='flex mt-2 items-center gap-3'>
                  <div className='w-4 h-4'>
                      <img 
                      src="https://i.pinimg.com/736x/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.jpg" 
                      alt="veg" 
                      className='w-full h-full'
                      />
                  </div>
                      <ReactStars
                          count={5}
                          // onChange={ratingChanged}
                          size={16}
                          isHalf={true}
                          value={3.5}
                          emptyIcon={<BsStar />}
                          halfIcon={<BsStarHalf />}
                          fullIcon={<BsStarFill />}
                          activeColor="#ffd700"
                      />
                      <span className='text-gray-400'>15</span>
              </div>
              <h3 className='text-xl font-bold text-gray-700'>Burn - Weight Balance</h3>
              <p className='text-sm font-light text-gray-400'>This formula with VFill technology will help improve</p>
              <div className='mt-4'>
                <hr />
              </div>
              <div>
                <span>
                  <s className='text-gray-300 font-light mr-3'>₹650</s> 
                  <strong>₹320</strong>
                </span>
                <p>Monthly pack - 30 capsules</p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default NutritionCard