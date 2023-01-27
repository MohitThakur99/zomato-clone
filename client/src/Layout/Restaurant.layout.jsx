import React from 'react'

// components
import RestaurantNavbar from "../components/Navbar/RestaurantNavbar";
import ImageGrid from '../components/Restaurant/ImageGrid';

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
      </div>
    </>
  );
};

export default RestaurantLayout;