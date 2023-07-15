import { LOGIN_USER, LOGOUT_USER } from '../actions/actionTypes';

const initialState = {
    users: [
        {
            username: 'admin',
            password: 'admin',
            type: 'admin',
        },
        {
            username: 'editor',
            password: 'editor',
            type: 'editor',
        },
        {
            username: 'viewer',
            password: 'viewer',
            type: 'viewer',
        },
    ],
    isLoggedIn: false,
    currentUser: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                isLoggedIn: true,
                currentUser: action.payload,
            };
        case LOGOUT_USER:
            return {
                ...state,
                isLoggedIn: false,
                currentUser: null,
            };
        default:
            return state;
    }
};

export default userReducer;
