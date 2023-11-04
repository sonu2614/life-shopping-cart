import {
    ADD_TO_CART,
    CLEAR_CART,
    REMOVE_FROM_CART,
} from "../actions/actionTypes";

const initialState = [];

const shoppingReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const existingItem = state.find(
                (item) => item.id === action.payload.id
            );
            // if (existingItem) {
            //     // Item already exists in the cart, do not add a duplicate.
            //     return state;
            // } else {
            //     // Item doesn't exist in the cart, add it.
            //     return [...state, action.payload];
            return existingItem ? state : [...state, action.payload];
        // }
        // return [...state, action.payload];

        case REMOVE_FROM_CART:
            return [...state.filter((item) => item.id !== action.payload.id)];

        case CLEAR_CART:
            return initialState;

        default:
            return state;
    }
};

export default shoppingReducers;
