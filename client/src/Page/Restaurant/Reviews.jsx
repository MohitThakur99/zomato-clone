import React, { useState,useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"

// components
import ReviewCard from "../../components/Restaurant/Reviews/reviewCard"
import AddReviewCard from '../../components/Restaurant/Reviews/AddReviewCard';

// Redux actions
import { getReviews } from '../../Redux/Reducer/Reviews/review.action';

const Reviews = () => {
    const [reviews,setReviews] = useState([]);

    const dispatch = useDispatch();
    const reduxState = useSelector(
      (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
    );

    useEffect(() => {
      if(reduxState){
        dispatch(getReviews(reduxState?._id)).then((data) =>
          setReviews(data.payload.reviews)
        );
      }
  },[reduxState]);

  return (
    <>
      <div className='w-full flex flex-col md:flex-row relative'>
        <div className='w-full md:8/12 flex flex-col gap-3'>
         <div className='md:hidden'>
            <AddReviewCard />
         </div>
            {reviews.map((review) => (
                <ReviewCard {...review} />
            ))}
        </div>
        <aside 
          style={{ height: "fit-content" }}
          className="hidden md:flex items-start md:w-4/12 sticky rounded-xl top-2 bg-white p-3 shadow-md flex-col gap-3"
        >
          <AddReviewCard />
        </aside>
      </div>
    </>
  )
}

export default Reviews