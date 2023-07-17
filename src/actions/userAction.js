import apiClient from '../helpers/apiClient';
import { openNotification } from '../helpers/openNotification';
import { GET_USERS, LOGIN_USER, LOGOUT_USER } from './actionTypes';

export const getUsers = () => dispatch => {
    apiClient('/users').then(res => dispatch(getUserSuccess(res.data))).catch((err) => dispatch(openNotification('error', err)))
}

export const loginUser = (user) => dispatch => {
    localStorage.setItem('is_login', true)
    localStorage.setItem('user_type', user.type)
    dispatch(loginUserSuccess(user))
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('is_login')
    localStorage.removeItem('user_type')
    dispatch(logoutUserSuccess())
    openNotification('success', 'Loggedout successfully.')
}

const getUserSuccess = (values) => {
    return {
        type: GET_USERS,
        payload: values,
    };
}

const loginUserSuccess = (values) => {
    return {
        type: LOGIN_USER,
        payload: values,
    };
};

const logoutUserSuccess = () => {
    return {
        type: LOGOUT_USER,
    };
};