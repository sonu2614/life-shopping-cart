import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "./actionTypes";

export const add = (value) => {
    return {
        type: ADD_TO_CART,
        payload: value,
    };
};

export const remove = (value) => {
    return {
        type: REMOVE_FROM_CART,
        payload: value,
    };
};

export const clear = () => {
    return {
        type: CLEAR_CART,
    };
};
