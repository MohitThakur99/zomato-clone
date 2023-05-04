import React, { useState, useEffect } from 'react'
import { TiStarFullOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { useDispatch } from "react-redux"

// components
import RestaurantNavbar from "../components/Navbar/RestaurantNavbar";
import ImageGrid from '../components/Restaurant/ImageGrid';
import RestaurantInfo from '../components/Restaurant/RestaurantInfo';
import InfoButtons from '../components/Restaurant/InfoButtons';
import TabContainer from '../components/Restaurant/Tabs';
import CartContainer from '../components/Cart/CartContainer';

// redux actions
import { getSpecificRestaurant } from '../Redux/Reducer/restaurant/restaurant.action';
import { getImage } from "../Redux/Reducer/Image/Image.action";

const RestaurantLayout = (props) => {
  const [restaurant, setRestaurant] = useState({ 
    images: [],
    name: "",
    cuisine: "",
    address: "",
  })
  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpecificRestaurant(id)).then((data) => {
      setRestaurant(prev => ({...prev, ...data.payload.restaurant}))

      dispatch(getImage(data.payload.restaurant.photos)).then(data => 
        setRestaurant(prev => ({...prev, ...data.payload.image })))
    });
  },[])

  return (
    <>
    <RestaurantNavbar />
      <div className='container mx-auto px-4 lg:px-20'>
        <ImageGrid images={restaurant.images} />
          <RestaurantInfo 
            name={restaurant?.name}
            restaurantRating={restaurant?.rating || 0} 
            deliveryRating={restaurant?.rating || 0} 
            cuisine={restaurant?.cuisine} 
            address={restaurant?.address}
          />
          <div className='my-4 flex flex-wrap gap-3'>
            <InfoButtons isActive>
              <TiStarFullOutline /> Add Review
            </InfoButtons>
            <InfoButtons>
              <RiDirectionLine /> Direction
            </InfoButtons>
            <InfoButtons>
              <BiBookmarkPlus /> Bookmark
            </InfoButtons>
            <InfoButtons>
              <RiShareForwardLine /> Share
            </InfoButtons>
          </div>
          <div className='my-10'>
            <TabContainer></TabContainer>
          </div>
          <div className='relative'>
            {props.children}
          </div>
          <CartContainer />
      </div>
    </>
  );
};

export default RestaurantLayout;