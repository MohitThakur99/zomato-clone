import { Route , Redirect } from "react-router-dom";
import axios from "axios";
import React,{ useEffect } from 'react'
import { useDispatch } from "react-redux";

// HOC
import HomeLayoutHOC from "./HOC/Home.hoc";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";
import CheckoutLayoutHOC from "./HOC/Checkout.Hoc";

// Page
import Home from "./Page/Home";
import Overview from "./Page/Restaurant/Overview";
import OrderOnline from "./Page/Restaurant/OrderOnline";
import Reviews from "./Page/Restaurant/Reviews";
import Menu from "./Page/Restaurant/Menu";
import Photos from "./Page/Restaurant/Photos";
import Checkout from "./Page/Checkout";
import RedirectRestaurant from "./Page/Restaurant/Redirect";
import GoogleAuth from "./Page/GoogleAuth";

// redux actions
import { getMyself } from "./Redux/Reducer/User/user.action";

// axios global settings
if(localStorage.zomatoUser){
  const { token } = JSON.parse(localStorage.zomatoUser);
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if(localStorage.zomatoUser) dispatch(getMyself());
  },[]);

  return (
    <>
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      <Route path="/restaurant/:id" exact component={RedirectRestaurant} />
      
      <HomeLayoutHOC path="/:type" exact component={Home} />
      <RestaurantLayoutHOC path="/restaurant/:id/overview" exact component={Overview} />
      <HomeLayoutHOC path="/google/:token" exact component={GoogleAuth} />
      <RestaurantLayoutHOC path="/restaurant/:id/order-online" exact component={OrderOnline} />
      <RestaurantLayoutHOC path="/restaurant/:id/menu" exact component={Menu} />
      <RestaurantLayoutHOC path="/restaurant/:id/reviews" exact component={Reviews} />
      <RestaurantLayoutHOC path="/restaurant/:id/photos" exact component={Photos} />
      <CheckoutLayoutHOC path="/checkout/orders" exact component={Checkout} />
    </>
  );
}

export default App;
