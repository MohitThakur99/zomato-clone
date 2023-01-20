import React from "react";

// Components
import FoodTab from "../components/FoodTab";

import Navbar from "../components/Navbar";
const HomeLayout = (props) => {
  return (
    <>
      <Navbar />
      <FoodTab />
      <div className="container mx-auto px-4 lg:px-20 ">{props.children}</div>
    </>
  );
};
export default HomeLayout;