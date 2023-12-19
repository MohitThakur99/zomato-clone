import { GET_FOOD_LIST,GET_FOOD } from "./Food.type"

const INITIAL_STATE = {
    Food: [],
    FoodList: [],
};

const FoodReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_FOOD_LIST: 
            return {
                ...state,
                FoodList: action.payload,
            };
        case GET_FOOD: 
            return {
                ...state,
                Food: action.payload,
            };
            
        default:
            return {
                ...state,
            };
    }
}

export default FoodReducer;