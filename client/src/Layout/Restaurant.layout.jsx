import React from 'react'
import { TiStarFullOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

// components
import RestaurantNavbar from "../components/Navbar/RestaurantNavbar";
import ImageGrid from '../components/Restaurant/ImageGrid';
import RestaurantInfo from '../components/Restaurant/RestaurantInfo';
import InfoButtons from '../components/Restaurant/InfoButtons';

const RestaurantLayout = () => {
  return (
    <>
    <RestaurantNavbar />
      <div className='container mx-auto px-4 lg:px-20'>
        <ImageGrid images={[
          "https://b.zmtcdn.com/data/pictures/chains/1/171/c6da9ad72c43cb2c2dc2c821d1f115ee.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
          "https://b.zmtcdn.com/data/pictures/chains/1/171/c6da9ad72c43cb2c2dc2c821d1f115ee.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
          "https://b.zmtcdn.com/data/pictures/chains/1/171/c6da9ad72c43cb2c2dc2c821d1f115ee.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
          "https://b.zmtcdn.com/data/pictures/chains/1/171/c6da9ad72c43cb2c2dc2c821d1f115ee.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
          "https://b.zmtcdn.com/data/pictures/chains/1/171/c6da9ad72c43cb2c2dc2c821d1f115ee.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        ]} />
          <RestaurantInfo 
            name="McDonald's" 
            restaurantRating="3.8" 
            deliveryRating="3.4" 
            cuisine="Burger, Fast Food, Beverages, Coffee" 
            address="Naraina, New Delhi"
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
      </div>
    </>
  );
};

export default RestaurantLayout;