import { LOGIN_USER, LOGOUT_USER } from './actionTypes';

export const loginUser = (values) => {
    return {
        type: LOGIN_USER,
        payload: values,
    };
};

export const logoutUser = (values) => {
    return {
        type: LOGOUT_USER,
    };
};