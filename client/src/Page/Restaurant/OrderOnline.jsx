import React from 'react'
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

// components
import FloatMenuBtn from '../../components/Restaurant/Order-Online/FloatMenuBtn'
import MenuListContainer from '../../components/Restaurant/Order-Online/MenuListContainer'
import FoodItem from '../../components/Restaurant/Order-Online/FoodItem';

const OrderOnline = () => {
  return (
    <>
      <div className='w-full flex'>
        <aside className='hidden md:flex flex-col gap-3 border-r border-gray-200 h-screen overflow-y-scroll w-1/4'>
          <MenuListContainer />
          <MenuListContainer />
        </aside>
        <div className='w-full md:w-3/4'>
          <h2 className='text-xl font-semibold'>Order Online</h2>
          <h4 className='flex items-center gap-2 font-light text-gray-500'>
            <AiOutlineCompass /> Live track your order |<BiTimeFive /> 33 min 
          </h4>
          <section>
            <FoodItem 
              image="https://b.zmtcdn.com/data/dish_photos/399/636cbc7a1657155434e5e1900ebd5399.png?output-format=webp"
              price="1090"
              rating={3}
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ut aspernatur hic voluptatem nihil tenetur, expedita ducimus reprehenderit perspiciatis iure. Corrupti necessitatibus laudantium odio modi obcaecati. Eveniet voluptas veritatis doloribus!"
              title="McAloo VM®"
            />
          </section>
        </div>
      </div>
      <FloatMenuBtn />
    </>
  )
}

export default OrderOnline