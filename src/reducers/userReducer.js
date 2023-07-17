import { GET_USERS, LOGIN_USER, LOGOUT_USER } from '../actions/actionTypes';

const initialState = {
    users: [],
    isLoggedIn: localStorage.getItem('is_login') ? true : false,
    userType: localStorage.getItem('user_type') || null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case LOGIN_USER:
            return {
                ...state,
                isLoggedIn: true,
                userType: action.payload,
            };
        case LOGOUT_USER:
            return {
                ...state,
                isLoggedIn: false,
                userType: null,
            };
        default:
            return state;
    }
};

export default userReducer;
