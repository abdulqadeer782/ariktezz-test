import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: false,
    user: {},
    role: null,
}

export const loginReducer = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLogin = true
            state.user = action.payload.username
            state.role = action.payload.role

        },
        logout: (state) => {
            state.isLogin = false
            state.user = null
            state.role = null
        }
    },
})

export const { login, logout } = loginReducer.actions

export default loginReducer.reducer