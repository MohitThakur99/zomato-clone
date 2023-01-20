import React, { useState } from "react";

// components
import DeliveryCarousal from "./DeliveryCarousal";
import Brand from "./Brand";
import RestaurantCard from "../restaurantCard";

const Delivery = () => {
  const [restaurantList, setRestaurantList] = useState(
    [
      {
        _id:"123456",
        photos: [
          "https://b.zmtcdn.com/data/pictures/chains/6/1156/d0e4e00b32b344747bc2e648fd5ef243_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
        ],
        name: "Gianis",
        cuisine: ["Ice Cream", "Desserts", "Shake", "Beverages"],
        averageCost: 100,
        isPro: true,
        isOff: 80,
        durationOfdelivery: 47,
        restaurantreviewValue: 4.1
      },
      {
        _id:"123456-2",
        photos: [
          "https://b.zmtcdn.com/data/pictures/chains/3/18540103/3311ce2c0dda9475e6203ffc319f77e7_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
        ],
        name: "Shakes Darbar",
        cuisine: ["Sandwich", "Pasta", "Burger", "Street Food","Wraps","Shake", "Beverages"],
        averageCost: 350,
        isPro: true,
        isOff: 50,
        durationOfdelivery: 29,
        restaurantreviewValue: 4.2
      },
      {
        _id:"123456-3",
        photos: [
          "https://b.zmtcdn.com/data/pictures/3/307893/6d9dad14da075d37021c25041773e07b_o2_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
        ],
        name: "Bikkgane Biryani",
        cuisine: ["Biryani", "Hyderabadi", "Andhra", "North Indian", "Mughlai"],
        averageCost: 350,
        isPro: true,
        isOff: 50,
        durationOfdelivery: 26,
        restaurantreviewValue: 3.9
      },
    ]);
  return (
    <>
      <DeliveryCarousal />
      {/* <Brand /> */}
      <div className="flex justify-between flex-wrap">
        {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
      </div>
    </>
  );
};

export default Delivery;