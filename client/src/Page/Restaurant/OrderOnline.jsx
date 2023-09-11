import React, { useState, useEffect } from 'react'
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { useSelector,useDispatch } from 'react-redux';

// components
import FloatMenuBtn from '../../components/Restaurant/Order-Online/FloatMenuBtn'
import MenuListContainer from '../../components/Restaurant/Order-Online/MenuListContainer'
import FoodList from '../../components/Restaurant/Order-Online/FoodList';

// redux actions
import { getFood, getFoodList } from '../../Redux/Reducer/Food/Food.action';

const OrderOnline = () => {
  const [menu, setMenu] = useState([]);
  const [selected,setSelected] = useState("");

  const onClickHandler = (e) => {
    if(e.target.id){
        setSelected(e.target.id);
    }
    return;
  };

  const dispatch = useDispatch();

  const reduxState = useSelector((globalStore) => globalStore.restaurant.selectedRestaurant.restaurant)

  useEffect(() => {
    reduxState && 
      dispatch(getFoodList(reduxState.menu)).then((data) => 
        setMenu(data.payload.menu.menus)
      );
  },[reduxState]);

  return (
    <>
      <div className='w-full h-screen flex'>
        <aside className='hidden md:flex flex-col gap-3 border-r border-gray-200 h-screen overflow-y-scroll w-1/4'>
          {
            menu.map((item) => (
              <MenuListContainer {...item} key={item._id} onClickHandler={onClickHandler} selected={selected} />
            ))
          }
        </aside>
        <div className='w-full px-3 md:w-3/4'>
          <div className='pl-3 mb-4'>
            <h2 className='text-xl font-semibold'>Order Online</h2>
            <h4 className='flex items-center gap-2 font-light text-gray-500'>
              <AiOutlineCompass /> Live track your order |<BiTimeFive /> 33 min 
            </h4>
          </div>
          <section className='flex h-screen overflow-y-scroll flex-col gap-3 md:gap-5'>
            {menu.map((item) => (
              <FoodList key={item._id} {...item} />
            ))}
          </section>
        </div>
      </div>
      <FloatMenuBtn />
    </>
  )
}

export default OrderOnline