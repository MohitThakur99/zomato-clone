import { combineReducers } from "redux";

import restaurantReducer from "./restaurant/restaurant.reducer";
import ImageReducer from "./Image/Image.reducer";

const rootReducer = combineReducers({ restaurantReducer,ImageReducer });

export default rootReducer