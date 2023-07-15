import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "./actionTypes";

export const addUser = (values) => {
    return {
        type: ADD_PRODUCT,
        payload: values,
    };
};

export const updateUser = (user) => {
    return {
        type: UPDATE_PRODUCT,
        payload: user,
    };
};


export const deleteUser = (id) => {
    return {
        type: DELETE_PRODUCT,
        payload: id,
    };
};
